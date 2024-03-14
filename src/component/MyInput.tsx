import { useState } from "react";
export function MyInput(props :{
    readonly required: boolean
    readonly label: string
    //callback da ricevere in input
    //serve per passare al genitore il contenuto informativo
    //qui passa al genitore il testo dell'input
    //che (il testo) cambia
    readonly onChange: (text: string) => void
}){
    const {required, label, onChange} = props;
    const [text, setText] = useState<string>("");
    return<>
    <br /><br />Input<br /><br />
    <div>
        <div>
            <label>{label}{required === true &&<span>*</span>}</label> 
            {/* con span il testo non va a capo */}
            <input type="text" value={text} onChange={ev=>{
                setText(ev.target.value);
                onChange(text);
            }}/>
        </div>
        {text.length === 0 && required === true && <div style={{color: "red"}}>Campo Obbligatorio</div>}
    </div>
    </>
}