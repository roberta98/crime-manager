import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as crimeAction from '../action/CrimeAction'
import crimeRequest from '../services/requests'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Select from '../components/Select'
import Button from '../components/Button'

const Home = (props) => {

  const [orderBy, setOrderBy] = useState('')
  const [filter, setFilter] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const crime_types = props.dataCrime.allCrimeTypes ? props.dataCrime.allCrimeTypes.crime_types : []
  let crime_id = -1
  

  const filterType = [
    'Date', 
    'Weapon', 
    'Criminal', 
    'Victim', 
    'Country'
  ]

  useEffect(() => {
    //props.crime.getCrime(crime_id) 
    props.crime.getAllCrimes()
    console.log()
  }, [])

  function handleFilter(e){
    let text = e.target.value
    setFilter(text)
  }
  function handleOrderBy(e){
    let text = e.target.value
    setOrderBy(text)
  }

  function sendSeach(){
    let order_by = orderBy ? `order_by=${orderBy}` : ''
    let filterCrimeType = filter ? `crime_type=${filter}` : ''
    let params = `${filterCrimeType}&${order_by}`
    crimeRequest.crimesSearch(params, (isSuccessful, res) => {
      if(isSuccessful){
        setSearchResult(res)
      }
    })
  }

  function renderFieldsSearch() {
    return(
      <div>
        <h1 className='homeTitle'>LISTAS DE CRIMES</h1>
        <div className='form'>
          <label>Busca por país</label>
          <input type="text" className='searchInput' placeholder='Search for...' />
          <label>Tipo do crime</label> {/* inserir icone */}
          <Select 
            onChange={handleOrderBy} 
            placeholder={'Todos crimes'} 
            data={crime_types} 
            selectType={'orderBy'}
          />
          <label>Ordenar por</label> {/* inserir icone */}
          <Select 
            onChange={handleFilter} 
            placeholder={'Escolha um filtro'} 
            data={filterType} 
            selectType={'filter'}
          />
          <Button onClick={() => sendSeach()} text={'Buscar'}/>
        </div>
      </div>
    )
  }

  return(
    <div>
      <Header />
      <div className='container'> 
        <div className='row'>
          {renderFieldsSearch()}
        </div>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  dataCrime: state.crime
})

const mapDispatchToProps = dispatch => ({
  crime : bindActionCreators(crimeAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)