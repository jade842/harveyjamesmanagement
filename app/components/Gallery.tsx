import Image from "next/image";

const images = [
  { src: "/TRC_Fashion_0009 (1).jpg", alt: "Tasmanian Racing Club", aspect: "w-72" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (112 of 147).jpg", alt: "Fashion runway", aspect: "w-56" },
  { src: "/Lasca New Sonia PORTFOLIO.jpg", alt: "Fashion model", aspect: "w-48" },
  { src: "/WhatsApp Image 2026-03-27 at 13.09.06 (3).jpeg", alt: "AFC brand ambassadors", aspect: "w-64" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (90 of 147).jpg", alt: "Fashion models", aspect: "w-56" },
  { src: "/Photo 16-9-2022, 7 25 26 pm.jpg", alt: "Backstage", aspect: "w-72" },
  { src: "/WhatsApp Image 2026-03-27 at 13.37.50 (3).jpeg", alt: "AFC mascot", aspect: "w-48" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (49 of 147) (2).jpg", alt: "Models backstage", aspect: "w-56" },
];

export default function Gallery() {
  return (
    <section className="bg-[#1F1F1C] py-12 overflow-hidden">
      <div className="inline-flex gap-3 animate-marquee whitespace-nowrap">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className={`relative ${img.aspect} h-80 shrink-0 overflow-hidden`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes="300px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
