import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, useHistory} from 'react-router-dom'
import * as crimeAction from '../action/CrimeAction'
import crimeRequest from "../services/requests"
import Button from '../components/Button'
import Select from '../components/Select'


import "react-datepicker/dist/react-datepicker.css";

const NewCrime = (props) => {

  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState('')
  const [allCrimeTypes, setAllCrimeTypes] = useState([])
  const [weapons, setWeapons] = useState([])
  const [crimeType, setCrimeType] = useState('')
  const [criminal, setCriminal] = useState([])
  const [criminalId, setCriminalId] = useState(-1)
  const [crimeWeapon, setCrimeWeapon] = useState('')
  const [country, setCountry] = useState('')
  const history = useHistory()

  useEffect(() => {
    if(props.dataCrime.allCrimeTypes.crime_types.length <= 0){
      props.crime.getAllCrimeTypes()
    }
    setAllCrimeTypes(props.dataCrime.allCrimeTypes.crime_types)
  }, [props.dataCrime.allCrimeTypes.crime_types.length])

  useEffect(() => {
    setWeapons(props.dataCrime.weapons)
    setCriminal(props.dataCrime.criminals)
  }, [])

  function addNewCrime(event){
    event.preventDefault()
    let params = {
      "victim_list": [
        {
          "victim_id": 1
        }
      ],
      "weapon_list": [
        {
          "weapon_id": crimeWeapon
        }
      ],
      "criminal_list": [
        {
          "criminal_id": criminalId,
          "id_crime_type": crimeType
        }
      ],
      "country": country,
      "crime_date": date
    }
    crimeRequest.insertNewCrime(params, (isSuccessful, res) => {
      console.log(isSuccessful, res)
      if(res.status !== 0) return alert('Não foi possivel adicionar um novo crime')
      return (
        <>        
          {alert('Novo crime cadastrado com sucesso')}
          {history.push('/')}
        </>
      )
    })
  } 


  function renderForm() {
    return(
      <form onSubmit={addNewCrime}>
        <label className="label">Tipo do crime</label>
        <Select 
          onChange={({target}) => setCrimeType(target.value)} 
          placeholder={'Selecione uma opção'} 
          data={allCrimeTypes} 
          selectType={'orderBy'}
          value={crimeType}
        />
        <label className="label">Data</label><br/>
        <DatePicker 
          selected={startDate} 
          onChange={date => setDate(date)} 
          showTimeSelect 
          dateFormat="Pp" 
        /><br/>
        <label className="label">Criminoso(a)</label> 
        <Select 
          placeholder="Selecione o nome do/da meliante..."
          onChange={({target}) => setCriminalId(target.value)}
          data={criminal}
          value={criminalId}
          selectType={'criminal'}
        />
        <label className="label">Arma do crime</label>
        <Select 
          onChange={({target}) => setCrimeWeapon(target.value)} 
          placeholder={'Selecione uma opção'} 
          data={weapons} 
          selectType={'weapons'}
          value={crimeWeapon}
        />
        <br/>
        <label className="label">País</label> 
        <input placeholder="Nome do país" type="text" onChange={({target}) => setCountry(target.value)}/> 
        <Button
          text={'SALVAR NOVO CRIME'}
          type={'adicionar'}
          className={'addButton'}
        />
      </form>
    )
  }

  return(
    <div className='container'>
      <h1 className='homeTitle'>New crime</h1>
      <div className="col-lg-6 col-md-6 col-sm-12">
        {renderForm()}
      </div>
 
    </div>  
  )
}

const mapStateToProps = state => ({
  dataCrime: state.crime
})
const mapDispatchToProps = dispatch => ({
  crime : bindActionCreators(crimeAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCrime)