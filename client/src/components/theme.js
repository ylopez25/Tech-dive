import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            header: {
                fontFamily: `'Viaoda Libre', serif`,
            },
            TableContainer: {
                fontFamily: `'Work Sans', sans-serif`
            },
            Table: {
                size: "sm",
                variant: "simple",
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                padding: '10px',
                alignItems: 'center'
            }
        }
    }
})

export default theme;

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f0f0',
//   },
//   heading: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   paragraph: {
//     fontSize: '1rem',
//     color: '#555',
//     maxWidth: '400px',
//     textAlign: 'center',
//   },
// };
