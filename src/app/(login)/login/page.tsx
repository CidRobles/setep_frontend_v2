"use client"
// Resolvers
import { zodResolver } from "@hookform/resolvers/zod"
// Hooks
import { useForm } from "react-hook-form"
// Assets
import logo from '../../../../public/SETEP-logo.png'
// Components
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    expediente: z.string({
        required_error: 'El número de expediente es requerido',
        invalid_type_error: 'El número de expediente solo puede contener digitos'
    }).regex(/^\d{5,6}$/, {
        message: 'El número de expediente solo puede contener digitos'
    }),
    password: z.string({
        required_error: 'Se requiere una contraseña',
    })
})

export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            expediente: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_DEVELOPMENT_API_ENDPOINT}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...values
                }),
            })

            if (!response.ok) throw new Error('Login failed')

            const { token } = await response.json()
            document.cookie = `token=${token}; path=/`
            router.push('/')
        } catch (error) {
            console.error(error);
        }
    }

    const router = useRouter()
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="expediente"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Número de expediente</FormLabel>
                            <FormControl>
                                <Input placeholder="Número de expediente" minLength={5} maxLength={6} required {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input type="password" minLength={4} required {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-row flex-nowrap justify-between content-center items-center">
                    <Button type="submit">Iniciar sesión</Button>
                    <a href="#" className="font-light">Olvidé mi contraseña</a>
                </div>

            </form>
        </Form>
    )
}


export default function Login() {
    return (
        <div className="h-screen w-100 flex justify-evenly items-center align-center">
            <div className='flex-col flex-nowrap justify-center justify-items-center justify-self-center content-center p-4'>
                <Image
                    src={logo}
                    alt="Sindicato Estatal de Trabajadores de la Educación de Puebla"
                    width={500}
                    height={500}
                    className="scale-50 lg:scale-100"
                />
            </div>
            <div className='flex-col flex-nowrap justify-center justify-items-center justify-self-center content-center p-4'>
                <Card className="shadow-2xl">
                    <CardHeader>
                        <CardTitle className='text-center'>Login</CardTitle>
                        <CardDescription className='text-left'>Inicie sesión con su número de expediente y contraseña</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ProfileForm></ProfileForm>
                    </CardContent>
                </Card>                
            </div>
        </div>
    );
}
