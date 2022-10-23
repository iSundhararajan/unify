import {
    Box,
    Heading,
    Link,
    Image,
    Container,
    Flex,
    chakra,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { nanoid } from "nanoid";
import axios from "axios"
import { useState, useEffect } from "react"

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
    {
    id: nanoid(),
    title: "The Small World",
    description: `The Small Worlds mission is to empower girls, women and communities in the Himalayan regions of Nepal. The organization supports girls from small, remote communities to provide girls resources and support they need to complete their education. Every year, the Girls Dorm for Higher Education in Salleri, Nepal serves 40 girls in grades 11 and 12. The girls come from some of the most remote villages in Nepal's Solukhumbu region and travel to reside at the dorm to access these grade levels of school, which are unavailable in their home villages. In the areas we work, up to seven out of 10 girls drop out of school after the 10th grade. The dorm provides a safe space for the girls to live and learn together. In addition to their traditional education, girls residing at the dorm take extra classes, such as computer education, to prepare them for potential employment in the future.`,
    authorName: 'GoFundMe',
    authorId: nanoid(12),
    createdAt: 'Oct 23, 2022',
    imageLink: "https://www.letsroam.com/explorer/wp-content/uploads/sites/10/2021/09/Charity-Event-Ideas.jpg",
    userImageLink: "https://tl.vhv.rs/dpng/s/436-4369151_gofundme-logo-png-transparent-png.png",
     },
     {
        id: nanoid(),
        title: "Dhammajarinee Witthaya School",
        description: `Since 1993, the Dhammarjinee Witthaya School (DWS) has offered a safe and loving home with quality education to over 4,000 underserved Thai girls, including orphans, refugees, and those suffering from abuse and impoverishment. In addition to receiving a formal education, students gain vocational, sustainability, and personal development skills. Over 90% of graduates attend college—ending the cycle of poverty and a lack of opportunity for themselves and their families.
        `,
        authorName: 'GoFundMe',
        authorId: nanoid(12),
        createdAt: 'Oct 23, 2022',
        imageLink: "https://static.wixstatic.com/media/ceb78f_715b13d5c76e4450ae437cc250d397f0~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/ceb78f_715b13d5c76e4450ae437cc250d397f0~mv2.jpg",
        userImageLink: "https://tl.vhv.rs/dpng/s/436-4369151_gofundme-logo-png-transparent-png.png",
         }
];

const Feed = () => {
    const [data, setData] = useState(FeedsArr)
    const getData = async() => {
        let resp = await axios.get("https://5000-isundhararajan-unify-jnw7md09zl4.ws-eu72.gitpod.io/api/campaigns/list")
        setData(resp.data)
    }

    useEffect(() => {
        getData();
    }, [])

    console.log(data)

    return (
        <>
            <Navbar />
            <Container maxW={"5xl"} p="12" fontFamily={"Poppins"}>
                <Heading as="h1">Active Global Campaigns</Heading>
                {data.map((item) => (
                    <FeedItem2 data={item} key={item.id} />
                ))}
            </Container>
        </>
    );
};

const FeedItem2 = ({ data }) => {
    let imageLink = "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    return (
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
                src={data?.imageLink || imageLink}
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
                    href={`/discussion/${data?.id}`}
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
}
export default Feed;
