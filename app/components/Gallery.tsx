import Image from "next/image";

const images = [
  { src: "/20260321-05 (1).JPG", alt: "AFC Women's Asian Cup", aspect: "w-64" },
  { src: "/TFF26.webp", alt: "Tasmanian Fashion Festival", aspect: "w-56" },
  { src: "/TRC_Fashion_0009 (1).jpg", alt: "Tasmanian Racing Club", aspect: "w-72" },
  { src: "/KatieWindow-11 (3).jpg", alt: "Model", aspect: "w-56" },
  { src: "/WhatsApp Image 2026-03-27 at 13.09.06 (3).jpeg", alt: "AFC brand ambassadors", aspect: "w-64" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (112 of 147).jpg", alt: "Fashion runway", aspect: "w-56" },
  { src: "/20260321-11.JPG", alt: "AFC Women's Asian Cup", aspect: "w-64" },
  { src: "/RubyRyanPhoto_0029.jpg", alt: "Harvey James Management", aspect: "w-72" },
  { src: "/TRC_Fashion_0082.jpg", alt: "Tasmanian Racing Club", aspect: "w-56" },
  { src: "/Katie81 (5).jpg", alt: "Model", aspect: "w-48" },
  { src: "/CalHadaway_Riv_HarveyJames_2021 (1) (5).jpg", alt: "Harvey James Management", aspect: "w-64" },
  { src: "/tff.jpg", alt: "Tasmanian Fashion Festival", aspect: "w-56" },
  { src: "/WhatsApp Image 2026-03-27 at 13.37.50 (3).jpeg", alt: "AFC Fan Zone", aspect: "w-64" },
  { src: "/Harvey-James-Workshop  (23) (5).jpg", alt: "Harvey James Workshop", aspect: "w-72" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (90 of 147).jpg", alt: "Fashion models", aspect: "w-56" },
  { src: "/TRC_Fashion_0074.jpg", alt: "Tasmanian Racing Club", aspect: "w-56" },
  { src: "/IL03 (1) (2).jpg", alt: "Harvey James Management", aspect: "w-64" },
  { src: "/CalHadaway_Riv_HarveyJames_2021 (2) (5).jpg", alt: "Harvey James Management", aspect: "w-56" },
  { src: "/_MG_9971.jpg", alt: "Luxury event", aspect: "w-64" },
  { src: "/Loic 3 (1).jpg", alt: "Model", aspect: "w-48" },
  { src: "/20260321-14.JPG", alt: "AFC Women's Asian Cup", aspect: "w-72" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (49 of 147) (2).jpg", alt: "Models backstage", aspect: "w-56" },
  { src: "/Harvey-James-Workshop  (38) (4) (1).jpg", alt: "Harvey James Workshop", aspect: "w-64" },
  { src: "/Loic 6 (1).jpg", alt: "Model", aspect: "w-48" },
  { src: "/CalHadaway_Riv_HarveyJames_2021 (3) (3) (1).jpg", alt: "Harvey James Management", aspect: "w-64" },
];

export default function Gallery() {
  return (
    <section className="bg-[#F4F0E4] py-12 overflow-hidden">
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
