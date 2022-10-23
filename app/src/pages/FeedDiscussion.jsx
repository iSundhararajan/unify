import {
    Flex,
    Box,
    chakra,
    Link,
    Image,
    Input,
    IconButton,
    Stack,
    useColorModeValue,
    Tooltip,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { TbBrandTelegram } from "react-icons/tb";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { nanoid } from "nanoid";

export default function FeedDiscussion() {
    const [info, setInfo] = useState(null);
    const [respText, setRespText] = useState("");
    const params = useParams();
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [responses, setResponses] = useState([]);

    let imageLink =
        "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

    const createNewResp = async () => {
        if (!respText) {
            return;
        } else {
            setLoading(true);
            const respInfo = {
                text: respText,
                authorName: user?.name,
                authorId: user?.id,
                campaignId: params?.id,
                uniqueId: nanoid(12),
            };
            let resp = await axios.post(
                "https://5000-isundhararajan-unify-jnw7md09zl4.ws-eu72.gitpod.io/api/campaigns/response/create",
                respInfo
            );
            console.log(resp.data);
            setRespText("");
            setLoading(false);
        }
    };

    const getInfo = async () => {
        const resp = await axios.get(
            `https://5000-isundhararajan-unify-jnw7md09zl4.ws-eu72.gitpod.io/api/campaigns/detail/${params.id}`
        );
        setInfo(resp.data);
    };

    const fetchResponses = async () => {
        const resp = await axios.get(
            `https://5000-isundhararajan-unify-jnw7md09zl4.ws-eu72.gitpod.io/api/campaigns/response/list/${params.id}`
        );
        setResponses(resp.data);
    };

    useEffect(() => {
        if (params) {
            getInfo();
            fetchResponses();
        }
    }, [params.id]);

    return (
        <>
            <Navbar />
            <Flex
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
                fontFamily={"Poppins"}
            >
                <Box
                    mx="auto"
                    rounded="lg"
                    shadow="md"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    maxW="5xl"
                >
                    <Image
                        roundedTop="lg"
                        w="full"
                        h={64}
                        fit="cover"
                        src={info?.imageLink || imageLink}
                        alt="Article"
                    />

                    <Box p={6}>
                        <Box>
                            <chakra.span
                                fontSize="xs"
                                textTransform="uppercase"
                                color="brand.600"
                                _dark={{
                                    color: "brand.400",
                                }}
                            ></chakra.span>
                            <Link
                                display="block"
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                fontWeight="bold"
                                fontSize="2xl"
                                mt={2}
                                _hover={{
                                    color: "gray.600",
                                    textDecor: "underline",
                                }}
                            >
                                Thanks for joining the discussion!
                            </Link>
                            <chakra.p
                                mt={2}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                                {info?.description}
                            </chakra.p>
                        </Box>

                        <Box mt={4}>
                            <Flex alignItems="center" justify={"space-between"}>
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                >
                                    <Flex alignItems="center">
                                        <Link
                                            mx={2}
                                            fontWeight="bold"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.200",
                                            }}
                                        >
                                            by {info?.authorName}, Organizer
                                        </Link>
                                    </Flex>
                                    <chakra.span
                                        mx={1}
                                        fontSize="sm"
                                        color="gray.600"
                                        _dark={{
                                            color: "gray.300",
                                        }}
                                    >
                                        {new Date(
                                            info?.createdAt
                                        ).toLocaleDateString()}
                                    </chakra.span>
                                </Box>
                                <Link
                                    bg="gray.900"
                                    color="gray.100"
                                    px={5}
                                    py={3}
                                    fontWeight="semibold"
                                    rounded="lg"
                                    _hover={{
                                        bg: "gray.800",
                                    }}
                                >
                                    Make a Donation
                                </Link>
                            </Flex>
                        </Box>

                        <Stack direction="row" my={3}>
                            <Input
                                variant={"solid"}
                                borderWidth={1}
                                color={"gray.800"}
                                _placeholder={{
                                    color: "gray.400",
                                }}
                                borderColor={useColorModeValue(
                                    "gray.300",
                                    "gray.700"
                                )}
                                placeholder={"Type your response ..."}
                                aria-label={"Response"}
                                w={"70%"}
                                value={respText}
                                onChange={(e) => setRespText(e.target.value)}
                            />
                            <Tooltip label={"Send"} hasArrow placement="top">
                                <IconButton
                                    icon={<TbBrandTelegram />}
                                    size={"md"}
                                    isRound
                                    colorScheme={"green"}
                                    // isLoading={loading}
                                    onClick={createNewResp}
                                    // disabled={loading}
                                />
                            </Tooltip>
                        </Stack>
                        {responses?.length > 0 ? (
                            responses.map((item, i) => (
                                <ResponseItem key={i} item={item} />
                            ))
                        ) : (
                            <chakra.p
                                mt={2}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                                {"No New Responses yet!"}
                            </chakra.p>
                        )}
                    </Box>
                </Box>
            </Flex>
        </>
    );
}

const ResponseItem = ({ item }) => {
    let dummyName = "Riley Davies";
    function getImgUrl(name) {
        if (name) {
            return `https://avatars.dicebear.com/api/adventurer/${name
                .toLowerCase()
                .replaceAll(" ", "")}.svg`;
        } else {
            return `https://avatars.dicebear.com/api/adventurer/${dummyName
                .toLowerCase()
                .replaceAll(" ", "")}.svg`;
        }
    }
    return (
        <Box
            mt={5}
            ml={4}
            boxShadow={"lg"}
            w={"70%"}
            rounded={"lg"}
            borderColor={"gray.200"}
            p={4}
        >
            <Flex alignItems="center">
                <Flex alignItems="center">
                    <Image
                        h={8}
                        fit="cover"
                        rounded="full"
                        src={getImgUrl(item?.authorName)}
                        alt="Avatar"
                    />
                    <Link
                        mx={2}
                        fontWeight="bold"
                        color="gray.700"
                        _dark={{
                            color: "gray.200",
                        }}
                        fontSize={"sm"}
                    >
                        {item?.authorName || dummyName}
                    </Link>
                </Flex>
                <chakra.span
                    mx={1}
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                        color: "gray.300",
                    }}
                >
                    {new Date(item?.createdAt).toLocaleDateString()}
                </chakra.span>
            </Flex>
            <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{
                    color: "gray.400",
                }}
            >
                {item?.text}
            </chakra.p>
        </Box>
    );
};
