
{
  weapons: [],
  getWeaponsLoading = false
}

export default function home(state = [], { type, payload }) {
  switch(type){
    case 'ACTION_WEAPONS':
      return{
        ...state,
        getWeaponsLoading = true
      }
    case 'SUCCESS_WEAPONS':
      return{
        ...state,
        getWeaponsLoading = false,
        weapons : payload
      }
    case 'FAILED_WEAPONS': 
      return{
        ...state,
        getWeaponsLoading = false,
        weapons : payload
      }
    default: 
      return state;
  }
}