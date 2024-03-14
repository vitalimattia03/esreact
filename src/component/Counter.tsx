import { useEffect, useState } from "react"
import Display from "./Display";
export default function Counter(props: {
    readonly initialValue?: number
}) {
    const { initialValue = 0 } = props
    const [contatore, setContatore] = useState(initialValue);  //inizializzato a 0 --> (0)
    console.log("Counter()", contatore);
    useEffect(() => {
        console.log("UseEffect in action", initialValue);
        setContatore(initialValue)
        return () => { console.log(initialValue) }
    }, [initialValue]);  //hook che al variare della parte tra [] esegue la funzione tra {} 
    return <>
        <div>Contatore</div>
        <Display n={contatore} color='blue' />
        <button style={{ color: "white", background: "red" }} onClick={() => {
            setContatore(contatore - 1);
            console.log("contatore:", contatore);
        }}>-</button>
        {contatore <= -1 && <div>alza alza troppo basso</div>}
        <button style={{ background: "blue", color: "white" }} onClick={() => { setContatore(contatore + 1); console.log("contatore:", contatore); }}>+</button>
        {contatore >= 5 && <div>abbassa abbassa troppo elevato</div>}
    </>
}
// fare 2 volte setContatore(contatore+1);  è equivalente a farlo 1 sola volta perchè il contatoe finche non fa un nuovo ciclo è equivalente a quello precedente */}
// se i 2 hanno la stesse variabili (es contatore) --> viene preso l'ultimo
// se mettiamo a quello di prima variabili parziali es setContatore(partial => partial+2); --> vengono presi entrambi (es +1 +2 = +3)
//event listener --> funzione ad esempio su onClick che fa qualcosa ad un event
//react ridisegna un componente in 2 situazioni:
//- le prop del componente cambiano
//- cambiamento nello stato(insieme caratteristiche in un determinato momento) interno
//per cambiare le informazioni mostrate ad es contatore devono essere stati