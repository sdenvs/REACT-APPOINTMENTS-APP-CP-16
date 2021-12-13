// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {details, starFun} = props
  const {id, title, date, star} = details

  const newDate = date.split('-')
  console.log(newDate)
  console.log(typeof date)
  const changeStar = () => {
    starFun(id)
  }
  return (
    <li className="app">
      <div className="app-top-container">
        <p className="app-heading">{title}</p>
        <button testid="star" onClick={changeStar}>
          <img
            className="app-star"
            alt="star"
            src={
              star
                ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
            }
          />
        </button>
      </div>
      <p className="app-time">
        {format(
          new Date(
            parseInt(newDate[0]),
            parseInt(newDate[1]) - 1,
            parseInt(newDate[2]),
          ),
          'dd MMMM yyyy, EEEE',
        )}
      </p>
    </li>
  )
}

export default AppointmentItem
