import { useEffect } from "react";

export default function useTitle(title:string){

    useEffect(()=>{
     const originalTitle = document.title;
     document.title += " "+title;
     return ()=>{
        document.title;
     }

    },[])
}