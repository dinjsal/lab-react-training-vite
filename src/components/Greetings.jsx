import React from 'react'

function Greetings({lang, children}) {
    switch (lang) {
        case 'de':
          return "Hallo";
        case 'fr':
          return 'Bonjour';
        case 'en':
          return 'Hello';
        case 'es':
          return 'Hola';
        default:
          return <div>Language not available</div>;
      }
}

export default Greetings


  
