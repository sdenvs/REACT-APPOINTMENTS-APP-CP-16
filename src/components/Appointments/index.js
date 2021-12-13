// Write your code here
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

const {Component} = require('react/cjs/react.development')

class Appointments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStarred: false,
      appointmentList: [
        {id: uuidv4(), title: 'Ganesh Ram', date: '23-09-1996', star: false},
        {id: uuidv4(), title: 'Ganesh Ram', date: '23-09-1996', star: false},
        {id: uuidv4(), title: 'Ganesh Ram', date: '23-09-1996', star: false},
        {id: uuidv4(), title: 'Ganesh Ram', date: '23-09-1996', star: false},
      ],
      title: '',
      date: '',
    }
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  dateChange = event => {
    this.setState({date: event.target.value})
  }

  submitapp = event => {
    event.preventDefault()
    const {title, date} = this.state
    if (title === '' || date === '') {
      alert('Input fiels should not be Empty')
    } else {
      this.setState(prev => ({
        appointmentList: [
          ...prev.appointmentList,
          {id: uuidv4(), title, date, star: false},
        ],
        title: '',
        date: '',
      }))
    }
  }

  starFun = id => {
    this.setState(prev => ({
      appointmentList: prev.appointmentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, star: !eachItem.star}
        }
        return eachItem
      }),
    }))
  }

  toggleStarred = () => {
    this.setState(prev => ({isStarred: !prev.isStarred}))
  }

  render() {
    const {isStarred, appointmentList, title, date} = this.state
    const showapp = appointmentList.filter(eachItem => {
      if (isStarred) {
        if (eachItem.star) {
          return eachItem
        }
        return false
      }
      return true
    })
    return (
      <div className="bgContainer">
        <div className="card">
          <div className="card-top">
            <form onSubmit={this.submitapp}>
              <h1 className="heading">Add Appointment</h1>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <br />
              <input
                onChange={this.titleChange}
                value={title}
                className="input"
                id="title"
                type="text"
              />
              <br />
              <label className="label" htmlFor="date">
                DATE
              </label>
              <br />
              <input
                onChange={this.dateChange}
                value={date}
                className="input"
                type="date"
                id="date"
              />
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div>
              <img
                className="appointment-image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="starredDiv">
            <h1 className="subHeading">Appointments</h1>
            <button
              onClick={this.toggleStarred}
              className={isStarred ? 'starred' : 'unStarred'}
            >
              Starred
            </button>
          </div>
          <ul className="appList">
            {showapp.map(eachItem => (
              <AppointmentItem
                starFun={this.starFun}
                key={eachItem.id}
                details={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
