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

const getWeapons = dispatch = () => {
  dispatch(getWeaponsLoading())
  requests.getWeapons((isSuccessful, res) => {
    if(isSuccessful){
      dispatch(getWeaponsSuccess(res))
    }else{
      dispatch(getWeaponsFailed(res + ' Não foi possivel carregar as armas'))
    }
  })
}

const actions = {
  getWeapons
}

export default actions