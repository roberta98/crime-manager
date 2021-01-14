import axios from './api'

const getWeapons = (callback) => {
  axios.get("weapons")
    .then(res => {
      callback(true, res.data)
    })
    .catch(e => {
      callback(false, e)
    })
}

const getCriminals = (callback) => {
  axios.get("criminals")
    .then(res => {
      callback(true, res.data)
    })
    .catch(e => {
      callback(false, e)
    })
}

const getVictims = (callback) => {
  axios.get("victims")
    .then(res => {
      callback(true, res.data)
    })
    .catch(e => { 
      callback(false, e)
    })
}

const getWeaponsTypes = (callback) => {
  axios.get("weapon_types")
    .then(res => {
      callback(true, res.data)
    })
    .catch(e => {
      callback(false, e)
    })
}

const getCrime = (callback) => {
  axios.get("crime")
    .then(res => {
      callback(true, res.data)
    })
    .catch(e => {
      callback(false, e)
    })
}

const getAllCrimes = (callback) => {
  axios.get("crimes")
    .then(res => {
      callback(true, res.data)
    })
    .catch(e => {
      callback(false, e)
    })
}

const insertNewCrime = (params, callback) => {
  axios.post("crime", params)
    .then(res => {
      callback(true, res.data)
    })
    .catch(e => {
      callback(false, e)
    })
}

const deleteCrime = (id_crime, callback) => {
  axios.delete("crime")
    .then(res => {
      callback(true, res.data)
    })
    .catch(e => {
      callback(false, e)
    })
}

const requests = {
  getWeapons,
  getCriminals,
  getVictims,
  getWeaponsTypes,
  getCrime,
  getAllCrimes,
  insertNewCrime,
  deleteCrime
}

export default requests
