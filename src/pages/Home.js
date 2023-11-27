import { Link } from "react-router-dom";
import { useEffect } from "react";

import photosImage from "../images/photos_tile.png";
import designsImage from "../images/designs_tile.png";

const Home = () => {
  useEffect(() => {
    document.title = "404nuits - Home";
  }, []);

  return (
    <>
      <div className="row mb">
        <div className="tile from_bottom delay-1">
          <Link to="/photos" class="row">
            <span>PHOTOGRAPHY</span>
            <img
              alt="photos background"
              className="background"
              src={photosImage}
            />
          </Link>
        </div>
      </div>
      <div className="row mb">
        <div className="tile from_bottom delay-2">
          <Link to="/designs" class="row">
            <span>DESIGNS</span>
            <img
              alt="design background"
              className="background"
              src={designsImage}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
