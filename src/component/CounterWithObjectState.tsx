import { useState } from "react";
import Display from "./Display";
interface State{
    readonly value:number
};
export function CounterWithObjectState(){
    const [state, setState] = useState<State>({value:0});
    console.log("CounterWithObjectState()", state);
    return<>
    <br />
     Contatore Oggetti
     <br />
     <br />   
    <Display n={state.value} color="blue" />
    <button style={{background:"red", color : "white"}} onClick={()=>{
        const newState = {value: state.value-1}; //state.value non cambia, ma viene attribuito il valore state.value +1 a newState
        setState(newState); // modifica lo stato del'oggetto
        //state.value = state.value +1 // state.value aumenta di 1
        //const newState2 = state //il valore di NewState corrisponde al valore di state
        //senza in set state 
        console.log(state.value);
    }}>diminuisci</button>
    <button style={{background:"blue", color : "white"}} onClick={()=>{
        const newState = {value: state.value+1}; 
        setState(newState); 
        console.log(state.value);
    }}>aumenta</button>
    {state.value>5 &&<div>maggiore di 5</div>}
    {state.value<0 &&<div>minore di 0</div>}
    </>
}