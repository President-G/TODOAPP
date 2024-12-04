
// using hook

import { useState } from "react";

// use the stylesheet
import "./todostyle.css"



// child components 

const Heading = ( {text})=>{

    return (

        <div className="header">
            
            <h1>{text}</h1>
        </div>

    )
}

const INPUT = ({hint , val  , setItem , addItem })=>{

    return (
        <input type= "text"  value={val}  placeholder= {hint} 
        onChange={(e)=> setItem(e.target.value )}
        onKeyDown={(e)=> {

            if(e.key == "Enter"){
                addItem() ;
            }

        } }
        />
    )

}

const Button = ({text , addItem})=>{

    return (
        <button className="Button" onClick={addItem} >{text}</button>
    )

}



// root component 

const App = () => {

    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);

    console.log(item);
    console.log(items)


    const addItem = ()=>{

        if( item.trim() != ""){
            setItems([...items, item])
            setItem("") ;
        }

    }


    return (

        <div className="App">
          
          <Heading text={"TODO APP"} />


          <div className="input-field">
            <INPUT  hint={"Enter your target"}  val={item}  setItem={setItem}
            addItem={addItem}
            />
            <Button text= {"+"} addItem={addItem} />
          </div>

          <div className="list-targets">

            <ol>

                {items.map( (item , index )=>(<li  key= {index}
                > {item}</li> ) )
                }

            </ol>

          </div>






        </div>
    )

}



export default App;





































