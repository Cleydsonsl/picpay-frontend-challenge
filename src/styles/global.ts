import { createGlobalStyle } from 'styled-components';
import { mixins } from './mixins';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 60%
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    
    body { 
        background: ${mixins.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;