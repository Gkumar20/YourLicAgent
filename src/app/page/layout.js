import Navbar from "../components/Navbar";

export default function PageLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>

    );
}