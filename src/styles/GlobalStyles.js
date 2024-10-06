import { createGlobalStyle } from "styled-components";

import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Poppins";
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body
    #root {
        display: flex;
        flex-direction: column;
    }

    body,
    #root {
        background-color: ${theme.default.backgroundColor}
    }    
`;

export default GlobalStyles;
