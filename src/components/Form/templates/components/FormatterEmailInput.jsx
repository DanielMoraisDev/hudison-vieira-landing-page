import { useState } from 'react';
import PropTypes from "prop-types"

import { Input } from "../../../Input/index"
import Text from "../../../Texts/index"

const FormatterEmailInput = ({ isValidatedEmail, setIsValidatedEmail, ...props }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setError('E-mail inválido');
            if (isValidatedEmail) {
                setIsValidatedEmail(false)
            }
        } else {
            setError('');
            if (!isValidatedEmail) {
                setIsValidatedEmail(true)
            }
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <>
            <Input.Container>
                <label htmlFor="email">Email:</label>
                <Input.Content
                    {...props}
                    type="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={validateEmail}
                    placeholder="exemplo@dominio.com"
                />
                {error && <Text.SmallText style={{ color: 'red' }}>{error}</Text.SmallText>}
            </Input.Container>
        </>
    );
};

FormatterEmailInput.propTypes = {
    isValidatedEmail: PropTypes.any,
    setIsValidatedEmail: PropTypes.any
}

export default FormatterEmailInput;
