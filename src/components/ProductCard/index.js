import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ id, image, name, shortDescription, price }) => {
  return (
    <Link href={`/menu/${id}`}>
      <a className="text-center no-hover mb-10 md:mb-20 block">
        <div className="relative mb-12" style={{ height: "600px", zIndex: 1 }}>
          <Image
            src={image}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            quality="100"
          />
        </div>
        <h3 className="text-2xl mb-2">{name}</h3>
        <p className="mb-2">{shortDescription}</p>
        <p>{price}</p>
      </a>
    </Link>
  );
};

export default ProductCard;
