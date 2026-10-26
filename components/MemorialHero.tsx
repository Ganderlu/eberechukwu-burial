"use client";

import Image from "next/image";
import { Calendar, Clock, MapPin, Leaf, Share2 } from "lucide-react";

export default function MemorialHero() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Eberechukwu Family Memorial",
          text: "In Loving Memory of Late Chief Samuel Eberechukwu Ugochukwu and Late Lolo Eunice Ugochukwu",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
    }
  };

  return (
    <section className="relative bg-background pt-12 pb-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[52%] text-center lg:text-center order-2 lg:order-1">
            <div className="flex flex-col items-center">
              <h2 className="text-xs md:text-sm font-sans tracking-[0.3em] text-memorial-gold uppercase mb-4">
                THE MEMORIAL SERVICE OF
              </h2>

              <div className="flex justify-center mb-6">
                <Leaf className="text-memorial-gold w-6 h-6" />
              </div>

              <div className="space-y-4 mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-dark leading-tight tracking-tight">
                  Late Chief Samuel
                  <br />
                  Eberechukwu Ugochukwu
                </h1>
                <p className="text-xl md:text-2xl font-serif text-navy-deep italic">
                  (Omeni)
                </p>
                <div className="text-3xl font-serif text-memorial-gold py-2 italic font-light">
                  &
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-dark leading-tight tracking-tight">
                  Late Lolo Eunice Ugochukwu
                </h1>
              </div>

              <p className="text-lg md:text-xl font-serif italic text-muted-text mb-8">
                "Forever in our hearts, always in our memories."
              </p>

              <div className="flex justify-center mb-8">
                <Leaf className="text-memorial-gold w-4 h-4" />
              </div>

              <button
                onClick={handleShare}
                className="mb-12 inline-flex items-center gap-2 px-6 py-2.5 bg-navy-dark text-white rounded-full text-sm font-medium hover:bg-navy-deep transition-colors shadow-lg border border-memorial-gold/20"
              >
                <Share2 className="w-4 h-4 text-memorial-gold" />
                Share Memorial
              </button>
            </div>

            {/* Event Info Bar */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 py-8 border-t border-b border-memorial-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-dark flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted-text uppercase tracking-widest mb-0.5">
                    Date
                  </p>
                  <p className="text-sm font-semibold leading-tight text-navy-dark">
                    Sunday,
                    <br />
                    3rd January 2027
                  </p>
                </div>
              </div>

              <div className="hidden md:block w-px h-10 bg-memorial-gold/30" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-dark flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted-text uppercase tracking-widest mb-0.5">
                    Time
                  </p>
                  <p className="text-sm font-semibold text-navy-dark">
                    10:00 AM
                  </p>
                </div>
              </div>

              <div className="hidden md:block w-px h-10 bg-memorial-gold/30" />

              <div className="flex items-center gap-3 max-w-[280px]">
                <div className="w-10 h-10 rounded-full bg-navy-dark flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted-text uppercase tracking-widest mb-0.5">
                    Venue
                  </p>
                  <p className="text-sm font-semibold leading-tight text-navy-dark">
                    Umuju Village, Ezedike Autonomous Community, Imo State
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Real photographs from the memorial flyer */}
          <div className="w-full lg:w-[48%] order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[540px]">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-white/70 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-memorial-gold/40 bg-white p-2 shadow-[0_25px_60px_-25px_rgba(11,35,64,0.5)] sm:p-3">
                <div className="overflow-hidden rounded-[1.1rem]">
                  <Image
                    src="/images/buria.png"
                    alt="Memorial flyer showing Late Chief Samuel Eberechukwu Ugochukwu (Omeni) in his black uniform and beret, and Late Lolo Eunice Ugochukwu in her royal-blue outfit and headwrap"
                    width={1536}
                    height={1024}
                    className="h-auto w-full object-contain"
                    priority
                    sizes="(max-width: 1024px) 92vw, 540px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Navy Border Bottom with Gold Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120H1440V40C1440 40 1080 100 720 100C360 100 0 40 0 40V120Z"
            fill="#0B2340"
          />
          <path
            d="M0 40C0 40 360 100 720 100C1080 100 1440 40 1440 40"
            stroke="#C59A43"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
}
