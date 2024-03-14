import styles from "./TODOListitem.module.scss";
export function TodolistItem(props: {
    list: string; //Array
    indice: number //posizione della string nell'array
    onDelete: (index: number)=>void;
}
){
    const{list, index, onDelete} = props;
    return <div className={styles.TODOListitem}>
        <div><button onClick={()=>onDelete(index)}>X</button></div>
        <div>{index}</div>
        <div>{list}</div>
    </div>
}