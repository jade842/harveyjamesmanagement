import Image from "next/image";

export default function LogoDivider({ dark = true }: { dark?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-8 py-14 ${dark ? "bg-[#1F1F1C]" : "bg-[#F4F0E4]"}`}>
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${dark ? "to-[#D4B680]/40" : "to-[#D4B680]/50"}`} />
      <Image
        src={dark ? "/logo-transparent.png" : "/logo-dark.png"}
        alt="Harvey James Management"
        width={120}
        height={60}
        className="h-14 w-auto object-contain opacity-60"
      />
      <div className={`h-px flex-1 bg-gradient-to-l from-transparent ${dark ? "to-[#D4B680]/40" : "to-[#D4B680]/50"}`} />
    </div>
  );
}
