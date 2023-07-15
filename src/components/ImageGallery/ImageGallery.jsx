import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, image }) => {
        return <ImageGalleryItem key={id} image={image} />;
      })}
    </ul>
  );
};
