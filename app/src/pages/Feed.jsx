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
import { nanoid } from "nanoid";

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

// Just copy the object part downwards and add new values
// something like this

/**
 *  {
 *  id: nanoid(),
 * title: "New Title",
 * description: `
 * New desc
 * `,
 * authorName: 'New AuthorName',
 * authorId: nanoid(12),
 * createdAt: 'New Date',
 * imageLink: "imageLink",
 * userImageLink: "userImageLink",
 * }
 */

const FeedsArr = [
    {
        id: nanoid(12),
        title: "New Beginnings Disability School, Nairobi, Kenya",
        description: `
        New Beginnings Disability School is in Kibera and provides a
        vital service to disabled people living in the area. This
        slum in Nairobi is the biggest on the African continent with
        an estimated population of over 1 million people. The New
        Beginnings Disabilty School currently is just one room with
        little to no resources. Networks for Voluntary Services
        Kenya (NVS), the preferred volunteer organisation in the
        region, partners with the school to provide volunteer
        placements to help the solo teacher with her handful of
        students, but there are hundreds of disabled students
        waitlisted to attend. There is room to expand the school and
        take in more students but currently the school cannot
        support an increase in pupils without your help. Donations
        will help to pay the facility's rent, school lunches, Kenyan
        staff salaries, educational materials, cleaning supplies,
        community outing costs, and semi-regular wheelchair
        maintenance. All of the supplies and food are purchased in
        the neighborhood and every penny that goes into New
        Beginnings supports the Kenyan students, staff and Kibera
        neighbourhood. 100% of donations will be given directly to
        the school.
        `,
        authorName: "GoFundMe",
        authorId: nanoid(12),
        createdAt: "Oct 23, 2022",
        imageLink:
            "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        userImageLink:
            "https://tl.vhv.rs/dpng/s/436-4369151_gofundme-logo-png-transparent-png.png",
    },
];

const Feed = () => {
    return (
        <>
            <Navbar />
            <Container maxW={"5xl"} p="12" fontFamily={"Poppins"}>
                <Heading as="h1">Active Global Campaigns</Heading>
                {FeedsArr.map((item) => (
                    <FeedItem2 data={item} key={item.id} />
                ))}
            </Container>
        </>
    );
};

const FeedItem2 = ({ data }) => (
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
                    {data?.createdAt}
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
                    Link
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
                    {data?.title}
                </Link>
                <chakra.p
                    mt={2}
                    color="gray.600"
                    _dark={{
                        color: "gray.300",
                    }}
                >
                    {data?.description}
                </chakra.p>
            </Box>
            <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src={data?.imageLink}
                alt="Article"
            />

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
                        src={data?.userImageLink}
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
                        {data?.authorName}
                    </Link>
                </Flex>
            </Flex>
        </Box>
    </Flex>
);

export default Feed;
