import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./EditCar.css"
import aerowheels from "../assets/aerowheels.png"
import sportwheels from "../assets/sportswheel.jpeg"
import uberturbinewheels from "../assets/uberturbine.webp"
import blackpremiuminterior from "../assets/blackpremium.jpeg"
import whitepremiuminterior from "../assets/whitepremium.webp"
import wooddecor from "../assets/wooddecor.jpeg"
import custompaint from "../assets/custompaint.jpeg"
import bodykit from "../assets/bodykit.png"
import panoromicglassroof from "../assets/panaromic.jpeg"
import sunroof from "../assets/sunroof.jpeg"
import red from "../assets/red.png"
import blue from "../assets/blue.jpeg"
import white from "../assets/white.png"
import black from "../assets/black.jpeg"
import silver from "../assets/silver.png"

const EditCar = () => {
    const { id } = useParams();
    const [car, setCar] = useState({
        id: 0,
        name : '',
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
            setColor(data.color);
        setCarName(data.name);
        setWheels(data.wheels);
        setInterior(data.interior);
        setExterior(data.exterior);
        setRoof(data.roof);
        setPrice(data.price);
            console.log("This is the data",data);
            console.log("This is the car",car);
          } catch (error) {
            console.log(error);
          }
        };
        fetchCarById();
      }, [id]);

      const [color, setColor] = useState();
      const [wheels, setWheels] = useState();
      const [interior, setInterior] = useState();
      const [exterior, setExterior] = useState();
      const [roof, setRoof] = useState();
      const [price, setPrice] = useState();
      const [carName, setCarName] = useState('');
    
      const [colorOptionsVisible, setColorOptionsVisible] = useState(false);
      const [wheelOptionsVisible, setWheelOptionsVisible] = useState(false);
      const [interiorOptionsVisible, setInteriorOptionsVisible] = useState(false);
      const [exteriorOptionsVisible, setExteriorOptionsVisible] = useState(false);
      const [roofOptionsVisible, setRoofOptionsVisible] = useState(false);
    
      const handleAspectButtonClick = (aspect) => {
        if (aspect === "color") {
          setColorOptionsVisible(!colorOptionsVisible);
          setWheelOptionsVisible(false);
          setInteriorOptionsVisible(false);
          setExteriorOptionsVisible(false);
          setRoofOptionsVisible(false);
        }
        if (aspect === "wheels") {
          setWheelOptionsVisible(!wheelOptionsVisible);
          setColorOptionsVisible(false);
          setInteriorOptionsVisible(false);
          setExteriorOptionsVisible(false);
          setRoofOptionsVisible(false);
        }
        if (aspect === "interior") {
          setInteriorOptionsVisible(!interiorOptionsVisible);
          setWheelOptionsVisible(false);
          setColorOptionsVisible(false);
          setExteriorOptionsVisible(false);
          setRoofOptionsVisible(false);
        }
        if (aspect === "exterior") {
          setExteriorOptionsVisible(!exteriorOptionsVisible);
          setWheelOptionsVisible(false);
          setInteriorOptionsVisible(false);
          setColorOptionsVisible(false);
          setRoofOptionsVisible(false);
        }
        if (aspect === "roof") {
          setRoofOptionsVisible(!roofOptionsVisible);
          setWheelOptionsVisible(false);
          setInteriorOptionsVisible(false);
          setExteriorOptionsVisible(false);
          setColorOptionsVisible(false);    
        }
      };
    
      const handleColorOptionClick = (optionName, optionPrice) => {
        let temp;
        if (optionName !== color) {
          // Cancel the price of the previous color
          console.log(
            "This is the price of the color: and color " +
              getColorPrice(color) +
              " " +
              color
          );
          temp = price - getColorPrice(color);
          setColor(optionName);
          setPrice(temp + optionPrice); // Increment price for the selected color
        }
      };
    
      // Helper functions to get the price of options (you can define your prices)
      const getColorPrice = (colorName) => {
        switch (colorName) {
          case "Red":
            return 500;
          case "Blue":
            return 600;
          case "White":
            return 700;
          case "Black":
            return 800;
          case "Silver":
            return 900;
          default:
            return 0; // Default price
        }
      };
    
      // Wheels
      const handleWheelOptionClick = (optionName, optionPrice) => {
        let temp;
        if (optionName !== wheels) {
          // Cancel the price of the previous wheels
          console.log(
            "This is the price of the wheels: and wheels " +
              getWheelsPrice(wheels) +
              " " +
              wheels
          );
          temp = price - getWheelsPrice(wheels);
          setWheels(optionName);
          setPrice(temp + optionPrice); // Increment price for the selected wheels
        }
      };
    
      const getWheelsPrice = (wheels) => {
        // Define the price of each type of wheel
        const wheelPrices = {
          "Aero Wheels": 1000,
          "Sport Wheels": 1200,
          "Uberturbine Wheels": 1500,
        };
        return wheelPrices[wheels] || 0; // Return the price or 0 if not found
      };
      // Interior
      const handleInteriorOptionClick = (optionName, optionPrice) => {
        let temp;
        if (optionName !== interior) {
          // Cancel the price of the previous interior
          console.log(
            "This is the price of the interior: and interior " +
              getInteriorPrice(interior) +
              " " +
              interior
          );
          temp = price - getInteriorPrice(interior);
          setInterior(optionName);
          setPrice(temp + optionPrice); // Increment price for the selected interior
        }
       
      };
    
      const getInteriorPrice = (interior) => {
        // Define the price of each type of interior
        const interiorPrices = {
          "Black Premium Interior": 2000,
          "White Premium Interior": 1800,
          "Wood Decor": 1500,
        };
        return interiorPrices[interior] || 0; // Return the price or 0 if not found
      };
    
      /** for exterior  */
      const handleExteriorOptionClick = (optionName, optionPrice) => {
        let temp;
        if (optionName !== exterior) {
          // Cancel the price of the previous exterior
          console.log(
            "This is the price of the exterior: and exterior " +
              getExteriorPrice(exterior) +
              " " +
              exterior
          );
          temp = price - getExteriorPrice(exterior);
          setExterior(optionName);
          setPrice(temp + optionPrice); // Increment price for the selected exterior
        }
    
      };
    
      const getExteriorPrice = (exterior) => {
        // Define the price of each type of exterior
        const exteriorPrices = {
          "Custom Paint": 2500,
          "Body Kit": 2000,
        };
        return exteriorPrices[exterior] || 0; // Return the price or 0 if not found
      };
    
      /***This is for roof  */
    
      const handleRoofOptionClick = (optionName, optionPrice) => {
        let temp;
        if (optionName !== roof) {
          // Cancel the price of the previous roof
          console.log(
            "This is the price of the roof: and roof " +
              getRoofPrice(roof) +
              " " +
              roof
          );
          temp = price - getRoofPrice(roof);
          setRoof(optionName);
          setPrice(temp + optionPrice); // Increment price for the selected roof
        }
        
      };
    
      const getRoofPrice = (roof) => {
        // Define the price of each type of roof
        const roofPrices = {
          "Panoramic Glass Roof": 1000,
          Sunroof: 800,
        };
        return roofPrices[roof] || 0; // Return the price or 0 if not found
      };
    
      const updatecar = (event) => {
        event.preventDefault()
    
        const car = {
          name: carName? carName: "Default",
          color: color? color : "Default",
          wheels:  wheels? wheels : "Default",
          interior: interior? interior : "Default",
          exterior: exterior? exterior : "Default",
          roof: roof ? roof : "Default",
          price: price? price : "Default",
        }
        console.log("This is the update car",car);
        const options = {
            method : 'PUT',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(car)
        }

        fetch(`http://localhost:3000/viewcars/${id}`, options)

        window.location = '/customcars'
       
       
      };

    
    

  return (
    <div className="EditCar">

<div className="button__box">
        <div>
          <button onClick={() => handleAspectButtonClick("color")}>
            Choose Color
          </button>
          
        </div>

        <div>
          <button onClick={() => handleAspectButtonClick("wheels")}>
            Choose Wheels
          </button>
          
        </div>
        <div>
          <button onClick={() => handleAspectButtonClick("interior")}>
            Choose Interior
          </button>
         
        </div>
        <div>
          <button onClick={() => handleAspectButtonClick("exterior")}>
            Choose Exterior Customization
          </button>
          
        </div>
        <div>
          <button onClick={() => handleAspectButtonClick("roof")}>
            Choose Roof Style
          </button>
          
        </div>
      </div>


      <div className="bottom__box"> 
        <div className="summary__box">
        <h2>{carName}</h2>
        <p>Exterior Color: {color ? color : "Default"}</p>
        <p>Wheel Design: {wheels ? wheels : "Default"}</p>
        <p>Interior: {interior ? interior : "Default"}</p>
        <p>Exterior Customization: {exterior ? exterior : "Default"}</p>
        <p>Roof Style: {roof ? roof : "Default"}</p>
        <p>Price: {price} </p>
      </div>
      {colorOptionsVisible && (
            <>
            <div className="big__box">
              <div className="option__box">
                <img
                  src= {red}
                  alt="Red Color"
                  onClick={() => handleColorOptionClick("Red", 500)}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src= {blue}
                  alt="Blue Color"
                  onClick={() => handleColorOptionClick("Blue", 600)}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src= {white}
                  alt="White Color"
                  onClick={() => handleColorOptionClick("White", 700)}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src= {black}
                  alt="Black Color"
                  onClick={() => handleColorOptionClick("Black", 800)}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src= {silver}
                  alt="Silver Color"
                  onClick={() => handleColorOptionClick("Silver", 900)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              </div>
            </>
          )}

      {wheelOptionsVisible && (
            <>
            <div className="big__box"> 
              <div className="option__box">
                <img
                  src= {aerowheels}
                  alt="Aero Wheels"
                  onClick={() =>
                    handleWheelOptionClick(
                      "Aero Wheels",
                      getWheelsPrice("Aero Wheels")
                    )
                  }
                  style={{ cursor: "pointer" }}
                />

                <img
                  src= {sportwheels}
                  alt="Sport Wheels"
                  onClick={() =>
                    handleWheelOptionClick(
                      "Sport Wheels",
                      getWheelsPrice("Sport Wheels")
                    )
                  }
                  style={{ cursor: "pointer" }}
                />

                <img
                  src= {uberturbinewheels}
                  alt="Uberturbine Wheels"
                  onClick={() =>
                    handleWheelOptionClick(
                      "Uberturbine Wheels",
                      getWheelsPrice("Uberturbine Wheels")
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
               <button onClick = {(e)=> setWheelOptionsVisible(false)}> 
                  Done
                </button>
              </div>
            </>
          )}

      {interiorOptionsVisible && (

        <div className="big__box">  
            <div className="option__box">
              <img
                src= {blackpremiuminterior}
                alt="Black Premium Interior"
                onClick={() =>
                  handleInteriorOptionClick(
                    "Black Premium Interior",
                    getInteriorPrice("Black Premium Interior")
                  )
                }
                style={{ cursor: "pointer" }}
              />

              <img
                src= {whitepremiuminterior}
                alt="White Premium Interior"
                onClick={() =>
                  handleInteriorOptionClick(
                    "White Premium Interior",
                    getInteriorPrice("White Premium Interior")
                  )
                }
                style={{ cursor: "pointer" }}
              />

              <img
                src= {wooddecor}
                alt="Wood Decor"
                onClick={() =>
                  handleInteriorOptionClick(
                    "Wood Decor",
                    getInteriorPrice("Wood Decor")
                  )
                }
                style={{ cursor: "pointer" }}
              />
            </div>
            <button onClick={(e) => setInteriorOptionsVisible(false)}>
                Done
               </button>
            </div>
          )}


      {exteriorOptionsVisible && (
        <div className="big__box"> 
            <div className="option__box">
              <img
                src= {custompaint}
                alt="Custom Paint"
                onClick={() =>
                  handleExteriorOptionClick(
                    "Custom Paint",
                    getExteriorPrice("Custom Paint")
                  )
                }
                style={{ cursor: "pointer" }}
              />

              <img
                src= {bodykit}
                alt="Body Kit"
                onClick={() =>
                  handleExteriorOptionClick(
                    "Body Kit",
                    getExteriorPrice("Body Kit")
                  )
                }
                style={{ cursor: "pointer" }}
              />
            </div>
            <button onClick={(e) => setExteriorOptionsVisible(false)}>
                Done
              </button>
            </div>
          )}

      {roofOptionsVisible && (

            <div className='big__box'>

              <div className="option__box">
                <img
                  src= {panoromicglassroof}
                  alt="Panoramic Glass Roof"
                  onClick={() =>
                    handleRoofOptionClick(
                      "Panoramic Glass Roof",
                      getRoofPrice("Panoramic Glass Roof")
                    )
                  }
                  style={{ cursor: "pointer" }}
                />

                <img
                  src= {sunroof}
                  alt="Sunroof"
                  onClick={() =>
                    handleRoofOptionClick("Sunroof", getRoofPrice("Sunroof"))
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
              <button onClick={(e) => setRoofOptionsVisible(false)}>
                Done
              </button>
            </div>
          )}




      </div>

      <button onClick={updatecar}>Update Car</button>

    </div>
   


  )
}

export default EditCar