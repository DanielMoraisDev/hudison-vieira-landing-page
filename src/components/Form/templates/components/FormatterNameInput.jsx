/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import PropTypes from "prop-types"

import { Input } from "../../../Input/index"
import Text from "../../../Texts/index"

const FormatterNameInput = ({ isValidatedNome, setIsValidatedNome, ...props }) => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const validateName = () => {
        if (name.length < 3 || name == "") {
            setError('Nome inválido');
            if (isValidatedNome) {
                setIsValidatedNome(false)
            }
        } else {
            setError('');
            if (!isValidatedNome) {
                setIsValidatedNome(true)
            }
        }
    };

    return (
        <>
            <Input.Container>
                <label htmlFor="nome">Nome:</label>
                <Input.Content
                    {...props}
                    value={name}
                    onBlur={validateName}
                    onChange={handleChange}
                    placeholder={"alberto"}
                />
                {error && <Text.SmallText style={{ color: 'red' }}>{error}</Text.SmallText>}
            </Input.Container>
        </>
    )
}

FormatterNameInput.propTypes = {
    isValidatedNome: PropTypes.any,
    setIsValidatedNome: PropTypes.any
}

export default FormatterNameInput