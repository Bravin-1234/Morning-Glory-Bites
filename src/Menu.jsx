import React, { useState } from "react";
import coffeeImg from "./assets/coffee.jpeg";
import ndumaImg from "./assets/nduma.jpeg";
import eggsImg from "./assets/eggs.jpeg";
import locationImg from "./assets/location.jpeg";

import "./Menu.css";

const Menu = () => {
    const[orderedItem, setOrderedItem] = useState(null);
    const items = [
        {
            name: "Coffee",
            price: "Ksh 20 - 30",
            description: "Hot brewed coffee served fresh",
            image: coffeeImg,
            available: true,
            link:
            "https://wa.me/254745406292?text=Hi%20I%20want%20to%20order%20Coffee"
            
        },

        {
            name: "Nduma (Arrow Roots)",
            price: "Ksh 30 - 50",
            description: " Traditional boiled nduma served fresh and hot",
            image: ndumaImg,
            available: false,
            link:
            "https://wa.me/254745406292?text=Hi%20I%20want%20to%20order%20Nduma"
            
        },

        {
            name: "Boiled Eggs",
            price: "Ksh 30 each",
            description: "Fresh Boiled Eggs served warm",
            image: eggsImg,
            available: true,
            link:
            "https://wa.me/254745406292?text=Hi%20I%20want%20to%20order%20Eggs"
            
           
        },
    ];

    return (
        <div className="menu-container">
            <div className="hero-section">
                <h1 className="glow-bright">Morning Glory bites🌄☕</h1>
            <p>Get Fresh coffee, nduma and eggs served with love to experience a fantabulous day💖</p>
            </div>
            
             <div className="social-media">
        <h2>Contact me on:</h2>
        <div className="social-links">
            <a href="https://wa.me/254745406292" target="_blank">WhatsApp</a>
            <a href="https://tiktok.com/@bravinmurithi" target="_blank">Tiktok</a>
            <a href="https://facebook.com/Bravin Murithi" target="_blank">Facebook</a>
        </div>

        <div className="location-section">
            <h3>📍 Location</h3>
            <p>You can find me at Jomoko Footbridge(Along Thika-Nairobi super highway) as early as 6am. Welcome and enjoy ur daily breakfast here😂👌</p>
            <img 
            src={locationImg}
            alt="Morning Glory Bites Location"
            />
        </div>
        </div>

            <div className="menu-grid">
               
         {items.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-content">
                          <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <h3>{item.price}</h3>

                        {
                        item.available ?  
                        <a
                        className="order-btn"
                        href={item.link}
                        target="_blank"
                        onClick={() => setOrderedItem(item.name)}
                        >
                        Order Now    
                        </a>
                        :

                        <p className="unavailable">
                        ❌ {item.name} is currently unavailable    
                        </p>

                        } 

                        {
                        orderedItem === item.name &&
                        
                        <div className ="order-message">
                        <p>
                        ✅ {item.name} 0rder started    
                        </p>
                        
                        <button
                        className="cancel-btn"
                        onClick={() => setOrderedItem(null)}
                        >
                        Cancel Order    

                        </button>

                        </div>
                        }

                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    
              
    );
    
    
};

export default Menu;