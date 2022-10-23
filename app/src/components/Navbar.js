import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import CreateNewCampaign from "./CreateNewCampaign";

const NavLink = ({ text, href }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={href}
    >
        {text}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [openModal, setModalOpen] = useState(false);

    const { logout, user } = useAuth();

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
        <>
            <Box
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                fontFamily={"Poppins"}
            >
                <CreateNewCampaign open={openModal} setOpen={setModalOpen} />
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box>Unify</Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            <NavLink text={"Home"} href={"/"} />
                            <NavLink text={"About Us"} href={"/about"} />
                            <NavLink text={"Feed"} href={"/feed"} />
                            <NavLink
                                text={"Talk to Unify Bot"}
                                href={
                                    "https://weresolver.vinamrasharma.com/index.php/10-2/"
                                }
                            />
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Button
                            variant={"solid"}
                            colorScheme={"teal"}
                            size={"sm"}
                            mr={4}
                            leftIcon={<AddIcon />}
                            onClick={() => setModalOpen(true)}
                        >
                            Create New Campaign
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar
                                    size={"sm"}
                                    name={dummyName}
                                    src={getImgUrl(user?.name)}
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>
                                    {user?.name || "Riley Davies"}
                                </MenuItem>
                                <MenuItem>
                                    {user?.email || "riley.davies@gmail.com"}
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            <NavLink text={"Home"} href={"/"} />
                            <NavLink text={"About Us"} href={"/about"} />
                            <NavLink text={"Feed"} href={"/feed"} />
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
