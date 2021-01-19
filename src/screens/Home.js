import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as crimeAction from '../action/CrimeAction'
import crimeRequest from '../services/requests'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Select from '../components/Select'
import Button from '../components/Button'
import Table from '../components/Table'

const Home = (props) => {

  const [orderBy, setOrderBy] = useState('')
  const [filter, setFilter] = useState('')
  const [hasSearch, setHasSearch] = useState(false)
  const searchResult = []
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
    let order_by = orderBy ? `crime_type=${orderBy}` : ''
    let filterCrimeType = filter ? `order_by=${filter}` : ''
    let params = `${filterCrimeType}&${order_by}`
    crimeRequest.crimesSearch(params, (isSuccessful, res) => {
      if(isSuccessful){
        setHasSearch(true)
        res.data.crimes.map(item => {
          searchResult.push(
            {
              id : item.id_crime,
              criminal : '',
              date: item.crime_date,
              victims: item.victims_crime[0].victim,
              country: item.country
            }
          )
        })
      }
    })
    console.log(searchResult)
  }

  function renderFieldsSearch() {
    return(
      <div>
        <div>
          <h1 className='homeTitle'>LISTAS DE CRIMES</h1>
          {/* <Button text={'ADD NOVO CRIME'} /> */}
        </div>
        <div className='info_area'>
          <div className='form col-sm-12 col-md-12 col-lg-5'>
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
            <Button 
              onClick={() => sendSeach()} 
              text={'BUSCAR'}/>
          </div>
          {/* {hasSearch && */}
            <div className='table col-sm-12 col-md-12 col-lg-5 offset-lg-1'>
              <Table 
                data={searchResult}
              />
            </div>
          {/* } */}

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