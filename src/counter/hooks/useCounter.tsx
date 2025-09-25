import { useState } from "react";

export const useCounter = (initialValue: number =10) => {
  
     const [counter, setcounter] = useState(initialValue);
    
        const handleAdd = () =>{
            setcounter(counter +1);
        }
    
        const handleSusbtract = () =>{
            setcounter( (prevState) => prevState -1 );
        }
    
        const handleReset = () =>{
            setcounter(initialValue);
        }

    return {
        // Properties or values
        counter,

        //Methods or actions
        handleAdd,
        handleSusbtract,
        handleReset,
    }
}

