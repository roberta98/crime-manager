import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as crimeAction from '../action/CrimeAction'
import crimeRequests from '../services/requests'
import { bindActionCreators } from 'redux'
import { FaRegWindowClose, FaTrashAlt} from "react-icons/fa";
import moment from 'moment'


const Modal = props => {

  useEffect(() => {
    props.crime.getCrime(props.idCrime)
  }, [])
  const [show, setShow] = useState(props.show)
  const crime = props.dataCrime.crime.data

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
  function deleteCrime(id_crime){
    crimeRequests.deleteCrime(id_crime, () => {
      alert('Crime deletado com sucesso')
    })
    window.location.reload()
  }

  function renderInfo(data, type){
    data.map(item => {
      switch(type){
        case 'crimeType':
          return item.crime_types
        case 'weapon':
          return (
            item.weapon,
            item.weapon_type
          )
        case 'victim':
          return item.victim
        default:
          return null
      }
    })
  }

  function renderContext(){
    return(
      <div className='contextModal'>
        <h1>Crime</h1>
        <p className='titleContext'>Tipo do crime</p>
        <p>{crime.criminal_crime_types <= 0 ? 'Nenhum tipo de crime' : renderInfo(crime.criminal_crime_types, 'crimeType')}</p>
        <div>
          <p>{moment(crime.crime_date).format('DD/MM/YYYY, h:mm:ss a') || null}</p>
          <p>{crime.country || null}</p>
        </div>
        <h3>Criminoso</h3>
        <div>
          <p className='titleContext'>Arma</p>
          <p>{crime.weapons_crime <= 0 ? 'Nenhuma arma' : renderInfo(crime.weapons_crime, 'weapon')}</p>
        </div>
        <div>
          <p className='titleContext'>Vitimas</p>
          <p>{crime.victims_crime <= 0 ? 'Nenhuma vitima' : renderInfo(crime.victims_crime, 'victim')}</p>
        </div>
      </div>
    )
  }

  return(
    <>
      {crime > 0 || crime !== undefined ?
        <div className='containerModal'>
          <div className='modal'>
            <div className='containerIcon'>
              {/* <a  onClick={() => toggleModal()}>
                <FaRegWindowClose />
              </a> */}
              <a className='offset-lg-10' onClick={() => deleteCrime(props.idCrime)}>
                <FaTrashAlt />
              </a>
            </div>
            {renderContext()}
          </div>
        </div>
        :
        alert('Não foi possivel abrir os detalhes do crime, tente novamente mais tarde')
      }
    </>
  )
}

const mapStateToProps = state => ({
  dataCrime: state.crime
})

const mapDispatchToProps = dispatch => ({
  crime : bindActionCreators(crimeAction, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal)