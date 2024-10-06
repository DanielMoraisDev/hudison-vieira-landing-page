/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import PropTypes from "prop-types"

import { Input } from "../../../Input/index"
import Text from "../../../Texts/index"

const FormatterPhoneNumberInput = ({ isValidatedPhoneNumber, setIsValidatedPhoneNumber, ...props }) => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const formatPhoneNumber = (value) => {
        value = value.replace(/\D/g, '');

        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (value.length > 5) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        }
        return value;
    };

    const validatePhoneNumber = () => {
        if (phone.length < 14 || phone == "") {
            setError('Telefone inválido');
            if (isValidatedPhoneNumber) {
                setIsValidatedPhoneNumber(false)
            }
        } else {
            setError('');
            if (!isValidatedPhoneNumber) {
                setIsValidatedPhoneNumber(true)
            }
        }
    };

    const handleChange = (e) => {
        const formattedPhone = formatPhoneNumber(e.target.value);
        setPhone(formattedPhone);
    };

    return (
        <>
            <Input.Container>
                <label htmlFor="telefone">Telefone:</label>
                <Input.Content
                    {...props}
                    value={phone}
                    onBlur={validatePhoneNumber}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    maxLength={15}
                />
                {error && <Text.SmallText style={{ color: 'red' }}>{error}</Text.SmallText>}
            </Input.Container>
        </>
    )
}

FormatterPhoneNumberInput.propTypes = {
    isValidatedPhoneNumber: PropTypes.any,
    setIsValidatedPhoneNumber: PropTypes.any
}

export default FormatterPhoneNumberInput