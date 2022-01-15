import { connect } from "react-redux";
import { addTask, setTaskText } from "../actions";
import AddTask from "../components/Pages/component/AddTask";
import { getText } from "../selectors";

const mapStateToProps = state => ({
  text: getText(state)
})

const mapDispatchToProps = dispatchEvent => ({
  setTaskText: text => dispatch(setTaskText(text)),
  addToDo: text=> dispatch(addTask(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)