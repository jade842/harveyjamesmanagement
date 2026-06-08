import Image from "next/image";

export default function LogoDivider({ dark = true }: { dark?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-6 py-8 ${dark ? "bg-[#1F1F1C]" : "bg-[#F4F0E4]"}`}>
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${dark ? "to-[#D4B680]/30" : "to-[#D4B680]/40"}`} />
      <Image
        src={dark ? "/logo-transparent.png" : "/logo-dark.png"}
        alt="Harvey James Management"
        width={80}
        height={40}
        className="h-8 w-auto object-contain opacity-50"
      />
      <div className={`h-px flex-1 bg-gradient-to-l from-transparent ${dark ? "to-[#D4B680]/30" : "to-[#D4B680]/40"}`} />
    </div>
  );
}
