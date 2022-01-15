import { 
  ADD_TASK, FETCH_TASKS_FAILURE, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, SET_BORDER_COLOR
} from './actionTypes'

let nextTaskId = 0

const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST
})

const fetchTasksSuccess = (data) => ({
  type: FETCH_TASKS_SUCCESS,
  data
})

const fetchTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  error
})


//获取初始数据
export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(fetchTasksRequest());
    return fetch("./mock/task.json").then(
      response => {
        response.json().then(data => {
          dispatch(fetchTasksSuccess(data))
        })
      },
      error => {
        dispatch(fetchTasksFailure(error));
        console.log('An error occured:' + error)
      }
    )
  }
}

export const addTask = (text) => ({
  type: ADD_TASK,
  id: nextTaskId++,
  text,
  statusText: 'Prepare to study'
})



export const setBorderColor = borderColor => ({
  type: SET_BORDER_COLOR,
  borderColor
})