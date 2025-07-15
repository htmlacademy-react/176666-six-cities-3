import OfferImage from './offer-image';

type OfferImageListProps = {
  images: string[];
}


export default function OfferImageList ({images}: OfferImageListProps) {
  return (
    <div className="offer__gallery">
      {images && images.map((image) => <OfferImage key={image} image={image}/>)}
    </div>
  );
}
