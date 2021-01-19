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
import { FaFolderOpen, FaSortAmountDownAlt} from "react-icons/fa"; 

const Home = (props) => {

  const [orderBy, setOrderBy] = useState('')
  const [filter, setFilter] = useState('')
  const [hasSearch, setHasSearch] = useState(false)
  let [searchResult, setSearchResult] = useState([])
  const [crimeTypes, setCrimeTypes] = useState([])
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
    props.crime.getAllCrimeTypes()
    console.log(props.dataCrime)
    setCrimeTypes(props.dataCrime.allCrimeTypes.crime_types)
  }, [])
  
  function sendSeach(){
    let order_by = orderBy ? `crime_type=${orderBy}` : ''
    let filterCrimeType = filter ? `order_by=${filter}` : ''
    let params = `${filterCrimeType}&${order_by}`
    let array = []
    crimeRequest.crimesSearch(params, (isSuccessful, res) => {
      if(isSuccessful){
        setHasSearch(true)    
        setSearchResult(res.data.crimes)
      }
    })
    // console.log(array, array.length)
  }

  function renderFieldsSearch() {
    return(
      <div>
        <div className='headerTitle'>
          <h1 className='homeTitle'>LISTAS DE CRIMES</h1>
          <Button type={'adicionar'} text={'ADD NOVO CRIME'} className={'offset-sm-0 offset-lg-11'} />
        </div>
        <div className='info_area'>
          <div className='form col-sm-12 col-md-12 col-lg-5'>
            <label>Busca por país</label>
            <input type="text" className='searchInput' placeholder='Search for...' />
            <label>
              <FaFolderOpen />
              Tipo do crime
            </label> {/* inserir icone */}
            <Select 
              onChange={({target}) => setOrderBy(target.value)} 
              placeholder={'Todos crimes'} 
              data={crimeTypes} 
              selectType={'orderBy'}
            />
            <label>
              <FaSortAmountDownAlt />
              Ordenar por
            </label> {/* inserir icone */}
            <Select 
              onChange={({target}) => setFilter(target.value)} 
              placeholder={'Escolha um filtro'} 
              data={filterType} 
              selectType={'filter'}
            />
            <Button 
              onClick={() => sendSeach()} 
              text={'BUSCAR'}/>
          </div>
          {hasSearch &&
            <div className='table col-sm-12 col-md-12 col-lg-5 offset-lg-1'>
              <Table 
                data={searchResult}
              />
            </div>
         }

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