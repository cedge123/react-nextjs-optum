import { useEffect } from "react";

type MessageProps = {
    text: string;
    color?: string;
}

export function Message(props: MessageProps){


    useEffect(() => {
        console.log("[Message] component mounted");


        return () => {
            console.log("[Message] component unmounted")
        }

    }, [])

    console.log("Message", props);
    return (
        <div style={{border : `2px solid ${props.color}`, padding: "7px", margin: "7px"}}>
            <h4 style={{color: props.color}}>Message: {props.text}</h4>
            <p>This is functional component</p>
            <p>Expression: {5 + 7}</p>
            <p>Generated at {new Date().toLocaleString()}</p>
        </div>
    )
}