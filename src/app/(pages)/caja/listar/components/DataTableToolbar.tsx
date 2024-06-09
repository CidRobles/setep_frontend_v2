"use client"

import { SquareX } from "lucide-react"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./DataTableViewOptions"

import { regiones } from "../../../../../../public/data-regiones"
import { secciones } from "../../../../../../public/data-secciones"
import { cargos } from "../../../../../../public/data-cargos"
import { niveles } from "../../../../../../public/data-niveles"

import { DataTableFacetedFilter } from "./DataTableFacetedFilter"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between space-x-2">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Busqueda por nombre"
                    value={(table.getColumn("agremiado")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("agremiado")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("cargo") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("cargo")}
                        title="Cargo"
                        options={cargos}
                    />
                )}
                {table.getColumn("nivel") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("nivel")}
                        title="Nivel"
                        options={niveles}
                    />
                )}
                {table.getColumn("seccion") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("seccion")}
                        title="Sección"
                        options={secciones}
                    />
                )}
                {table.getColumn("region") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("region")}
                        title="Región"
                        options={regiones}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="default"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Limpiar filtros
                        <SquareX className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    )
}