'use server'

//server action. always to be a async function
export async function sayHello(messag:string) {
    //acess the DB, message queue ...etc
    console.log("invoking sayHello: "+messag);

    return (
        <div style={{color:"blue"}}>
             <h4>Hello {messag}</h4>
        </div>
    )
}