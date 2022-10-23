import { cloneElement } from "react";
import AuthProvider from "./auth";

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) => cloneElement(parent, { children: kids }),
        children
    );
}

const ContextProvider = ({ children }) => {
    return (
        <ProviderComposer contexts={[<AuthProvider />]}>
            {children}
        </ProviderComposer>
    );
};

export default ContextProvider;