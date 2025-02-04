import AppBar from "@/components/Appbar";
import { Metadata } from "next";
import { moduleRoutes } from "./routes/routes";

export const metadata: Metadata = {
    title: "About Training App",
    description: "Generated by create next app",

};

export default function ServerComponentsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="container">
                <h3>React Server Components</h3>
                <AppBar routes={moduleRoutes} mode="light" title="RSC"/>
                {children}
            </div>
        </>
    );
}