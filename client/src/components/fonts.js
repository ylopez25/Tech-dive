import React from 'react'
import { Global } from '@emotion/react'


// const Fonts = () => (
//   <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Viaoda+Libre&family=Work+Sans:ital,wght@0,400;0,800;1,400&display=swap');`
//   } </style>
// )


const Fonts = () => (
    <Global
        styles={`
    /*latin*/
    @font-face{
        font-family: 'Work Sans';
        font-optical-sizing: auto;
        font-weight:400;
        font-style:normal;
    }
    /*latin*/
    @font-face{
        font-family: 'Viaoda Libre';
        font-weight:400;
        font-style:normal;
    }
  `}
    />
);

export default Fonts;
