

const initialstate = {items:[]};
const test =()=>{

}

const reducer = (state = initialstate , action)=>{
    switch(action.type){
        case 'ADD_TO_CART':

            return {
              ...state,
              items:state.items.concat(action.payload),
            };
          case 'REMOVE_FROM_CART':
            
            return {
              ...state,
              items: state.items.filter(item => item !== action.payload),

            };
            default:
                return state;
        }
}
export default reducer;