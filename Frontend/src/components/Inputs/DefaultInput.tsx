import InputProps from "@/models/interfaces/InputProps";

export default function DefaultInput(props: InputProps) {
    let style: string = "";

    if(props.style === "outline") {
        style = "w-full h-12 border border-gray-300 rounded px-3";
    }

    return (
        props.type === "text" ? (
            <input type="text" name={props.name} placeholder={props.placeholder} className={`${props.className ?? ""} ${style ?? ""}`} />
        ) : props.type === "email" ? (
            <input type="email" name={props.name} placeholder={props.placeholder} className={`${props.className ?? ""} ${style ?? ""}`} />
        ) : props.type === "password" ? (
            <input type="password" name={props.name} placeholder={props.placeholder} className={`${props.className ?? ""} ${style ?? ""}`} />
        ) : <input></input>
    )
}