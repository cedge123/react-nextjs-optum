import { headers } from "next/headers";

// This tells Next.js to regenerate this page at most every 60 seconds (ISG)
export const revalidate = 60;

export default async function About(){
    //delay in 3sec
    await new Promise(resolve=> setTimeout(resolve, 3000));
    console.log("rendering about...");
   
    //making force full dynamic - option 1 (SSR)
    //const contentTypeHeader = (await headers()).get("Content-Type")

    return (
        <div className="alert alert-info">
            <h4>Next.js Training Application</h4>
            <p>Application to demonstrate the features of react and next.js</p>
            <p>Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
    )

}

//making force full dynamic - option 2 (SSR)
//export const dynamic = 'force-dynamic';