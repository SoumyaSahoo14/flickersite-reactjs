import "../CSS/Favorites.css"
import { usePictureContext } from "../contexts/PictureContext";
import Picturecard from "../Components/Picturecard";
function Favorites(){
    const {favorites} = usePictureContext();
    
    if(favorites && favorites.length>0){
        return (
            <div className="favorites">
                <h2>
                    Your Favorites
                </h2>
            
                <div className="pictures-grid">
                   {favorites.map(
                     (picture) => (                      
                       <Picturecard picture={picture} key={picture.id} />
                    ))}
                </div>
            </div>
        );
    }


    return(
        <div className="favorites-empty">
           <h2>No Favorite Pictures Yet</h2>
           <p>Start adding pictures to your favorite and they will appear here</p>
        </div>
    );
}
export default Favorites;