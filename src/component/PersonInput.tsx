import { useState } from "react";
export interface Persona{
    nome:string;
    cognome:string;
}
export function PersonInput(props: {
    readonly salvaPersona: (persona: Persona) => void
}) {
    const{salvaPersona} = props;
    const [persona, setPersona] = useState<Persona>({nome:"",cognome:""});
    const [nome, setNome] = useState <string>("giacomo"); 
    const [cognome, setCognome] = useState <string>("poretti"); 
    
    return <>
        <div>Nome:<input type="text" placeholder="Inserisci nome" onChange={e=> setNome(e.target.value)} />
        <input type="text" onChange={e=> setPersona({...persona, nome: e.target.value})} />
        </div>
        <div>Cognome:<input type="text" placeholder="Inserisci cognome" onChange={e=> setCognome(e.target.value)} /></div>
        <input type="text" onChange={e=> setPersona({...persona, cognome: e.target.value})} />
        <button onClick={()=> {
            const newPersona: Persona = {
                nome: nome, 
                cognome: cognome
            }
            setPersona(newPersona);
            salvaPersona(newPersona);
        }}>Salva</button>
    </>
}