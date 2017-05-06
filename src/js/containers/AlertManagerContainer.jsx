import { connect } from 'react-redux'
import AlertManager from '../components/AlertManager'

const mapStateToProps = state => ({
  openOrders: state.openOrders
})

export default connect(mapStateToProps)(AlertManager)
