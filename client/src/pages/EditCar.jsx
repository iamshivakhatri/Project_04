import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./EditCar.css"

const EditCar = () => {
    const { id } = useParams();
    const [car, setCar] = useState({
        id: 0,
        color: '',
        wheels: '',
        interior: '',
        exterior: '',
        roof: '',
        price: 0,
      });

      useEffect(() => {
        const fetchCarById = async () => {
          try {
            const response = await fetch(`http://localhost:3000/viewcars/${id}`);
            const data = await response.json();
            setCar(data);
            console.log("This is the data",data);
            console.log("This is the car",car);
          } catch (error) {
            console.log(error);
          }
        };
        fetchCarById();
      }, []);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Send a PUT request to update the car details on the server
          const response = await fetch(`http://localhost:3000/viewcars/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(car),
          });
    
          if (response.ok) {
            // Car details updated successfully
            history.push('/viewcars'); // Redirect to the car list page
          } else {
            console.error('Failed to update car details');
          }
        } catch (error) {
          console.error(error);
        }
      };
    

  return (
    <div className="EditCar">
    <h1>Edit Car</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={car.color}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="wheels">Wheels:</label>
        <input
          type="text"
          id="wheels"
          name="wheels"
          value={car.wheels}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="interior">Interior:</label>
        <input
          type="text"
          id="interior"
          name="interior"
          value={car.interior}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exterior">Exterior:</label>
        <input
          type="text"
          id="exterior"
          name="exterior"
          value={car.exterior}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="roof">Roof:</label>
        <input
          type="text"
          id="roof"
          name="roof"
          value={car.roof}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={car.price}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Update Car</button>
    </form>
  </div>

  )
}

export default EditCar