import PictureCard from "../Components/Picturecard"
import { useState } from "react";
function Home() {
    const [searchQuery, setSearchQuery]= useState("");

    const pictures = [
        { id: 1, title: "Fast & Furious", release_date: "2022" },
        { id: 2, title: "Terminator", release_date: "2022" },
        { id: 3, title: "John wick", release_date: "2022" },
    ];
    const handleSearch =(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text " 
                placeholder="Search for pictures.." 
                className="search-input"
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="pictures-grid">
                {pictures.map(
                 (picture) => 
                   picture.title.toLowerCase().startsWith(searchQuery)&&(
                    <PictureCard picture={picture} key={picture.id} />
                   )
                )}
            </div>

        </div>
    );
}
export default Home;