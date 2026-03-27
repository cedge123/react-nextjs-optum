import Counter  from "./Counter"
import {fireEvent, render, screen} from '@testing-library/react'

test("mount counter",()=>{ 
 
    render(<Counter count={5}/>)
    const text = screen.getByText("Count : 5");
    expect(text).toBeInTheDocument();
     
})

test("increment count ",()=>{
    render(<Counter count={5}/>)
    const text = screen.getByText("Count : 5");
    expect(text).toBeInTheDocument();

    const incBtn = screen.getByText("++")
    fireEvent.click(incBtn)

    const incText = screen.getByText("Count : 6");
    expect(incText).toBeInTheDocument();

    const decBtn = screen.getByText("--")
    fireEvent.click(decBtn)

    const decText = screen.getByText("Count : 5");
    expect(decText).toBeInTheDocument();

    

})