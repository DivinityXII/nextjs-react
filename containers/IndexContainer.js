import React from 'react'
import { connect } from 'react-redux'

import { initSomeState } from '../redux-actions/SomeAction'

class IndexContainer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			input: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	componentDidMount() {

	}

	async handleInputChange(event) {
		let value = event.target.value
		let id = event.target.id
		this.props.initSomeState(value)
		await this.setState({
			[id]: value
		})
	}

	render() {
		return (
			<>
				<input type="text" id="input" onChange={this.handleInputChange} value={this.state.input}/>
				<br/>
				Index Container : props redux[{this.props.someState}]
			</>
		)
	}
}

const mapStateToProps = (state) => ({
    someState: state.SomeReducer.someState,
})

const mapDispatchToProps = (dispatch) => ({
	initSomeState: value => {
		dispatch(initSomeState(value))
	},
}) 

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexContainer)