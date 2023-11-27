import { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const Gallery = (props) => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    // --- PhotoSwipe Lightbox ---
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      preload: [1, 4],
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      // --- PhotoSwipe Lightbox ---
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div id="gallery">
      {props.images.map((image, index) => (
        <a
          href={props.basepath + image.src + "?raw=true"}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noreferrer"
          key={index}
          style={{
            height: "300px",
            width: (300 * image.width) / image.height,
          }}
        >
          <img
            src={props.basepath + image.thumb + "?raw=true"}
            alt={image.alt}
            style={{ height: "300px" }}
            onLoad={() => {
              let temp = boxes;
              let ratio = Math.round((image.width / image.height) * 10) / 10;
              temp.push(ratio);
              setBoxes(temp);
            }}
          />
        </a>
      ))}
    </div>
  );
};

export default Gallery;
