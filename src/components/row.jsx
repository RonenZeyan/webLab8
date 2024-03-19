import React from 'react'
import Cell from "./cell"

export const Row = (prop) =>{
    const data = prop.header ?  Object.keys(prop.data) : Object.values(prop.data)
    return (<tr>{data.map(d=><Cell data={d} header={prop.header}/>)}</tr>)
}

export default Row