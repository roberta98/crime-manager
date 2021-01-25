import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { FaTrashAlt, FaRegFile } from "react-icons/fa";
import crimeRequests from '../services/requests'
import Modal from './Modal'

const Table = ({data}) => {

  const [show, setShow] = useState(false)

  const columns = [
    { field: 'id', headerName: 'ID',},
    { field: 'criminal', headerName: 'Criminal', },
    { field: 'date', headerName: 'Data',  },
    { field: 'victims', headerName: 'Vitímas', },
    { field: 'country', headerName: 'Países', },
    { field: 'details', headerName: 'Detalhes', },
  ]

  function showModal(){
    setShow(true)
  }
  function hideModal(){
    setShow(false)
  }
  function toggleModal(){
    if(show){
      hideModal()
    }else{
      showModal()
    }
  }

  function renderColums() {
    return columns.map(item => <th key={item.field}>{item.headerName}</th> )
  }
  
  const [lines, setLines] = useState([])
  const [idCrime, setIdCrime] = useState(0)
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
                  <td 
                    style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 18}}>
                    <a onClick={() => deleteCrime(item.id)}>
                      <FaTrashAlt />
                    </a>
                    <a onClick={() => {
                        toggleModal()
                        setIdCrime(item.id)
                      }}
                    >
                      <FaRegFile />
                    </a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {show && 
        <Modal show={show} idCrime={idCrime} />
      }
    </div>
  )
}

export default Table