import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Leaf className="text-memorial-gold w-8 h-8 mb-4" />

        <h2 className="text-2xl font-serif tracking-widest uppercase mb-6">
          Eberechukwu Family
        </h2>

        <div className="w-32 h-px bg-memorial-gold/50 mb-6" />

        <p className="text-gray-400 font-serif italic text-lg text-center">
          In Loving Memory | Always in Our Hearts
        </p>

        <div className="mt-12 text-gray-500 text-[10px] tracking-[0.2em] uppercase">
          Eberechukwu Family Memorial. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
