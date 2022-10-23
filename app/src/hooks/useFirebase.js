import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "../firebase";

export default function useFirebase() {
    const [user, setUser] = useState(null);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setUser(null);
            return;
        }

        await fetchUser(authState.uid);
    };

    const fetchUser = async (userId) => {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        setUser({ id: userSnap.id, ...userSnap.data() });
        sessionStorage.setItem(
            "userInfo",
            JSON.stringify({ id: userSnap.id, ...userSnap.data() })
        );
    };

    const logout = () => {
        signOut(auth).then(() => {
            setUser(null);
            sessionStorage.removeItem("userInfo");
            document.location.href = "/";
        });
    };

    useEffect(
        () => onAuthStateChanged(auth, (user) => authStateChanged(user)),
        []
    );

    useEffect(() => {
        if (!user && sessionStorage.getItem('userInfo')){
            setUser(JSON.parse(sessionStorage.getItem("userInfo")))
        }
    }, [user])

    return {
        user, logout, fetchUser
    }
}
