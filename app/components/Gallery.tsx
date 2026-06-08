import Image from "next/image";

const images = [
  {
    src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (112 of 147).jpg",
    alt: "Fashion event runway",
    position: "object-center",
  },
  {
    src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (90 of 147).jpg",
    alt: "Fashion models",
    position: "object-center",
  },
  {
    src: "/Photo 16-9-2022, 7 25 26 pm.jpg",
    alt: "Behind the scenes",
    position: "object-center",
  },
  {
    src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (49 of 147) (2).jpg",
    alt: "Models backstage",
    position: "object-[center_90%]",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#F4F0E4] pb-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        {images.map((img) => (
          <div key={img.src} className="relative h-64 lg:h-80 overflow-hidden group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover ${img.position} transition-transform duration-700 group-hover:scale-105`}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-[#1F1F1C]/10 group-hover:bg-[#1F1F1C]/0 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
