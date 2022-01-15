import { connect } from "react-redux";
import { setBorderColor, fetchTasks } from "../actions";
import Pages from "../components/Pages";

const mapStateToProps = state => ({
  tasks: state
})

const mapDispatchToProps = dispatch => ({
  setBorderColor: id => dispatch(setBorderColor(id)),
  fetchTasks: () => dispatch(fetchTasks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);