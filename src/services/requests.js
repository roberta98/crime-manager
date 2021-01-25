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

const getCrime = (crime_id, callback) => {
  axios.get(`crime?crime_id=${crime_id}`)
    .then(res => {
      callback(true, res)
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

const getAllCrimeTypes = (callback) => {
  axios.get("crime_types")
    .then(res => {
      callback(true, res.data)
    })
    .catch(e => {
      callback(false, e)
    })
}

const crimesSearch = (params, callback) => {
  axios.get(`crimes?${params}`)
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
  axios.delete(`crime?crime_id=${id_crime}`)
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
  getAllCrimeTypes,
  crimesSearch,
  insertNewCrime,
  deleteCrime
}

export default requests
