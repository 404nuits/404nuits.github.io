import Gallery from "../Gallery";
import files from "../jsons/photos.json";
import { useEffect } from "react";


const Photos = () => {
  useEffect(() => {
    document.title = '404nuits - Photos';
  }, []);
    return <Gallery images={files} />;
  };
  
  export default Photos;