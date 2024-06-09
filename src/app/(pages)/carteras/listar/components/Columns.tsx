"use client"
import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { Eye, Pencil, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { niveles } from "../../../../../../public/data-niveles"
import { DataTableColumnHeader } from "./DataTableColumnHeader"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Cartera = {
    id: string
    cartera: string
    responsable: string
    supervisor: string
    niveles: string[]
}

export const columns: ColumnDef<Cartera>[] = [
    {
        accessorKey: "cartera",
        header: "Cartera",
    },
    {
        accessorKey: "responsable",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Responsable" />
            )
        }
    },
    {
        accessorKey: "supervisor",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Supervisor" />
            )
        }
    },
    {
        accessorKey: "niveles",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Restringido a nivel educativo" />
            )
        },
        cell: ({ row }) => {
            const listaNiveles = row.original.niveles.map(nivel => {
                console.log(`Numero de restricciones de la cartera ${row.original.cartera} : ${nivel}`)
                let label = niveles.find((labelNivel) => labelNivel.value === nivel)
                return (<li key={label?.value}>{label?.label}</li>)
            })
            return (
                <div className="flex space-x-2">
                    <ul className="list-disc list-inside">
                        {listaNiveles}
                    </ul>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const cartera = row.original
            return (
                <div className="flex justify-between">
                    <Button variant="outline" size="icon" asChild>
                        <Link href={`/carteras/ver/${cartera.id}`}>
                            <Eye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href={`/carteras/editar/${cartera.id}`}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="destructive" size="icon">
                        <Trash className="h-4 w-4" />
                    </Button>
                </div>
            )
        },
    },
]