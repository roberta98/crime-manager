import requests from "../services/requests"

const getWeaponsLoading = () => ({
  type: 'ACTION_WEAPONS'
})

const getWeaponsSuccess = (data) => ({
  type: 'SUCCESS_WEAPONS',
  payload: data
})

const getWeaponsFailed = (e) => ({
  type: 'FAILED_WEAPONS',
  payload: e
})

export const getAllWeapons = () => dispatch => {
  dispatch(getWeaponsLoading())
  requests.getWeapons((isSuccessful, res) => {
    if(isSuccessful){
      //console.log(res.data)
      dispatch(getWeaponsSuccess(res.data))
    }else{
      dispatch(getWeaponsFailed(res + ' Não foi possivel carregar as armas'))
    }
  })
}

const getCriminalsLoading = () => ({
  type: 'ACTION_CRIMINALS',
})

const getCriminalsSuccess = (data) => ({
  type: 'SUCCESS_CRIMIMALS',
  payload: data
})

const getCriminalsFailed = (e) => ({
  type: 'FAILED_CRIMIMALS',
  payload: e
})

export const getAllCriminals = () => dispatch => {
  dispatch(getCriminalsLoading())
  requests.getCriminals((isSuccessful, res) => {
    if(isSuccessful){
      //console.log(res.data)
      dispatch(getCriminalsSuccess(res.data))
    }else{
      dispatch(getCriminalsFailed(res + ' Não foi possivel carregar os crimes'))
    }
  })
}

const getVictimsLoading = () => ({
  type: 'ACTION_VICTIMS',
})

const getVictimsSuccess = (data) => ({
  type: 'SUCCESS_VICTIMS',
  payload: data
})

const getVictimsFailed = (e) => ({
  type: 'FAILED_VICTIMS',
  payload: e
})

export const getAllVictims = () => dispatch => {
  dispatch(getVictimsLoading())
  requests.getVictims((isSuccessful, res) => {
    if(isSuccessful){
      //console.log(res.data)
      dispatch(getVictimsSuccess(res.data))
    }else{
      dispatch(getVictimsFailed(res + ' Não foi possivel carregar os crimes'))
    }
  })
}

const getWeaponsTypesLoading = () => ({
  type: 'ACTION_WEAPONS_TYPES',
})

const getWeaponsTypesSuccess = (data) => ({
  type: 'SUCCESS_WEAPONS_TYPES',
  payload: data
})

const getWeaponsTypesFailed = (e) => ({
  type: 'FAILED_WEAPONS_TYPES',
  payload: e
})

export const getAllWeaponsTypes = () => dispatch => {
  dispatch(getWeaponsTypesLoading())
  requests.getWeaponsTypes((isSuccessful, res) => {
    if(isSuccessful){
      //console.log(res.data)
      dispatch(getWeaponsTypesSuccess(res.data))
    }else{
      dispatch(getWeaponsTypesFailed(res + ' Não foi possivel carregar os crimes'))
    }
  })
}

const getCrimeLoading = () => ({
  type: 'ACTION_CRIME',
})

const getCrimeSuccess = (data) => ({
  type: 'SUCCESS_CRIME',
  payload: data
})

const getCrimeFailed = (e) => ({
  type: 'FAILED_CRIME',
  payload: e
})

export const getCrime = (crime_id) => dispatch => {
  dispatch(getCrimeLoading())
  requests.getCrime(crime_id, (isSuccessful, res) => {
    if(isSuccessful){
      //console.log(res.data)
      dispatch(getCrimeSuccess(res.data))
    }else{
      dispatch(getCrimeFailed(res + ' Não foi possivel carregar os crimes'))
    }
  })
}

const getAllCrimesLoading = () => ({
  type: 'ACTION_ALL_CRIME',
})

const getAllCrimesSuccess = (data) => ({
  type: 'SUCCESS_ALL_CRIME',
  payload: data
})

const getAllCrimesFailed = (e) => ({
  type: 'FAILED_ALL_CRIME',
  payload: e
})

export const getAllCrimes = () => dispatch => {
  dispatch(getAllCrimesLoading())
  requests.getAllCrimes((isSuccessful, res) => {
    if(isSuccessful){
      //console.log(res.data)
      dispatch(getAllCrimesSuccess(res.data))
    }else{
      dispatch(getAllCrimesFailed(res + ' Não foi possivel carregar os crimes'))
    }
  })
}

const getAllCrimeTypeLoading = () => ({
  type: 'ACTION_ALL_CRIME_TYPES',
})

const getAllCrimeTypeSuccess = (data) => ({
  type: 'SUCCESS_ALL_CRIME_TYPES',
  payload: data
})

const getAllCrimeTypeFailed = (e) => ({
  type: 'FAILED_ALL_CRIME_TYPES',
  payload: e
})

export const getAllCrimeTypes = () => dispatch => {
  dispatch(getAllCrimeTypeLoading())
  requests.getAllCrimeTypes((isSuccessful, res) => {
    if(isSuccessful){
      dispatch(getAllCrimeTypeSuccess(res.data))
    }else{
      dispatch(getAllCrimeTypeFailed(res + ' Não foi possivel carregar os crimes'))
    }
  })
}