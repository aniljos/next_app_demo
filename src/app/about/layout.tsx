import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Training App",
    description: "Generated by create next app",

};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* <nav>This is the about layout</nav> */}
            {children}
        </>
    );
}