import React from 'react'
import { connect } from 'react-redux'

import { initSomeState } from '../redux-actions/SomeAction'

class IndexContainer extends React.Component {

  constructor(props) {
		super(props)
		this.state = {}
	}
  
  render() {
    return (
      <>
        <div className='hero'>
          <h1 className='title'>Welcome to Next.js DivinityXii Template !</h1>
          <p className='description'>
            To get started, please read article below and try to understand in this template structure.
          </p>
          <p className='description'>
            Testing redux => someState : {this.props.someState}
          </p>

          <div className='row'>
            <a href='https://nextjs.org/docs' className='card'>
              <h3>Documentation &rarr;</h3>
              <p>Learn more about Next.js in the documentation.</p>
            </a>
            <a href='https://nextjs.org/learn' className='card'>
              <h3>Next.js Learn &rarr;</h3>
              <p>Learn about Next.js by following an interactive tutorial!</p>
            </a>
            <a href='https://github.com/zeit/next.js/tree/master/examples' className='card'>
              <h3>Examples &rarr;</h3>
              <p>Find other example boilerplates on the Next.js GitHub.</p>
            </a>
          </div>
        </div>

        <style jsx>
          {
            ` .hero {
              width: 100%;
              color: #333;
            }

            .title {
              margin: 0;
              width: 100%;
              padding-top: 80px;
              line-height: 1.15;
              font-size: 48px;
            }

            .title,
            .description {
              text-align: center;
            }

            .row {
              max-width: 880px;
              margin: 80px auto 40px;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
            }

            .card {
              padding: 18px 18px 24px;
              width: 220px;
              text-align: left;
              text-decoration: none;
              color: #434343;
              border: 1px solid #9b9b9b;
            }

            .card:hover {
              border-color: #067df7;
            }

            .card h3 {
              margin: 0;
              color: #067df7;
              font-size: 18px;
            }

            .card p {
              margin: 0;
              padding: 12px 0 0;
              font-size: 13px;
              color: #333;
            }

            `
          }
        </style>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  someState: state.SomeReducer.someState
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