
"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

import { agremiados } from "../../../../../../public/data-agremiados"

const formSchema = z.object({
    agremiado: z.string(),
    rfc: z.string(),
    expediente: z.string(),
    clave: z.string()
})

function getData(id: String) {
    // Fetch data from your API here.
    const agremiado = agremiados.find((element) => element.id == id)
    return agremiado
}

export default function Page({ params }: { params: { slug: string } }) {

    const { toast } = useToast()

    const agremiado = getData(params.slug)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            agremiado: agremiado?.agremiado,
            rfc: "",
            expediente: "",
            clave: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
    }
    return (
        <div className="w-100">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Ingreso a caja de ahorro</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Datos generales
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-flow-col justify-stretch gap-4 mb-4">
                                            <FormField
                                                control={form.control}
                                                name="agremiado"
                                                defaultValue={agremiado?.agremiado}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Agremiado</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} disabled />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="rfc"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>RFC</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} disabled />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="clave"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Clave presupuestal</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} disabled />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="expediente"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Número de expediente</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} disabled />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="grid grid-flow-col justify-stretch gap-4 mb-4">
                                            <FormField
                                                control={form.control}
                                                name="domicilio"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Domicilio particular</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} disabled />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="telefono"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Número telefónico</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} disabled />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Datos del centro de trabajo
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Datos de ahorro
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end pt-4">
                            <Button type="submit">Guardar</Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>

        </div>
    )
}