import "./car.css"
import { Link } from 'react-router-dom'


const car = ({car}) => {

  const getDetails = () => {


  }

  
  return (
    <article className="car">

      <div className="car__container">

      </div>

      <div className="car__info">
      <p>{car.color}</p>
        <p>{car.wheels}</p>
        <p>{car.interior}</p> 
        <p>{car.exterior}</p>
        <p>{car.roof}</p>
        <p>{car.price}</p>

      </div>

      <Link to = {'/customcars/' + car.id}>
      <button onClick={getDetails}>
        Details
      </button>
      </Link>
      

        



</article>
  )
}

export default car

