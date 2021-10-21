import React,{useRef,useState} from 'react'
import Data from './data/new.json'
import './App.css'

let dataBase = Data.data;
const PostData = ()=> {
    let arr = {name:"string",children:[]}
    dataBase.push(arr)
    console.log(dataBase)
   
    const [toggle, setToggle] = useState(false)
    const [change, setChange] = useState(false)
    const [changed, setChanged] = useState(false)
    const [next, setNext] = useState(false)
    const [exchange, setExchange] = useState(false)
    const [other, setOther] = useState(false)
    const ToggleSwitch = (e) => {
        let c = e.currentTarget.innerHTML
        //toggle ? setToggle(false) : setToggle(true)
//console.log(toggle)
    }
   
    return (
         <div>
        
                                 
                                 <section>
                                     <h1 className="Name-text" onClick={()=> setToggle(!toggle)}>{[dataBase[0].name]}</h1>
                                     {toggle && <p className="Child-text">{[dataBase[0].children[0]] } </p>}
                                     {toggle && <p className="Child-text">{[dataBase[0].children[1]] } </p>}
                                     {toggle && <p className="Child-text">{[dataBase[0].children[2]] } </p>}
                                 </section>
                                 <section>
                                     <h1 className="Name-text" onClick={()=> setChange(!change)}>{[dataBase[1].name]}</h1>
                                     {change && <p className="Child-text">{[dataBase[1].children[0]] } </p>}
                                     {change && <p className="Child-text">{[dataBase[1].children[1]] } </p>}
                                 </section>
                                 <section>
                                     <h1 className="Name-text" onClick={()=> setChanged(!changed)}>{[dataBase[2].name]}</h1>
                                     {changed && <p className="Child-text">{[dataBase[2].children[0]] } </p>}
                                     {changed && <p className="Child-text">{[dataBase[2].children[1]] } </p>}
                                     {changed && <p className="Child-text">{[dataBase[2].children[2]] } </p>}
                                 </section>
                                 <section>
                                     <h1 className="Name-text" onClick={()=> setNext(!next)}>{[dataBase[3].name]}</h1>
                                     {next && <p className="Child-text">{[dataBase[3].children[0]] } </p>}
                                     {next && <p className="Child-text">{[dataBase[3].children[1]] } </p>}
                                 </section>
                                 <section>
                                     <h1 className="Name-text" onClick={()=> setExchange(!exchange)}>{[dataBase[4].name]}</h1>
                                     {exchange && <p className="Child-text">{[dataBase[4].children[0]] } </p>}
                                     {exchange && <p className="Child-text">{[dataBase[4].children[1]] } </p>}
                                 </section>
                                 <section>
                                     <h1 className="Name-text" onClick={()=> setOther(!other)}>{[dataBase[5].name]}</h1>
                                     {other && <p className="Child-text">{[dataBase[5].children[0]] } </p>}
                                     {other && <p className="Child-text">{[dataBase[5].children[1]] } </p>}
                                 </section>
                                 
                                  
                          
        </div>
    )
}

export default PostData
