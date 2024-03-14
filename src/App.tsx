//import dei file componenti
import styles from './App.module.scss';
import './App.css';
import Display from './component/Display';
import Counter from "./component/Counter";
import { TextComponent } from './component/TextComponent';
import { CounterWithObjectState } from './component/CounterWithObjectState';
import { MyInput } from './component/MyInput';
import { PersonInput } from './component/PersonInput';
import { useEffect, useMemo, useState } from 'react';
import { MiddleComponent } from './component/MiddleComponent';
import { Value } from 'sass';
import Incremental from './component/incremental';
//creazione funzione di base
function calcolo(n: number) {
  console.log("calcolato")
  return n * 2
}
export default function App() {
  const [text, setText] = useState("")
  const [value, setValue] = useState(0)
  const risultato = useMemo(() => { return calcolo(value) }, [value])   //senza useMemo verrebbe richiamato ogni volta che cambia qualcosa nella pagina
  useEffect(() => {
    console.log("Mount")
    return () => { console.log("useeffect evento di unmount") }
  }, []);
  useEffect(() => { console.log("Mount2") }, []);
  console.log("App()");
  return <>
    <br /><br />
    {value !== 20 && <Incremental />}
    {/* se il value > 20 --> togli il componente incremental */}
    <br /><br />
    <br /><br />
    <Counter initialValue={value} />
    {/* <Counter key={value} />  */}
    <br /><br />
    <button type='button' onClick={() => setValue(20)}>imposta 20</button> {/*cambia valore iniziale a 20 */}
    <br /><br />
    <div>value: {value} x 2 = {risultato}</div>
    <br /> <br />
    <TextComponent />
    <br /><br />
    <CounterWithObjectState />
    <br /><br />
    <MyInput label={"con true"} required={true} onChange={text => { console.log(text); setText(text) }} />
    <br /><br />
    <div>Testo in App.tsx: {text}</div>
    <br /><br />
    <PersonInput salvaPersona={(persona) => { console.log(persona) }} />
    <br /><br />
    <MiddleComponent onChange={text => { console.log(text); setText(text) }} />
  </>
}