import React,{useReducer, useRef,useState} from 'react'
import Data from './data/new.json'
import './App.css'

let dataBase = Data.data;
const DataCompon = ()=> {
      const buttonCountryRef = useRef()
      const buttonMainCountryRef = useRef()
      //console.log(button)
      const [names, setNames] = useState('NAMES')
      const [name, setName] = useState({'name':"Africa",'children':[]})
    const [toggle, setToggle] = useState(false)
    const [change, setChange] = useState(false)
    const [changed, setChanged] = useState(false)
    const [next, setNext] = useState(false)
    const [exchange, setExchange] = useState(false)
    const [other, setOther] = useState(false)
    const ToggleSwitch = (e) => {
        let c = e.currentTarget.innerHTML
            }
               const handlerSaveCountry = (e)=>{
        let x = {}
        let y = {}
         x  =  e.currentTarget.value 
                       name['name'] = x
                 let m = name['name']
             console.log(setNames(buttonCountryRef.current.value))
   return dataBase.push(name)
           }
    const handlerSaveMainland =(e)=>{
     let d  =  e.currentTarget.value 
     //console.log(d)
                name['children'] = d 
              let s = name['children']
        console.log(setNames(buttonMainCountryRef.current.value))
return dataBase.push(name)
              
    }
       console.log(dataBase)
       return (
         <div>
         <div>
         <input 
         className='new'
         onDoubleClick={handlerSaveCountry}
         ref={buttonCountryRef} 
         type='text'
          placeholder='Country'
         
           />
           <p>{names}</p>
           <p>double click on input</p>
           </div>
           <div>
           <input
           className='new'
           onDoubleClick={handlerSaveMainland}
            ref={buttonMainCountryRef}
            type='text'
          placeholder='MainCountry'
            />
                    </div>
                                
                                 <div>
                                    {dataBase.map((d) =>{
                                        return <div>
                                        <h1 className="Name-text"> {d.name}</h1>
                                        <h1 className="Child-text">{d.children}</h1>
                                 </div>
                                    })}
                                     
                                 </div>
                                  
                          
        </div>
    )
}


export default DataCompon