import PropTypes from "prop-types"
import { useState } from "react"

import { Input } from "../../Input/index"
import { Form } from "../index"
import { Button } from "../../Button/index"

import FormatterPhoneNumberInput from "./components/FormatterPhoneNumberInput"
import FormatterEmailInput from "./components/FormatterEmailInput"
import FormatterNameInput from "./components/FormatterNameInput"
import FormatterRendaMensalInput from "./components/FormatterRendaMensalInput"

const FormStandard = ({ webhook, ...props }) => {
    const [isValidatedNome, setIsValidatedNome] = useState(false)
    const [isValidatedEmail, setIsValidatedEmail] = useState(false)
    const [isValidatedPhoneNumber, setIsValidatedPhoneNumber] = useState(false)
    const [isValidatedForm, setIsValidatedForm] = useState(false)


    if (!isValidatedEmail && !isValidatedNome && !isValidatedPhoneNumber) {
        if (isValidatedForm) {
            setIsValidatedForm(false)
        }
    } else {
        if (!isValidatedForm) {
            setIsValidatedForm(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidatedForm) {
            fetch(webhook, {
                method: "POST",
                body: new FormData(e.target),
            })
                .then((response) => {
                    if (!(response.ok)) {
                        console.log("Falha ao enviar formulário");
                    }
                })
                .catch((error) => {
                    console.error("Falha ao enviar formulário:", error);
                });
        }
        return
    }

    return (
        <>
            <Form.Root
                onSubmit={(e) => handleSubmit(e)}
                {...props}>
                <Input.Root>
                    <FormatterNameInput
                        name={"nome"}
                        isValidatedNome={isValidatedNome}
                        setIsValidatedNome={setIsValidatedNome}
                    />
                </Input.Root>
                <Input.Root>
                    <FormatterPhoneNumberInput
                        name={"telefone"}
                        isValidatedPhoneNumber={isValidatedPhoneNumber}
                        setIsValidatedPhoneNumber={setIsValidatedPhoneNumber}
                    />
                </Input.Root>
                <Input.Root>
                    <FormatterEmailInput
                        name={"email"}
                        isValidatedEmail={isValidatedEmail}
                        setIsValidatedEmail={setIsValidatedEmail}
                    />
                </Input.Root>
                <Input.Root>
                    <FormatterRendaMensalInput
                        name={"rendaMensal"}
                    />
                </Input.Root >
                <Button.Content>Teste</Button.Content>
            </Form.Root >
        </>
    )
}

FormStandard.propTypes = {
    webhook: PropTypes.string
}

export default FormStandard 