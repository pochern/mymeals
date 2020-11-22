/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react'
import { connect } from 'react-redux'

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
function mapStateToProps (calendar) {
  // If you want to be able to make a grid in React, you need to use map so you need an array
  // With Redux, it makes more sense to have DS be an object
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null

        return meals
      }, {})
    }))
  }
}

export default connect(mapStateToProps)(App)
