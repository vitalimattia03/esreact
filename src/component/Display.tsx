import styles from "./Display.module.scss";
//l'imput deve essere un parametro che contiene un oggetto che contiene n parametri a seconda delle scelte dell'utente
export default function Display(props: {n:number,color?:string})
{
    //per importare object usa es obj: Pont
    const {n, color} = props;
    //contatore --> variabile 
    //setContatore --> funzione per modificare stato
    const coloredausare = color?? "red";
    return <div className={styles.display} style={{color:color}}>{n}</div> 
}
//se viene espicitato il colore usa quel colore altrimenti usa rosso
//props : {n:number} --> questo componente ottiene in ingresso un input un dato number (n) 
//il nome della variabile è props (standard), per essere usato --> props.n

