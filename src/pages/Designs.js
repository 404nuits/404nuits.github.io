import Gallery from "../Gallery";
import files from "../jsons/designs.json";
import { useEffect } from "react";


const Designs = () => {
    useEffect(() => {
        document.title = '404nuits - Designs';
      }, []);

    return <Gallery images={files} />;
  };
  
  export default Designs;