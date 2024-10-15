import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={css.container}>
      <ul className={css.imgList}>
        {images.length > 0 ? (
          images.map((image) => (
            <li key={image.id} onClick={() => onImageClick(image.urls.regular)}>
              <ImageCard image={image} />
            </li>
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
};

export default ImageGallery;
