import locationImage from "../assets/location.jpeg";
function Location(){

    return(
        <div>
        <h1>Our Location</h1> 

        <img
        src={locationImage}
        className="location-image"
        alt="Morning Glory Bites Location"
        />   
        <p>
            You can find us at Jomoko Footbridge along Thika-Nairobi
            Super Highway.
        </p>

        <a
        className="location-button"
        href="https://www.google.com/maps/search/?api=1&query=
        Jomoko+Footbridge+Thika+Nairobi+Super+Highway"
        target="_blank">
            Open Google Maps

        </a>
        
        </div>
    )
}

export default Location;