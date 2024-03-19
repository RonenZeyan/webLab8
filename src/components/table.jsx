import React from 'react'
import Row from "./row"

export const Table = (prop) => {
    return (<table className='table table-bordered table-hover'>
        <thead>{<Row data={prop.data[0]} header={true}/>}</thead>
        <tbody>{prop.data.map(d=><Row data={d} header={false}/>)}</tbody>
    </table>)
}

export default Table