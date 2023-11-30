import { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const Item = (props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, props.timer);
    return () => clearTimeout(timer);
  }, [props.timer]);

  return isShown ? (
    <a
      href={props.basepath + props.image.src + "?raw=true"}
      data-pswp-width={props.image.width}
      data-pswp-height={props.image.height}
      target="_blank"
      rel="noreferrer"
      style={{
        height: props.height + "px",
        width: (props.height * props.image.width) / props.image.height,
      }}
    >
      <img
        className="galleryItem"
        src={props.basepath + props.image.thumb + "?raw=true"}
        alt={props.image.alt}
        style={{ height: props.height + "px" }}
      />
    </a>
  ) : null;
};

const Gallery = (props) => {
  useEffect(() => {
    // --- PhotoSwipe Lightbox ---
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
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
        <Item
          image={image}
          basepath={props.basepath}
          height="300"
          key={index}
          timer={index * 100}
        />
      ))}
    </div>
  );
};

export default Gallery;
