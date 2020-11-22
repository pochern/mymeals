/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  render () {
    console.log('Props', this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}

// Maps Redux state to components props
function mapStateToProps ({ calendar, food }) {
  // If you want to be able to make a grid in React, you need to use map so you need an array
  // With Redux, it makes more sense to have DS be an object
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]]
          : null

        return meals
      }, {})
    }))
  }
}

// Maps dispatch to component props to clean up component
function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
