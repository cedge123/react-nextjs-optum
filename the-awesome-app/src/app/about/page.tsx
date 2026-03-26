export default async function About(){
    //delay in 3sec
    await new Promise(resolve=> setTimeout(resolve, 3000));
 
    return (
        <div className="alert alert-info">
            <h4>Next.js Training Application</h4>
            <p>Application to demonstrate the features of react and next.js</p>
        </div>
    )

}