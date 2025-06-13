import { createContext,useState,useContext,useEffect } from "react";

const PictureContext = createContext();

export const usePictureContext =()=> useContext(PictureContext);

export const PictureProvider = ({children})=>{
    const [favorites, setFavorites] = useState([]);
    useEffect(()=>{
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    },[]);

    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites));
    },[favorites]);

    const addToFavorites =(picture)=>{
        setFavorites(prev=>[...prev, picture]);
    };

    const removeFromFavorites =(pictureId)=>{
        setFavorites(prev => prev.filter(picture => picture.id !==pictureId));
    };
    const isFavorite = (pictureId)=>{
        return favorites.some(picture => picture.id === pictureId);
    };
    const value ={
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }


    return(
        <PictureContext.Provider value ={value}>
           {children}
        </PictureContext.Provider>
    );
};
