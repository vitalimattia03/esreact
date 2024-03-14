import { useEffect, useState } from "react"
import Display from "./Display";
export default function Incremental() {
    const [contatore, setContatore] = useState(0);  //inizializzato a 0 --> (0)
    console.log("Incremental()", contatore);
    useEffect(() => {
        const interval = setInterval(() => setContatore(contatore => contatore + 1), 1000)
        return () => { clearInterval(interval) }
        // clearInterval(interval) --> ti blocca il programma in console 
    },
        []);
    return <>
        Tempo sprecato: {contatore} secondi
    </>
}

//(contatore=>contatore+1) settatti al valore corrente +1