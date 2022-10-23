import { createContext } from "react"
import useFirebase from "../hooks/useFirebase"

export const AuthContext = createContext({
    user: null,
    logout: async () => {},
    fetchUser: async () => {}
})

export default function AuthProvider ({ children }) {
    const auth = useFirebase()

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}