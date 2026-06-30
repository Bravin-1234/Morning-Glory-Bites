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
            <a href="/about">About</a> 
            <a href="/location">Location</a>  
            <a href="/contact">Contact</a>

            </nav>
            
            
          
             
            </div>

        
        </>
    )
}

export default Home;