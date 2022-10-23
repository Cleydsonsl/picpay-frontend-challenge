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

    .react-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
    }

    .react-modal-content {
        position: relative;
        padding: 3rem;
        width: 100%;
        max-width: 576px;
        background: var(--background);
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: transparent;
        border: 0;
        transition: filter 0.2s ease-in-out;
        
        &:hover {
            filter: brightness(0.8);
        }
    }
`;