import Gallery from "../Gallery";

import config from "../config.json";

import { useEffect, useState } from "react";

const Designs = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    document.title = "404nuits - Designs";

    fetch(config.designs_jsonpath)
      .then((rep) => rep.json())
      .then((data) => setFiles(data));
  }, []);

  return <Gallery images={files} basepath={config.baseurl} />;
};

export default Designs;
