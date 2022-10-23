import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Tag,
    useColorModeValue,
    Container,
    Flex,
    chakra,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const BlogTags = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag
                        size={"md"}
                        variant="solid"
                        colorScheme="orange"
                        key={tag}
                    >
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

export const BlogAuthor = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const Feed = () => {
    return (
        <>
            <Navbar />
            <Container maxW={"5xl"} p="12"  fontFamily={"Poppins"}>
                <Heading as="h1">Active Global Campaigns</Heading>
                {[...Array(5)].map((_, i) => (
                    <FeedItem2 key={i} />
                ))}
            </Container>
        </>
    );
};

const FeedItem = () => (
    <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
    >
        <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
        >
            <Box
                width={{ base: "100%", sm: "85%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                marginTop="5%"
            >
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                    <Image
                        borderRadius="lg"
                        src={
                            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                        }
                        alt="some good alt text"
                        objectFit="contain"
                    />
                </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                    bgGradient={useColorModeValue(
                        "radial(orange.600 1px, transparent 1px)",
                        "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                />
            </Box>
        </Box>
        <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
        >
            <BlogTags tags={["Engineering", "Product"]} />
            <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                    Blog article title
                </Link>
            </Heading>
            <Text
                as="p"
                marginTop="2"
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize="lg"
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </Text>
            <BlogAuthor
                name="John Doe"
                date={new Date("2021-04-06T19:01:27Z")}
            />
        </Box>
    </Box>
);

const FeedItem2 = () => (
    <Flex
        bg="#edf3f8"
        _dark={{
            bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
    >
        <Box
            mx="auto"
            px={8}
            py={4}
            rounded="lg"
            shadow="lg"
            bg="white"
            _dark={{
                bg: "gray.800",
            }}
            maxW="2xl"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <chakra.span
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                        color: "gray.400",
                    }}
                >
                    Mar 10, 2019
                </chakra.span>
                <Link
                    px={3}
                    py={1}
                    bg="gray.600"
                    color="gray.100"
                    fontSize="sm"
                    fontWeight="700"
                    rounded="md"
                    _hover={{
                        bg: "gray.500",
                    }}
                >
                    Design
                </Link>
            </Flex>

            <Box mt={2}>
                <Link
                    fontSize="2xl"
                    color="gray.700"
                    _dark={{
                        color: "white",
                    }}
                    fontWeight="700"
                    _hover={{
                        color: "gray.600",
                        _dark: {
                            color: "gray.200",
                        },
                        textDecor: "underline",
                    }}
                >
                    Accessibility tools for designers and developers
                </Link>
                <chakra.p
                    mt={2}
                    color="gray.600"
                    _dark={{
                        color: "gray.300",
                    }}
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                </chakra.p>
            </Box>

            <Flex justifyContent="space-between" alignItems="center" mt={4}>
                <Link
                    color="brand.600"
                    _dark={{
                        color: "brand.400",
                    }}
                    _hover={{
                        textDecor: "underline",
                    }}
                    href={"/discussion"}
                >
                    Join Discussion
                </Link>

                <Flex alignItems="center">
                    <Image
                        mx={4}
                        w={10}
                        h={10}
                        rounded="full"
                        fit="cover"
                        display={{
                            base: "none",
                            sm: "block",
                        }}
                        src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                        alt="avatar"
                    />
                    <Link
                        color="gray.700"
                        _dark={{
                            color: "gray.200",
                        }}
                        fontWeight="700"
                        cursor="pointer"
                    >
                        Khatab wedaa
                    </Link>
                </Flex>
            </Flex>
        </Box>
    </Flex>
);

export default Feed;
