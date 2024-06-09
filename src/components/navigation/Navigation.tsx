"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"
import logo from '../../../public/logo-setep-header.png'
import { Users, School, HandCoins, HeartHandshake, GraduationCap, Shield } from "lucide-react"

const CustomLink = ({ href, ...props }) => {
    const pathname = usePathname();    
    const isActive = pathname.includes(href);

    return (
        <NavigationMenuLink asChild active={isActive} className={`flex w-full min-w-full max-w-full items-center${cn(navigationMenuTriggerStyle())}`}>
            <Link href={href} className="flex justify-start" {...props} />
        </NavigationMenuLink>
    );
};

export function TopNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center", className)}
            {...props}
        >

            <Link href='/'>
                <Image src={logo} alt="Sindicato Estatal de Trabajadores de la Educación de Puebla" className="w-3/6"></Image>
            </Link>

            <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Overview
            </Link>
            <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Customers
            </Link>
            <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Products
            </Link>
            <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Settings
            </Link>
        </nav>
    )
}

export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">shadcn</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            m@example.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function SideNav() {
    return (
        <div className="p-4 size-full">
            <NavigationMenu orientation="vertical" className="block w-full min-w-full max-w-full">
                <NavigationMenuList className="block w-full min-w-full max-w-full">
                    <div className="grid justify-items-stretch gap-2">
                        <NavigationMenuItem>
                            <CustomLink href="/becas">
                                <GraduationCap className="h-6 w-6 mr-4" />
                                Becas
                            </CustomLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <CustomLink href="/carteras">
                                <Shield className="h-6 w-6 mr-4" />
                                Carteras
                            </CustomLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <CustomLink href="/planteles">
                                <School className="h-6 w-6 mr-4" />
                                Planteles
                            </CustomLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <CustomLink href="/agremiados">
                                <Users className="h-6 w-6 mr-4" />
                                Agremiados
                            </CustomLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <CustomLink href="/caja">
                                <HandCoins className="h-6 w-6 mr-4" />
                                Caja de ahorro
                            </CustomLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <CustomLink href="/prestaciones">
                                <HeartHandshake className="h-6 w-6 mr-4" />
                                Benficios y prestaciones
                            </CustomLink>
                        </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}