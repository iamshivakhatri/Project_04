import {useState, useEffect} from 'react'
import Car from "../components/car"
import "./ViewCars.css"


import '../App.css'

const ViewCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try{
                const response = await fetch('http://localhost:3000/viewcars');
                const data = await response.json();
                console.log("This is data", data);
                console.log("I am here")
                setCars(data);

            }catch(error){
                console.log(error)
            }

        }
        fetchCars();
        
    }, []);
    
    return (
        <div>
            <main className='car__container'>
               {
                 cars && cars.length > 0 ? (cars.map((car) => (
                 
                    <Car key={car.id} car = {car} />
            
                 )))
                 
                 : (
                 <h2>
                    <i className="fa-regular fa-calendar-xmark fa-shake"></i> 
                 {'No Customized Cars Yet'}
                 </h2>
                  )

               }


            </main>
            
        </div>
    )
}

export default ViewCars