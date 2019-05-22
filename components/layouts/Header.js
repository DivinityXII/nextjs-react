import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'react-redux'

class IndexContainer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
            loading: false,
        }
    }
    

	render() {
		return (
            <header className="main-header">
                Header
            </header>
		)
	}
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    
}) 

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexContainer)