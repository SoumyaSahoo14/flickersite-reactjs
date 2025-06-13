import "../CSS/Picturecard.css"

function Picturecard({picture}){

    function onFavoriteclick(){
        alert("clicked")
    }
    return<div className="picture-card">
        <div className="picture-poster">
            <img src={`https://image.tmdb.org/t/p/w500${picture.poster_path}`}alt ={picture.title}/>
            <div className="picture-overlay">
                <button className="favorite-btn" onClick={onFavoriteclick}>❤️</button>

            </div>         

        </div>
        <div className="picture-info">
            <h3>{picture.title}</h3>
            <p>{picture.release_date?.split("-")[0]}</p>
        </div>

    </div>

}
export default Picturecard