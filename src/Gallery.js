import { useEffect } from "react";
import fjGallery from "flickr-justified-gallery";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const Gallery = (props) => {

    useEffect(() => {

        // --- Flickr Justified Gallery ---
        fjGallery(document.querySelectorAll('.fj-gallery'), {
            itemSelector: '.fj-gallery-item',
            gutter: { horizontal: 20, vertical: 30 }
        });
    
        // --- PhotoSwipe Lightbox ---
        let lightbox = new PhotoSwipeLightbox({
          gallery: '#gallery',
          children: 'a',
          pswpModule: () => import('photoswipe')
        });

        lightbox.init();

        return () => {
            // --- Flickr Justified Gallery ---
            fjGallery(document.querySelectorAll('.fj-gallery'), 'destroy');

            // --- PhotoSwipe Lightbox ---
            lightbox.destroy();
            lightbox = null;
        };
      }, []);
    
    
    return (
        <div id="gallery" className="fj-gallery pswp-gallery">
            {props.images.map(image => (
                    <a
                        href={process.env.PUBLIC_URL + image.src}
                        data-pswp-width={image.width}
                        data-pswp-height={image.height}
                        target="_blank"
                        rel="noreferrer"
                        className="gallery-item fj-gallery-item"
                        key={image.alt}
                    >
                        <img src={process.env.PUBLIC_URL + image.thumb} alt={image.alt} height="300" />
                    </a>
            ))}
        </div>
    );
};
  
  export default Gallery;