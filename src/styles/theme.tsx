import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            900: '#575757',
            800: '#1F2029',
            700: '#353646',
            600: '#848E8B',
            500: '#A2A4A5',
            400: '#DADBD1',
            300: '#F4F3F6',
            200: '#F8F9F9',
            100: '#D1D2DC',
            50: '#EEEEF2',
        },
        primary: '#093041',
        secondary: '#11A0BD',
        text: '#1D353F',
        background: '#FFFEFF',
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'background',
                color: 'text'
            }
        }
    }
})