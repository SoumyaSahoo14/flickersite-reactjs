import "../CSS/Picturecard.css"
import { usePictureContext } from "../contexts/PictureContext"

function Picturecard({picture}){
    const {isFavorite, addToFavorites, removeFromFavorites} = usePictureContext()
    const favorite = isFavorite(picture.id)

    const handleFavoriteClick = () => {
        if (favorite) {
            removeFromFavorites(picture.id);
        } else {
            addToFavorites(picture);
        }
    };
    return<div className="picture-card">
        <div className="picture-poster">
            <img src={`https://image.tmdb.org/t/p/w500${picture.poster_path}`}alt ={picture.title}/>
            <div className="picture-overlay">
                <button className="favorite-btn" onClick={handleFavoriteClick}>
                {favorite ? "❤️" : "🤍"}
                </button>

            </div>         

        </div>
        <div className="picture-info">
            <h3>{picture.title}</h3>
            <p>{picture.release_date?.split("-")[0]}</p>
        </div>

    </div>

}
export default Picturecard