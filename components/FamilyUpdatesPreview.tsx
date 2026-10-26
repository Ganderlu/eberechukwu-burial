"use client";

import Link from "next/link";
import { Megaphone, ChevronRight } from "lucide-react";

export default function FamilyUpdatesPreview() {
  return (
    <section className="bg-background py-16 border-b border-memorial-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-warm-ivory/30 p-8 md:p-12 rounded-2xl border border-memorial-gold/20 relative overflow-hidden">
          
          <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-navy-dark border-2 border-memorial-gold flex items-center justify-center flex-shrink-0">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif text-navy-dark mb-2">Updates and Announcements</h3>
              <p className="text-memorial-gold font-sans uppercase tracking-widest text-xs mb-4">from the Eberechukwu Family</p>
              <p className="text-muted-text max-w-md">
                Please visit this section for important updates, announcements and further information about the memorial service.
              </p>
              
              <Link 
                href="/family-updates" 
                className="inline-flex items-center gap-2 text-navy-dark font-semibold mt-6 group"
              >
                View Announcements
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="w-px h-24 bg-memorial-gold/20 hidden lg:block" />

          <div className="flex-1 text-center lg:text-right">
            <p className="text-2xl font-serif italic text-navy-deep leading-relaxed">
              "Your presence, prayers and support mean a lot to us."
            </p>
            <div className="mt-6 flex justify-center lg:justify-end">
               <div className="w-12 h-px bg-memorial-gold/50" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
