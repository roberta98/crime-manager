import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as homeAction from '../action/HomeAction'
import requests from '../services/requests'

const Home = (props) => {

  useEffect(() => {
    props.actions.weapons()
  }, [])

  function renderCards(){
    requests.getWeapons((isSuccessful, res) => {
      if(isSuccessful){
        console.log(res.data)
      }else{
        console.log(res.data)
      }
    })
  }

  return(
    <div>
      <h2>TESTE</h2>
      {renderCards()}
    </div>
  )
}

const mapStateToProps = state => ({
  home: state.Home
})

const mapDispatchToProps = dispatch => ({
  actions: {
    weapons : bindActionCreators(homeAction.getWeapons, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)