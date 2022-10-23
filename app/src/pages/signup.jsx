import {useState} from "react";
import LoginImg from "../assets/login.svg";
import GoogleLogo from "../assets/google_logo.png";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react"
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
    
    const toast = useToast();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
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
                    navigate("/signin");
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
        <div className="relative">
            <div className="z-10 mt-16 bg-secondary md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></div>

            <div className="z-20 p-4 m-8 origin-bottom-right transform border-4 border-tertiary lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl bg-blue-500">
                <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">
                    <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                        <img
                            width="600px"
                            height="400px"
                            src={LoginImg}
                            alt="img"
                        />
                    </div>

                    <div className="md:flex md:flex-col md:justify-center lg:pr-16">
                        <h2 className="mb-4 text-6xl self-center font-bold tracking-wider text-white cursor-pointer" onClick={() => navigate('/')}>
                            Unify
                        </h2>

                        <div className="relative mt-4 outline-transparent outline">
                            <input
                                name="name"
                                placeholder="Your Name"
                                className="block w-full pb-2 pl-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            
                        </div>
                        <div className="relative mt-4 outline-transparent outline">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="block w-full pb-2 pl-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            {/* <label className="absolute top-0 p-2 text-lg text-gray-200 duration-300 md:text-lg -z-1 origin-0">
                                Email
                            </label> */}
                        </div>

                        <div className="relative mt-8 outline-transparent outline">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="block w-full pb-2 pl-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            {/* <label className="absolute top-0 p-2 text-lg text-gray-200 duration-300 md:text-lg -z-1 origin-0">
                                Password
                            </label> */}
                        </div>

                        <div className="grid justify-center grid-cols-1 gap-1 md:gap-4 mx-4 md:grid-cols-2">
                            <button
                                type="button"
                                className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:shadow-lg"
                                onClick={clickSubmit}
                                disabled={loading}
                            >
                                Sign Up
                            </button>

                            <button
                                type="button"
                                className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 hover:shadow-lg"
                                onClick={() => navigate('/signin')}
                            >
                                Sign In
                            </button>
                        </div>

                        {/* <div className="w-full flex items-center justify-center text-lg mb-4 text-white">
                            <div className="inline-flex h-1 mx-4 bg-pink-500 rounded-full w-52"></div>
                            or
                            <div className="inline-flex h-1 mx-4 bg-pink-500 rounded-full w-52"></div>
                        </div>

                        <div
                            className="w-full block bg-white hover:bg-gray-100  text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 cursor-pointer shadow-lg"
                            onClick={signInWithGoogle}
                        >
                            <div className="flex items-center justify-center bg-white">
                                <img
                                    src={GoogleLogo}
                                    alt="google"
                                    className="bg-white w-4"
                                />
                                <span className="bg-white ml-4">
                                    Sign in with Google
                                </span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-secondary rounded-3xl md:block hidden"></div>
        </div>
    );
}

export default Signup;
