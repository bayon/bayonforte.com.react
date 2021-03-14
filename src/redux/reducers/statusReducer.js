import { FETCH_STATUS } from "../actions/statusAction";

const initialState = {
    authorized:false,
    sentence:"oh what fun it is...",
  
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STATUS:
      
      return {
        ...state,
        status: action.payload,
      };
      break;
    
  }
  return state;
}
 