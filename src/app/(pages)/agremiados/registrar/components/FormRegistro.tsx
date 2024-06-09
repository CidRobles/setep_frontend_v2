"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Switch } from "@/components/ui/switch"


const FormSchema = z.object({
    expediente: z.string({
        required_error: 'El número de expediente es requerido',
    }).regex(/^\d{5,6}$/, {
        message: 'De 5 a 6 digitos, solo puede contener números'
    }),
    rfc: z.string({
        required_error: 'El RFC es requerido',
    }).length(13, {
        message: 'El RFC debe contener 13 caracteres'
    }),
    curp: z.string({
        required_error: 'El CURP es requerido',
    }).length(18, {
        message: 'El CURP debe contener 18 caracteres'
    }),
    nombres: z.string({
        required_error: 'Nombre(s) es un campo requerido',
    }).min(2, {
        message: 'El nombre debe tener al menos 2 caracteres'
    }),
    paterno: z.string({
        required_error: 'Apellido paterno es un campo requerido',
    }).min(2, {
        message: 'El apellido paterno debe tener al menos 2 caracteres'
    }),
    materno: z.string({
        required_error: 'Apellido materno es un campo requerido',
    }).min(2, {
        message: 'El apellido materno debe tener al menos 2 caracteres'
    }),
    correo: z.string().email({
        message: 'Correo electrónico invalido'
    }).optional().or(z.literal('')),
    telefono: z.string().regex(/^\d{10}$/, {
        message: 'Deben ser 10 digitos, solo se aceptan números'
    }).optional().or(z.literal('')),
    genero: z.string().length(1,{
        message: 'Debe seleccionar un género'
    }),
    st: z.boolean(),
    issstep: z.boolean(),
    at: z.boolean(),
    pt: z.boolean(),
    c33: z.boolean(),
    direccion: z.object({
        calle: z.string(),
        exterior: z.string(),
        interior: z.string(),
        estado: z.string(),
        municipio: z.string(),
        localidad: z.string(),
        cp: z.string(),
        colonia: z.string()
    })
})

export function FormRegistro() {

    const { toast } = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            expediente: "",
            rfc: "",
            curp: "",
            nombres: "",
            paterno: "",
            materno: "",
            correo: "",
            telefono: "",
            genero: "",
            st: true,
            issstep: true,
            at: true,
            pt: true,
            c33: true,
            direccion: {
                calle: "",
                exterior: "",
                interior: "",
                estado: "",
                municipio: "",
                localidad: "",
                cp: "",
                colonia: ""
            }
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {                
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-12 gap-4">
                    <section className="col-span-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">
                                    Datos personales
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-flow-col justify-stretch gap-4 mb-4">
                                    <FormField
                                        control={form.control}
                                        name="expediente"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Número de expediente</FormLabel>
                                                <FormControl>
                                                    <Input {...field} required minLength={5} maxLength={6} />
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
                                                    <Input {...field} required minLength={13} maxLength={13} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="curp"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>CURP</FormLabel>
                                                <FormControl>
                                                    <Input {...field} required minLength={18} maxLength={18} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-flow-col justify-stretch gap-4 mb-4">
                                    <FormField
                                        control={form.control}
                                        name="nombres"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nombre(s)</FormLabel>
                                                <FormControl>
                                                    <Input {...field} required />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="paterno"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Apellido paterno</FormLabel>
                                                <FormControl>
                                                    <Input {...field} required />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="materno"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Apellido materno</FormLabel>
                                                <FormControl>
                                                    <Input {...field} required />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-flow-col justify-stretch gap-4 mb-4">
                                    <FormField
                                        control={form.control}
                                        name="correo"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Correo electrónico</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
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
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="genero"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Género</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Seleccionar" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="M">Masculino</SelectItem>
                                                        <SelectItem value="F">Femenino</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-flow-col justify-stretch gap-4">
                                    <FormField
                                        control={form.control}
                                        name="st"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-center rounded-lg border p-2 pb-4 gap-4">
                                                <FormControl className="mt-2">
                                                    <Switch
                                                        onCheckedChange={field.onChange}
                                                        checked={field.value}
                                                        id="ST"
                                                    />
                                                </FormControl>
                                                <div className="mt-0">
                                                    <FormLabel className="mt-0" htmlFor="ST">
                                                        ST
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}

                                    />
                                    <FormField
                                        control={form.control}
                                        name="issstep"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-center rounded-lg border p-2 pb-4 gap-4">
                                                <FormControl className="mt-2">
                                                    <Switch
                                                        onCheckedChange={field.onChange}
                                                        checked={field.value}
                                                        id="ISSSTEP"
                                                    />
                                                </FormControl>
                                                <div className="mt-0">
                                                    <FormLabel className="mt-0" htmlFor="ISSSTEP">
                                                        ISSSTEP
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}

                                    />
                                    <FormField
                                        control={form.control}
                                        name="at"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-center rounded-lg border p-2 pb-4 gap-4">
                                                <FormControl className="mt-2">
                                                    <Switch
                                                        onCheckedChange={field.onChange}
                                                        checked={field.value}
                                                        id="AT"
                                                    />
                                                </FormControl>
                                                <div className="mt-0">
                                                    <FormLabel className="mt-0" htmlFor="AT">
                                                        AT
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}

                                    /><FormField
                                        control={form.control}
                                        name="pt"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-center rounded-lg border p-2 pb-4 gap-4">
                                                <FormControl className="mt-2">
                                                    <Switch
                                                        onCheckedChange={field.onChange}
                                                        checked={field.value}
                                                        id="PT"
                                                    />
                                                </FormControl>
                                                <div className="mt-0">
                                                    <FormLabel className="mt-0" htmlFor="PT">
                                                        PT
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}

                                    /><FormField
                                        control={form.control}
                                        name="c33"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-center rounded-lg border p-2 pb-4 gap-4">
                                                <FormControl className="mt-2">
                                                    <Switch
                                                        onCheckedChange={field.onChange}
                                                        checked={field.value}
                                                        id="C33"
                                                    />
                                                </FormControl>
                                                <div className="mt-0">
                                                    <FormLabel className="mt-0" htmlFor="C33">
                                                        Concepto 33
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}

                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                    <section className="col-span-4 h-full">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="text-base">
                                    Dirección
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-flow-col justify-stretch gap-4 mb-4">
                                    <FormField
                                        control={form.control}
                                        name="direccion.calle"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Calle</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="direccion.exterior"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Número exterior</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="direccion.interior"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Número interior</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-flow-col justify-stretch gap-4 mb-4">
                                    <FormField
                                        control={form.control}
                                        name="direccion.estado"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Estado</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="direccion.municipio"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Municipio</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-flow-col justify-stretch gap-4">
                                    <FormField
                                        control={form.control}
                                        name="direccion.localidad"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Localidad</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="direccion.cp"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Código postal</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="direccion.colonia"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Colonia</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>
                <div className="flex justify-end pt-4">
                    <Button type="submit">Guardar</Button>
                </div>
            </form>
        </Form >
    )
}
