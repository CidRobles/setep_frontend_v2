import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sistema SETEP",
    description: "Sistema de gestión SETEP",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="bg-muted">
                    {children}
                </main>
            </body>
        </html>
    );
}
