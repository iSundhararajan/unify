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

    const { logout, user } = useAuth()

    let dummyName = "Riley Davies"

    function getImgUrl(name){
        if (name){
            return `https://avatars.dicebear.com/api/adventurer/${name.toLowerCase().replaceAll(" ","")}.svg`
        } else {
            return `https://avatars.dicebear.com/api/adventurer/${dummyName.toLowerCase().replaceAll(" ","")}.svg`
        }
    }

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Button
                            variant={"solid"}
                            colorScheme={"teal"}
                            size={"sm"}
                            mr={4}
                            leftIcon={<AddIcon />}
                        >
                            Action
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
                                <MenuItem>{user?.name || "Riley Davies"}</MenuItem>
                                <MenuItem>{user?.email || "riley.davies@gmail.com"}</MenuItem>
                                <MenuDivider />
                                <MenuItem onClick={logout} >Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                        <NavLink text={"Home"} href={"/"} />
                           <NavLink text={"About Us"} href={"/about"} />
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </>
    );
}
