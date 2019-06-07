import React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'

import stylesheet from './../../styles/index.scss'

import Header from './Header'

class MainLayout extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			pathname: ''
		}
	}

	componentDidMount() {
		this.setState({
			pathname: window.location.pathname
		})
	}

	render() {
		const { children } = this.props
		return (
			<div>
				<Head>
					<meta charSet="UTF-8"/>
					<title>NEXT STARTER PACK</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
					<meta name="robots" content="index, follow"/>
					<meta name="keywords" content=""/>
					<meta name="description" content=""/>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				</Head>
				<Header/>
				{children}
				<br/>
				RUN AT : {process.env.FRONT_END_PORT_WITH_IP}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainLayout)
