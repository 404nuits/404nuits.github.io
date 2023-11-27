import Gallery from "../Gallery";

import config from "../config.json";

import { useEffect, useState } from "react";

const Photos = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    document.title = "404nuits - Photos";

    fetch(config.photos_jsonpath)
      .then((rep) => rep.json())
      .then((data) => setFiles(data));
  }, []);

  return <Gallery images={files} basepath={config.baseurl} />;
};

export default Photos;
