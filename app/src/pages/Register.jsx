import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { auth } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const toast = useToast();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setLoading(false);
    };

    const clickSubmit = async () => {
        let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!email || !password || !name) {
            toast({
                title: "Error",
                status: "error",
                duration: 5000,
                isClosable: true,
                description: "Please fill all the inputs.",
            });
            return;
        } else if (!emailRegex.test(email)) {
            toast({
                title: "Error",
                status: "error",
                duration: 5000,
                isClosable: true,
                description: "Please input a valid email address",
            });
            return;
        } else if (password.length < 8) {
            toast({
                title: "Error",
                status: "error",
                duration: 5000,
                isClosable: true,
                description: "Passwords must be at least 8 characters",
            });
            return;
        } else if (name.length < 3) {
            toast({
                title: "Error",
                status: "error",
                duration: 5000,
                isClosable: true,
                description: "Name must be at least 3 characters",
            });
            return;
        } else if (password !== confirmPassword) {
            toast({
                title: "Error",
                status: "error",
                duration: 5000,
                isClosable: true,
                description: "Passwords dont match",
            });
            return;
        } else {
            setLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCred) => {
                    const userRef = doc(db, "users", userCred.user.uid);
                    setDoc(userRef, { name, email });
                    resetForm();
                    toast({
                        title: "Success",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                        description:
                            "Your Account has been created successfully",
                    });
                    navigate("/login");
                })
                .catch((err) => {
                    toast({
                        title: "Error",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                        description: err.message,
                    });
                    return;
                });
        }
    };

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        to start connecting ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Your Name</FormLabel>
                            <Input
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                placeholder="john.doe@xyz.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Confirm Password</FormLabel>
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                isLoading={loading}
                                loadingText={"Saving your Info ..."}
                                disabled={loading}
                                onClick={clickSubmit}
                            >
                                Sign up
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
