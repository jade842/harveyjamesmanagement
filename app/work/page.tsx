import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { projects } from "@/app/data/projects";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#1F1F1C] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-40 pb-24">

          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4B680]" />
              <span className="text-[10px] font-medium tracking-[0.4em] text-[#D4B680] uppercase">
                Selected Work
              </span>
            </div>
            <h1
              className="text-5xl lg:text-7xl font-bold text-[#F4F0E4] leading-tight"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Every Brief.
              <br />
              <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>
                Delivered.
              </span>
            </h1>
          </div>

          <div className="divide-y divide-[#D4B680]/15">
            {projects.map((project) => (
              <div key={project.title} className="group py-10 grid md:grid-cols-[1fr_auto] gap-8 items-start">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(project.tags ?? []).map((tag, i) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-medium tracking-widest uppercase px-2.5 py-0.5 ${
                          i === 0 ? "bg-[#D4B680] text-[#111111]" : "border border-[#D4B680]/40 text-[#a89f8c]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2
                    className="text-3xl font-bold text-[#F4F0E4] mb-1 group-hover:text-[#D4B680] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-[10px] font-medium tracking-widest uppercase text-[#D4B680] mb-4">{project.subtitle}</p>
                  <p className="text-[#a89f8c] text-sm leading-relaxed mb-4">{project.scope}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.talentCategories.map((cat) => (
                      <span key={cat} className="text-[10px] tracking-wide text-[#a89f8c] border border-[#D4B680]/30 px-2 py-0.5">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {project.image && (
                  <div className="relative w-48 h-64 shrink-0 overflow-hidden hidden md:block">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${project.imagePosition}`}
                      sizes="192px"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#D4B680]/20 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/#contact"
              className="inline-block px-8 py-3.5 text-xs font-medium tracking-widest uppercase bg-[#D4B680] text-[#111111] hover:bg-[#e8cfa0] transition-all duration-200"
            >
              Start the Conversation
            </Link>
            <Link
              href="/"
              className="inline-block px-8 py-3.5 text-xs font-medium tracking-widest uppercase border border-[#D4B680]/40 text-[#a89f8c] hover:border-[#D4B680] hover:text-[#D4B680] transition-all duration-200"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
