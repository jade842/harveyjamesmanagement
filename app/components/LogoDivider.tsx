import Image from "next/image";

export default function LogoDivider() {
  return (
    <div className="flex items-center justify-center gap-6 py-8 bg-[#1F1F1C]">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4B680]/30" />
      <Image
        src="/logo-transparent.png"
        alt="Harvey James Management"
        width={80}
        height={40}
        className="h-8 w-auto object-contain opacity-60"
      />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4B680]/30" />
    </div>
  );
}
