import Image from "next/image";

const images = [
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (112 of 147).jpg", alt: "Fashion runway", aspect: "w-56" },
  { src: "/20260321-05 (1).JPG", alt: "AFC Women's Asian Cup", aspect: "w-64" },
  { src: "/TRC_Fashion_0009 (1).jpg", alt: "Tasmanian Racing Club", aspect: "w-72" },
  { src: "/Jypsea 76.jpg", alt: "Model", aspect: "w-48" },
  { src: "/WhatsApp Image 2026-03-27 at 13.09.06 (3).jpeg", alt: "AFC brand ambassadors", aspect: "w-64" },
  { src: "/Photo 16-9-2022, 7 25 26 pm.jpg", alt: "Backstage", aspect: "w-72" },
  { src: "/Katie81 (5).jpg", alt: "Model", aspect: "w-56" },
  { src: "/20260321-11.JPG", alt: "AFC Women's Asian Cup", aspect: "w-56" },
  { src: "/RubyRyanPhoto_0029.jpg", alt: "Harvey James Management", aspect: "w-72" },
  { src: "/Lasca New Sonia PORTFOLIO.jpg", alt: "Fashion model", aspect: "w-48" },
  { src: "/TRC_Fashion_0074.jpg", alt: "Tasmanian Racing Club", aspect: "w-56" },
  { src: "/CalHadaway_Riv_HarveyJames_2021 (1) (5).jpg", alt: "Harvey James Management", aspect: "w-64" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (90 of 147).jpg", alt: "Fashion models", aspect: "w-56" },
  { src: "/WhatsApp Image 2026-03-27 at 13.37.50 (3).jpeg", alt: "AFC mascot", aspect: "w-48" },
  { src: "/Photo 12-6-21, 5 25 04 pm.jpg", alt: "Event talent", aspect: "w-72" },
  { src: "/KatieWindow-11 (3).jpg", alt: "Model", aspect: "w-64" },
  { src: "/201600703_HarveyJames_01713.jpg", alt: "Harvey James Management", aspect: "w-72" },
  { src: "/Pageant Girls 2016.jpg", alt: "Pageant talent", aspect: "w-64" },
  { src: "/_MG_9870.jpg", alt: "Event talent", aspect: "w-56" },
  { src: "/IslandMagCover (1).jpg", alt: "Island Magazine Cover", aspect: "w-48" },
  { src: "/Loic 3 (1).jpg", alt: "Model", aspect: "w-56" },
  { src: "/Harvey-James-Workshop  (23) (5).jpg", alt: "Harvey James Workshop", aspect: "w-64" },
  { src: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (49 of 147) (2).jpg", alt: "Models backstage", aspect: "w-56" },
  { src: "/Solomon Islands Campaign 2016.jpg", alt: "Campaign", aspect: "w-64" },
  { src: "/Katie-31 (3).jpg", alt: "Model", aspect: "w-48" },
  { src: "/Photo 12-6-21, 4 56 57 pm.jpg", alt: "Event talent", aspect: "w-72" },
  { src: "/CalHadaway_Riv_HarveyJames_2021 (3) (3) (1).jpg", alt: "Harvey James Management", aspect: "w-64" },
  { src: "/TRC_Fashion_0082.jpg", alt: "Tasmanian Racing Club", aspect: "w-56" },
  { src: "/Loic 4 (1).jpg", alt: "Model", aspect: "w-64" },
  { src: "/File 10-6-2025, 6 43 43 pm.jpeg", alt: "Event talent", aspect: "w-56" },
  { src: "/385_HiRes.jpg", alt: "Harvey James Management", aspect: "w-48" },
  { src: "/_MG_9971.jpg", alt: "Event talent", aspect: "w-64" },
  { src: "/Harvey-James-Workshop  (38) (4) (1).jpg", alt: "Harvey James Workshop", aspect: "w-72" },
  { src: "/647 (1).jpg", alt: "Event talent", aspect: "w-56" },
  { src: "/IL03 (1) (2).jpg", alt: "Harvey James Management", aspect: "w-64" },
  { src: "/Photo 19-9-2022, 9 49 16 am (1).jpg", alt: "Event talent", aspect: "w-56" },
  { src: "/Loic 6 (1).jpg", alt: "Model", aspect: "w-48" },
  { src: "/CalHadaway_Riv_HarveyJames_2021 (2) (5).jpg", alt: "Harvey James Management", aspect: "w-56" },
  { src: "/Photo 30-9-21, 9 54 49 am.jpg", alt: "Event", aspect: "w-64" },
  { src: "/715 (4) (1).jpg", alt: "Event talent", aspect: "w-56" },
  { src: "/WhatsApp Image 2026-03-27 at 13.38.24 (1).jpeg", alt: "AFC", aspect: "w-64" },
  { src: "/On memory 2021 flowers.jpg", alt: "Event detail", aspect: "w-48" },
  { src: "/201600703_HarveyJames_01818 (1).jpg", alt: "Harvey James Management", aspect: "w-72" },
  { src: "/Snapchat-1254401825.jpg", alt: "Event", aspect: "w-48" },
  { src: "/Photo 16-9-2022, 7 35 25 pm.jpg", alt: "Event backstage", aspect: "w-56" },
  { src: "/CalHadaway_Riv_HarveyJames_2021 (9) (1) (2) (1).jpg", alt: "Harvey James Management", aspect: "w-64" },
  { src: "/IMG_8797 (2).jpg", alt: "Event", aspect: "w-56" },
  { src: "/On memory 2021 flowers 2.jpg", alt: "Event detail", aspect: "w-48" },
  { src: "/CD8D7B54-8E63-421A-BC35-9DA1C11926A0 (1).jpeg", alt: "Event", aspect: "w-64" },
  { src: "/Photo 16-9-2022, 7 35 27 pm.jpg", alt: "Event backstage", aspect: "w-56" },
  { src: "/IMG_20210611_141456.jpg", alt: "Event talent", aspect: "w-72" },
  { src: "/Snapchat-2023796246.jpg", alt: "Event", aspect: "w-48" },
  { src: "/IMG_6728 (1).JPG", alt: "Event", aspect: "w-56" },
  { src: "/Photo 12-6-21, 5 22 03 pm.jpg", alt: "Event talent", aspect: "w-64" },
  { src: "/IMG_6729 (1).JPG", alt: "Event", aspect: "w-48" },
  { src: "/Photo 5-10-21, 1 50 19 pm.jpg", alt: "Event", aspect: "w-56" },
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
