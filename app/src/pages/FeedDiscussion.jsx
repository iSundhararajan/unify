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

export default function FeedDiscussion() {
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
                        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
                            >
                                Product
                            </chakra.span>
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
                                I Built A Successful Blog In One Year
                            </Link>
                            <chakra.p
                                mt={2}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Molestie parturient et sem
                                ipsum volutpat vel. Natoque sem et aliquam
                                mauris egestas quam volutpat viverra. In pretium
                                nec senectus erat. Et malesuada lobortis.
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
                                        <Image
                                            h={10}
                                            fit="cover"
                                            rounded="full"
                                            src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                            alt="Avatar"
                                        />
                                        <Link
                                            mx={2}
                                            fontWeight="bold"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.200",
                                            }}
                                        >
                                            Jone Doe
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
                                        21 SEP 2015
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
                            />
                            <Tooltip label={"Send"} hasArrow placement="top">
                                <IconButton
                                    icon={<TbBrandTelegram />}
                                    size={"md"}
                                    isRound
                                    colorScheme={"green"}
                                />
                            </Tooltip>
                        </Stack>
                        {[...Array(4)].map((_, i) => (
                            <ResponseItem key={i} />
                        ))}
                    </Box>
                </Box>
            </Flex>
        </>
    );
}

const ResponseItem = () => (
    <Box mt={5} ml={4} boxShadow={"lg"} w={"70%"} rounded={"lg"} borderColor={'gray.200'} p={4} >
        <Flex alignItems="center">
            <Flex alignItems="center">
                <Image
                    h={8}
                    fit="cover"
                    rounded="full"
                    src={
                        "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    }
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
                    {"Riley Davies"}
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
                5 min ago
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel.
        </chakra.p>
    </Box>
);
