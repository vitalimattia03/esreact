import React, { useState } from 'react';
import styles from "./ListAdder.module.css";
export function listAdder(props:{
    readonly onSave: (text: string) => void;
}){
    const {onSave} = props
    const[text, setText] = useState("")
    return <div className={styles.listAdder}>
        <input type="text" value={text} onChange={ev => setText(ev.target.value)} />
        <button onClick={()=> {
            onSave(text)
            setText("")
        }}>Add</button>
    </div>
}