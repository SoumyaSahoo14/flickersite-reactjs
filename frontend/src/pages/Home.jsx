import PictureCard from "../Components/Picturecard"
import { useState, useEffect } from "react";
import {searchPictures, getPopularPictures} from "../services/api";
import "../CSS/Home.css"
function Home() {
    const [searchQuery, setSearchQuery]= useState("");

    const [pictures, setPictures] = useState([]);
    const [error, setError]= useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const loadPopularPictures = async()=>{
            try{
                const popularPictures = await getPopularPictures()
                setPictures(popularPictures)
            } catch(err){
                console.log(err);
                
                setError("failed to load pictures..")
            }
            finally{}
            setLoading(false)
        }
        loadPopularPictures()
    },[])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchPictures(searchQuery)
            setPictures(searchResults)
            setError(null)

        } catch (err) {
            console.log(err);

            setError("failed to search pictures..")

        } finally {
            setLoading(false)
        }

      

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

            {error && <div className="error-message">{error}</div>}

            {loading? (
                <div className="loading">Loading..</div>
            ):(    
              <div className="pictures-grid">
                {pictures.map(
                 (picture) => 
                   picture.title.toLowerCase().startsWith(searchQuery)&&(
                    <PictureCard picture={picture} key={picture.id} />
                   )
                )}
            </div>
            )}
        </div>
    );
}
export default Home;