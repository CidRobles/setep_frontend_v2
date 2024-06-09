// Components
import { DataTable } from "./components/DataTable"
import { Agremiado, columns } from "./components/Columns"
import { agremiados } from "../../../../../public/data-agremiados"

async function getData(): Promise<Agremiado[]> {
    // Fetch data from your API here.
    return agremiados
}

// Icons
export default async function Page() {
    const data = await getData()
    return (
        <div className="w-100">
            <DataTable columns={columns} data={data} />
        </div>
    )
}