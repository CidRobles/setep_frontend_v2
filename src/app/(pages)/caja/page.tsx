import { agremiados } from "../../../../public/data-agremiados"
import { Agremiado, columns } from "./listar/components/Columns"
import { DataTable } from "./listar/components/DataTable"

async function getData(): Promise<Agremiado[]> {
    // Fetch data from your API here.
    return agremiados
}


export default async function Page() {
    const agremiados = await getData()
    return (
        <div className="w-100">
            <DataTable columns={columns} data={agremiados} />
        </div>
    )
}