import { useState } from "react";
export function TextComponent() {
//stato che contiene il valore dell'utente
    const [text, setText] = useState <string>("giacomo"); 
//per visualizzare text predefinito usa ad esempio ("giacomo")
    const [password, setPassword] = useState <string>("");
    return <>
        <br></br>
        <div>Login</div>
        <br></br>
        <div>Username:<input type="text" placeholder="Inserisci nome" value={text} onChange={(ev)=>{setText(ev.target.value); }} />
{/* senza setText(ev.target.value) non si aggiorna la pagina e non si riempiono i campi, ma cambia solo il valore della variabile
con setText(ev.target.value) invece vuol dire che lo controllate voi */}
{/* ev.target.value ti consente di stampare a schermo il testo scritto per intero 
con value ti obbliga ad avere come valore iniziale un text, che a differenza di default value con una function è possibile eliminare */}
        <button style={{color: "red"}} onClick={()=>{setText("");}}>Canc</button></div> 
{/* bottone che pulisce il campo Username */}
        <br></br>
        <div>Password:<input type="password" onChange={(ev)=>{setPassword(ev.target.value);}} /></div>
{/* con type="password" la password non viene visualizzata come text ma viene rimpiazzati con simboli */}
        <div>Username: {text}</div>
        <div>Password: {password}</div>
    </>
}