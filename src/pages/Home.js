import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
      document.title = '404nuits - Home';
    }, []);


    return (
      <>
      <div className="row mb">
        <div className="tile from_bottom delay-1">
          <Link to="/photos" class="row">
            <span>PHOTOGRAPHY</span>
            <img className="background" src={process.env.PUBLIC_URL + "/images/photos_tile.png"} />
          </Link>
        </div>
      </div>
      <div className="row mb">
        <div className="tile from_bottom delay-2">
          <Link to="/designs" class="row">
            <span>DESIGNS</span>
            <img className="background" src={process.env.PUBLIC_URL + "/images/designs_tile.png"} />
          </Link>
        </div>
      </div>
      </>
    );
  };
  
  export default Home;