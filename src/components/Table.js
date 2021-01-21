import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment'
import { FaTrashAlt } from "react-icons/fa";
import crimeRequests from '../services/requests'

const Table = ({data}) => {

  const columns = [
    { field: 'id', headerName: 'ID',},
    { field: 'criminal', headerName: 'Criminal', },
    { field: 'date', headerName: 'Data',  },
    { field: 'victims', headerName: 'Vitímas', },
    { field: 'country', headerName: 'Países', },
    { field: 'details', headerName: 'Detalhes', },
  ]

  function renderColums() {
    return columns.map(item => <th key={item.field}>{item.headerName}</th> )
  }
  
  const [lines, setLines] = useState([])

  useEffect(() => {
    let array = []
    if(data){
      data.map(item => {
        array.push(
          {
            id : item.id_crime,
            criminal : '',
            date: item.crime_date,
            victims: item.victims_crime[0]?.victim,
            country: item.country
          }
        )
      })
      setLines(array)
    }
  }, [data])

  function deleteCrime(id_crime){
    crimeRequests.deleteCrime(id_crime, () => {
      alert('Crime deletado com sucesso')
    })
  }
  
  return(
    <div style={{ height: '100%', width: '100%' }}>
      <table>
        <tbody>
          <tr>{ renderColums() }</tr>
          {
            lines.map(item => {
              return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.criminal}</td>
                  <td>{moment(item.date).format('DD/MM/YYYY')}</td>
                  <td>{item.victims}</td>
                  <td>{item.country}</td>
                  <td>
                    <a onClick={() => deleteCrime(item.id)}>
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table