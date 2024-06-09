
import { Cartera, columns } from "./listar/components/Columns"
import { DataTable } from "./listar/components/DataTable"
import { carteras } from "./listar/components/data-carteras"

async function getData(): Promise<Cartera[]> {
    // Fetch data from your API here.
    return carteras
}

export default async function Page() {
    const data = await getData()

    return (
        <div className="w-100">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
