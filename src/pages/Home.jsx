import coverImage from "../assets/morning-cover.png";

function Home(){
    return(
        <>
        <div
        className="cover-page"
        style={{
            backgroundImage:`url(${coverImage})`
        }}
        >
            <nav className="navbar">
            <a href="/">Home</a>
            <a href="/menu">Menu</a> 
            <a href="#about">About</a> 
            <a href="#location">Location</a>  
            <a href="#contact">Contact</a>

            </nav>
            
            
          
             
            </div>
        
        
        <div id="about">
        <h2>About Morning Glory Bites</h2>  
        <p>
        Our services include: Fresh Hot Coffee, Fresh Ndumas and Fresh Boiled Eggs. Welcome all and enjoy the best breakfast meals served with love💖.    
        </p>  

        </div>

        <div id="location">
                <h2>Location</h2>
                <p>
                Jomoko Footbridge along Thika-Nairobi Super Highway.    
                </p>

            </div>

            <div id="contact">
                <h2>Contact</h2>
                <p>
                WhatsApp: 0745406292    
                </p>

            </div>

        
        </>
    )
}

export default Home;