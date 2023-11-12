import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --primary-dark: #108a00;
        --primary: #14a800;
        --danger: #E64646;
        --danger-100: #e6464647;
        --success: #3eb325;
        --success-100: #3eb325;
        --warning: #f0d400;
        --warning-100: #f0d400;

        --dark-800: #111111;
        --dark-700: #3A3A3A;
        --dark-600: #585858;
        --dark-500: #7A7A7A;
        --dark-400: #989898;
        --dark-300: #B5B5B5;
        --dark-200: #D2D2D2;
        --dark-100: #D9D9D9;
        --dark-000: #F8F8F8;
        --white: #FFFFFF;

        --radius-lg: 5px;
        --radius-sm: 2px;

        --spacing-xxl: 3rem;
        --spacing-xl: 1.5rem;
        --spacing-lg: 1rem;
        --spacing-sm: .5rem;
        --spacing-xsm: .25rem;
    
        --media-md: 1000px;

        --boxShadow: rgba(0, 0, 0, 0.42) 2px 2px 14px -10px;

        font-size: 14px;

    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    html {
        scroll-behavior: smooth;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        font-family: 'Raleway', sans-serif;
        color: var(--dark-800);
    }

    // a:not([class]) {
    //     text-decoration-skip-ink: auto;
    // }
    
    a {
        text-decoration:  none;
        color: var(--dark-800);
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    button:hover{
        cursor: pointer;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }
    
   

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

   
    body::-webkit-scrollbar {
        width: 10px;
      }
      body::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
        body::-webkit-scrollbar-thumb {
        background: #888; 
          border-radius:10px;
      }
      body::-webkit-scrollbar-thumb:hover {
        
        background: #555; 
      }     
       
    
`;

export default GlobalStyles;
