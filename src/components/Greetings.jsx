import React from 'react'

function Greetings({lang, children}) {
    if (lang === "de") {
        return <p>Hallo {children}</p>;
    } else if (lang === "fr") {
        return <p>Bonjour {children}</p>;
    } else if (lang === "es") {
        return <p>Hola {children}</p>;
    } else if (lang === "en"){
        return <p>Hello {children}</p>;
    } else {
        return 'Language not available'
    }
}

export default Greetings


  
