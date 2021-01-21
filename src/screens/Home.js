import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { FaFolderOpen, FaSortAmountDownAlt, FaRegPlusSquare} from "react-icons/fa"; 
import * as crimeAction from '../action/CrimeAction'
import crimeRequest from '../services/requests'
import Select from '../components/Select'
import Button from '../components/Button'
import Table from '../components/Table'

const Home = (props) => {

  const [orderBy, setOrderBy] = useState('')
  const [filter, setFilter] = useState('')
  const [hasSearch, setHasSearch] = useState(false)
  let [searchResult, setSearchResult] = useState([])
  const [crimeTypes, setCrimeTypes] = useState([])

  const filterType = [
    'Date', 
    'Weapon', 
    'Criminal', 
    'Victim', 
    'Country'
  ]

  useEffect(() => {
    props.crime.getAllCrimes()
    props.crime.getAllCrimeTypes()
    props.crime.getAllWeapons()
    props.crime.getAllVictims()
    props.crime.getAllCriminals()
    console.log(props.dataCrime)
    setCrimeTypes(props.dataCrime.allCrimeTypes.crime_types)
  }, [])

  
  function sendSeach(){
    let order_by = orderBy ? `crime_type=${orderBy}` : ''
    let filterCrimeType = filter ? `order_by=${filter}` : ''
    let params = `${filterCrimeType}&${order_by}`
    crimeRequest.crimesSearch(params, (isSuccessful, res) => {
      if(isSuccessful){
        setHasSearch(true)    
        setSearchResult(res.data.crimes)
      }
    })
  }

  function renderFieldsSearch() {
    return(
      <div>
        <h1 className='homeTitle'>LISTAS DE CRIMES</h1>
        <div className='info_area'>
          <div className='form col-sm-12 col-md-12 col-lg-5'>
            <label>Busca por país</label>
            <input type="text" className='searchInput' placeholder='Search for...' />
            <label className='label'>
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
            <div className='containerButton'>
              <Link to='/newCrime' className='buttonNewCrime'>
                <div className='icon'><FaRegPlusSquare /></div>
                <h4>ADD NOVO CRIME</h4>
              </Link>
              <div className='button'>
                <Button 
                  onClick={() => sendSeach()} 
                  text={'BUSCAR'}
                />
              </div>
            </div>
            
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
    <div className='container'> 
      <div className='row'>
        {renderFieldsSearch()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)