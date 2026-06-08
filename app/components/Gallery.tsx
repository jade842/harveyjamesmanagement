import Image from "next/image";

const images = [
  { src: "/TRC_Fashion_0009 (1).jpg", alt: "Tasmanian Racing Club", aspect: "w-72" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (112 of 147).jpg", alt: "Fashion runway", aspect: "w-56" },
  { src: "/IL03 (1) (2).jpg", alt: "Harvey James Management", aspect: "w-64" },
  { src: "/Lasca New Sonia PORTFOLIO.jpg", alt: "Fashion model", aspect: "w-48" },
  { src: "/WhatsApp Image 2026-03-27 at 13.09.06 (3).jpeg", alt: "AFC brand ambassadors", aspect: "w-64" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (90 of 147).jpg", alt: "Fashion models", aspect: "w-56" },
  { src: "/Photo 16-9-2022, 7 25 26 pm.jpg", alt: "Backstage", aspect: "w-72" },
  { src: "/Photo 19-9-2022, 9 49 16 am (1).jpg", alt: "Event talent", aspect: "w-56" },
  { src: "/WhatsApp Image 2026-03-27 at 13.37.50 (3).jpeg", alt: "AFC mascot", aspect: "w-48" },
  { src: "/_MG_9870.jpg", alt: "Event talent", aspect: "w-64" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (49 of 147) (2).jpg", alt: "Models backstage", aspect: "w-56" },
  { src: "/_MG_9971.jpg", alt: "Event talent", aspect: "w-64" },
  { src: "/Jypsea 76.jpg", alt: "Model", aspect: "w-48" },
  { src: "/Photo 12-6-21, 4 56 57 pm.jpg", alt: "Event talent", aspect: "w-72" },
  { src: "/Katie81 (5).jpg", alt: "Model", aspect: "w-56" },
  { src: "/Pageant Girls 2016.jpg", alt: "Pageant talent", aspect: "w-64" },
  { src: "/KatieWindow-11 (3).jpg", alt: "Model", aspect: "w-64" },
  { src: "/Photo 16-9-2022, 7 35 25 pm.jpg", alt: "Event backstage", aspect: "w-56" },
  { src: "/Photo 12-6-21, 5 25 04 pm.jpg", alt: "Event talent", aspect: "w-72" },
  { src: "/Photo 16-9-2022, 7 35 27 pm.jpg", alt: "Event backstage", aspect: "w-48" },
  { src: "/On memory 2021 flowers.jpg", alt: "Event detail", aspect: "w-56" },
  { src: "/Photo 5-10-21, 1 50 19 pm.jpg", alt: "Event", aspect: "w-64" },
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
