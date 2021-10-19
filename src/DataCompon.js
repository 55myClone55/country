import React, { Component } from 'react'
import Data from './data/new.json'
import './App.css'

let dataBase = Data.data;

 class DataCompon extends Component {
 
    render() {
        return (
            <ul>
                {
                    dataBase.map((d)=>{
                        return(
                            <div>
                            <div>
                            <ul className="Name-text">{d.name}</ul>
                            <li className="Child-text">{d.children}</li> 
                            </div>
                            </div>
                        )
                    })
                }
            </ul>
        )
    }
}
export default DataCompon