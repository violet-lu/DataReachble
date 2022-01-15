
import { 
  ADD_TASK, FETCH_TASKS_FAILURE, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, SET_BORDER_COLOR
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  data: [],
  bordeCrolor: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TASKS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return {
        ...state,
        data: tasks(state.data, action)
      }
  }
}

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          stateText: action.statusText
        }
      ]
    default: 
    return state
  }
}

export const setBorderColor = (state = initialState, action) => {
  switch (action.type) {
    case  SET_BORDER_COLOR:
      return {
        ...state,
        bordeCrolor: true
      }
    default:
      return state
  }
}

export default reducer