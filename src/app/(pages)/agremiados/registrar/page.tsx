import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

import { FormRegistro } from "./components/FormRegistro"

export default function Page() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Registrar nuevo agremiado
                </CardTitle>
            </CardHeader>
            <CardContent>
                <FormRegistro></FormRegistro>
            </CardContent>
        </Card>
    )
}