import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Nav from '../components/Nav'

const mapStateToProps = state => ({
  openOrders: state.openOrders,
  canceledOrders: state.canceledOrders,
  completedOrders: state.completedOrders
})

export default withRouter(connect(mapStateToProps)(Nav))
