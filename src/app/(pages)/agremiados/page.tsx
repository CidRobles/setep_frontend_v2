import { Agremiado, columns } from "./listar/components/Columns"
import { DataTable } from "./listar/components/DataTable"
import { agremiados } from "../../../../public/data-agremiados"

async function getData(): Promise<Agremiado[]> {
    // Fetch data from your API here.
    return agremiados
}

export default async function Page() {
    const data = await getData()

    return (
        <div className="w-100">                    
            <DataTable columns={columns} data={data} />
        </div>
    )
}
