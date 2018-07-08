import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, onProps) => ({
  active: onProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, onProps) => ({
  onClick: () => dispatch(setVisibilityFilter(onProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
