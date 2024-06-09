"use client"
import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { Eye, Pencil, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
import { regiones } from "../../../../../../public/data-regiones"
import { secciones } from "../../../../../../public/data-secciones"
import { cargos } from "../../../../../../public/data-cargos"
import { niveles } from "../../../../../../public/data-niveles"

import { DataTableColumnHeader } from "./DataTableColumnHeader"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Agremiado = {
    id: string
    agremiado: string
    region: string
    seccion: string
    cargo: string
    nivel: string
}

export const columns: ColumnDef<Agremiado>[] = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: "agremiado",
        header: "Agremiado",
    },
    {
        accessorKey: "cargo",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Cargo" />
            )
        },
        cell: ({ row }) => {
            const label = cargos.find((cargo) => cargo.value === row.original.cargo)

            return (
                <span>{label?.label}</span>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "nivel",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Nivel" />
            )
        },
        cell: ({ row }) => {
            const label = niveles.find((nivel) => nivel.value === row.original.nivel)

            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">
                        <span>{label?.label}</span>
                    </span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "seccion",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Sección" />
            )
        },
        cell: ({ row }) => {
            const label = secciones.find((seccion) => seccion.value === row.original.seccion)

            return (
                <span>{label?.label}</span>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "region",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Región" />
        ),
        cell: ({ row }) => {

            const label = regiones.find((region) => region.value === row.original.region)

            return (
                <span>{label?.label}</span>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const agremiado = row.original
            return (
                <div className="flex justify-between">
                    <Button variant="outline" size="icon" asChild>
                        <Link href={`/agremiados/ver/${agremiado.id}`}>
                            <Eye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href={`/agremiados/editar/${agremiado.id}`}>
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