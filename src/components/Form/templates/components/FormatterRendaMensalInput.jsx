/* eslint-disable react-hooks/rules-of-hooks */

import { Input } from "../../../Input/index"

const FormatterRendaMensalInput = ({ ...props }) => {
    const values = [
        "Menos de R$2000",
        "De R$2000 a R$6000",
        "De R$6000 a R$8000",
        "De R$8000 a R$10000",
        "Mais de R$10000"
    ]

    const renderOptions = () => {
        return values.map((e, i) => {
            return (
                <option key={i} value={e}>{e}</option>
            )
        })

    }

    return (
        <Input.Container>
            <label htmlFor="rendaMensal">Renda mensal:</label>
            <Input.Content
                {...props}
                type={"select"}
            >
                {renderOptions()}
            </Input.Content>
        </Input.Container>
    )
}

export default FormatterRendaMensalInput