import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });
import { SideNav, TopNav, UserNav } from "@/components/navigation/Navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
    title: "Sistema de gestión SETEP",
    description: "Sistema de gestión del Sindicato Estatal de Trabajadores de la Educación de Puebla",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="min-h-screen scroll-smooth overflow-hidden">
            <body className={`${inter.className} min-h-screen`}>
                {/* Top Nav */}
                <header className="h-[8vh] border-b">
                    <div className="flex size-full items-center px-4">
                        <TopNav />
                        <div className="ml-auto flex items-center">
                            <UserNav />
                        </div>
                    </div>
                </header>
                <div className="grid grid-cols-12 h-[92vh]">
                    {/* Side Nav */}
                    <div className="hidden md:flex col-span-2 border-r size-full">
                        <SideNav />
                    </div>
                    <div className="col-span-10 size-full">
                        {/* Content */}
                        <div className="flex-1 bg-muted size-full p-6">
                            <ScrollArea className="h-[87vh] rounded-md">
                                {children}
                                <Toaster />
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}