"use client";

import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

/**
 * Service start: Sunday, 3rd January 2027, 10:00 AM (West Africa Time, UTC+1).
 * Written as a fixed ISO string with an explicit offset so the target is
 * identical on the server and the client.
 */
const SERVICE_TIME = new Date("2027-01-03T10:00:00+01:00").getTime();

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const UNIT_LABELS = ["Days", "Hours", "Minutes", "Seconds"] as const;

export default function Countdown() {
  // `null` until mounted so the server and the first client render match.
  const [remaining, setRemaining] = useState<Remaining | null>(null);
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = SERVICE_TIME - Date.now();

      if (diff <= 0) {
        setHasPassed(true);
        setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setRemaining({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff / 3_600_000) % 24),
        minutes: Math.floor((diff / 60_000) % 60),
        seconds: Math.floor((diff / 1_000) % 60),
      });
    };

    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const values = remaining
    ? [remaining.days, remaining.hours, remaining.minutes, remaining.seconds]
    : null;

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-memorial-gold/30 bg-navy-dark px-5 py-10 shadow-[0_30px_70px_-30px_rgba(11,35,64,0.6)] sm:px-8 md:px-12 md:py-14">
          {/* Hairline gold rule along the top edge */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-memorial-gold/70 to-transparent"
            aria-hidden="true"
          />
          {/* Soft gold glows */}
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-memorial-gold/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-memorial-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative text-center">
            <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-memorial-gold sm:text-xs">
              Counting Down To
            </p>

            <h2 className="mt-4 text-2xl font-serif leading-snug text-white md:text-3xl">
              The Funeral &amp; Burial Ceremony
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Sunday, 3rd January 2027 &middot; 10:00 AM &middot; Umuju Village,
              Ezedike Autonomous Community, Imo State
            </p>

            <div className="flex justify-center py-6 md:py-8">
              <div className="relative h-px w-28 bg-memorial-gold/40">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2">
                  <Leaf className="h-3.5 w-3.5 text-memorial-gold" />
                </div>
              </div>
            </div>

            {hasPassed ? (
              <div className="mx-auto max-w-md">
                <Leaf className="mx-auto h-6 w-6 text-memorial-gold" />
                <p className="mt-5 font-serif text-xl italic text-white md:text-2xl">
                  The memorial service has been held.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  We thank you for your prayers, love and support.
                </p>
              </div>
            ) : (
              <>
                <div
                  role="timer"
                  aria-label="Time remaining until the memorial service"
                  className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:gap-5"
                >
                  {UNIT_LABELS.map((label, index) => (
                    <div
                      key={label}
                      className="relative overflow-hidden rounded-xl border border-memorial-gold/25 bg-white/[0.04] px-3 py-5 backdrop-blur-sm md:py-7"
                    >
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-memorial-gold/50 to-transparent"
                        aria-hidden="true"
                      />
                      <span className="block font-serif text-4xl leading-none tabular-nums text-white sm:text-5xl lg:text-[3.5rem]">
                        {values ? String(values[index]).padStart(2, "0") : "--"}
                      </span>
                      <span className="mt-3 block text-[9px] font-sans uppercase tracking-[0.22em] text-memorial-gold sm:text-[10px] sm:tracking-[0.25em]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[10px] font-sans uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                  Times shown in West Africa Time (WAT)
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
