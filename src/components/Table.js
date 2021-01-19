import React, { useEffect } from 'react'

const Table = props => {

  const columns = [
    { field: 'id', headerName: 'ID',},
    { field: 'criminal', headerName: 'Criminal', },
    { field: 'date', headerName: 'Data',  },
    { field: 'victims', headerName: 'Vitímas', },
    { field: 'country', headerName: 'Países', },
  ]
  let data = props.data

  function renderColums() {
    return columns.map(item => <th key={item.field}>{item.headerName}</th> )
  }

  function renderLines() {
    return (
      data.map(item => {
        return(
          <tr>
            <td key={item.id}>{item.id}</td>
            <td key={item.id}>{item.criminal}</td>
            <td key={item.id}>{item.date}</td>
            <td key={item.id}>{item.victims}</td>
            <td key={item.id}>{item.country}</td>
          </tr>
        )
      })
    )
  }
  
  return(
    <div style={{ height: '100%', width: '100%' }}>
      <table>
        <tbody>
          <tr>{ renderColums() }</tr>
          {renderLines()}
        </tbody>
      </table>
    </div>
  )
}

export default Table