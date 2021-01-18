
const initialState = {
  weapons: [],
  criminals: [],
  victims: [],
  weapons_types: [],
  crime: [],
  allCrimes: [],
  allCrimeTypes: [],
  getWeaponsLoading: false,
  getCriminalsLoading: false,
  getVictimsLoading: false, 
  getWeaponsTypesLoading: false,
  getCrimeLoading: false,
  getAllCrimesLoading: false,
  getAllCrimeTypesLoading: false,
}

export default function crime(state = initialState, { type, payload }) {
  switch(type){
    case 'ACTION_WEAPONS':
      return{
        ...state,
        getWeaponsLoading: true
      }
    case 'SUCCESS_WEAPONS':
      return{
        ...state,
        getWeaponsLoading: false,
        weapons : payload
      }
    case 'FAILED_WEAPONS': 
      return{
        ...state,
        getWeaponsLoading: false,
        weapons : payload
      }
    case 'ACTION_CRIMINALS': 
      return{
        ...state,
        getCriminalsLoading: true
      }
    case 'SUCCESS_CRIMIMALS':
      return{
        ...state,
        getCriminalsLoading: false,
        criminals: payload
      }
    case 'FAILED_CRIMIMALS': 
      return{
        ...state,
        getCriminalsLoading: false,
        criminals: payload
      }
    case 'ACTION_VICTIMS': 
      return{
        ...state,
        getVictimsLoading: true
      }
    case 'SUCCESS_VICTIMS': 
      return{
        ...state,
        getVictimsLoading: false,
        victims: payload
      }
    case 'FAILED_VICTIMS': 
      return{
        ...state,
        getVictimsLoading: false,
        victims: payload
      }
    case 'ACTION_WEAPONS_TYPES':
      return{
        ...state,
        getWeaponsTypesLoading: true
      }
    case 'SUCCESS_WEAPONS_TYPES': 
      return {
        ...state,
        getWeaponsTypesLoading: false,
        weapons_types: payload
      }
    case 'FAILED_WEAPONS_TYPES': 
      return{
        ...state,
        getWeaponsTypesLoading: false,
        weapons_types: payload
      }
    case 'ACTION_CRIME': 
      return{
        ...state,
        getCrimeLoading: true
      }
    case 'SUCCESS_CRIME':
      return{
        ...state,
        getCrimeLoading: false,
        crime: payload
      }
    case 'FAILED_CRIME': 
      return{
        ...state,
        getCrimeLoading: false,
        crime: payload
      }
    case 'ACTION_ALL_CRIME':
      return{
        ...state,
        getAllCrimesLoading: true
      }
    case 'SUCCESS_ALL_CRIME': 
      return {
        ...state,
        getAllCrimesLoading: false,
        allCrimes: payload
      }
    case 'FAILED_ALL_CRIME': 
      return{
        ...state,
        getAllCrimesLoading: false,
        allCrimes: payload
      }
      case 'ACTION_ALL_CRIME_TYPES':
      return{
        ...state,
        getAllCrimeTypesLoading: true
      }
    case 'SUCCESS_ALL_CRIME_TYPES': 
      return {
        ...state,
        getAllCrimeTypesLoading: false,
        allCrimeTypes: payload
      }
    case 'FAILED_ALL_CRIME_TYPES': 
      return{
        ...state,
        getAllCrimeTypesLoading: false,
        allCrimeTypes: payload
      }
    default: 
      return state;
  }
}