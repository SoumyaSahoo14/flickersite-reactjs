import PictureCard from "../Components/Picturecard"

function Home() {

    const pictures = [
        { id: 1, title: "Fast & Furious", release_date: "2022" },
        { id: 2, title: "Terminator", release_date: "2022" },
        { id: 3, title: "John wick", release_date: "2022" },


    ]
    return <div className="home">
        <div className="pictures-grid">
            {pictures.map((picture) => (
                <PictureCard picture={picture} key={picture.id} />
                ))}
        </div>

    </div>
}