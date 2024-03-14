import { MyInput } from "./MyInput";
export function MiddleComponent (props:{onChange: (text: string) => void}){
const {onChange} = props;
return <>
 <MyInput label={"Nome"} 
    required={true} 
    onChange={onChange} />
</>;
}
//componente che importa proprità da un altro componente in modo tale da non doverle riscrivere