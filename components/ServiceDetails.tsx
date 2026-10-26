"use client";

import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function ServiceDetails() {
  return (
    <section className="bg-navy-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Service Details Card */}
          <div className="bg-background rounded-xl p-8 md:p-10 border border-memorial-gold/30 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-memorial-gold/40" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-navy-dark flex items-center justify-center border border-memorial-gold/20">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-navy-dark">
                Service Details
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-memorial-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-text mb-1">
                    Date
                  </p>
                  <p className="text-lg font-medium text-navy-dark">
                    Sunday, 3rd January 2027
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-memorial-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-text mb-1">
                    Time
                  </p>
                  <p className="text-lg font-medium text-navy-dark">10:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-memorial-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-text mb-1">
                    Venue
                  </p>
                  <p className="text-lg font-medium text-navy-dark leading-relaxed">
                    Umuju Village, Ezedike Autonomous Community, Umuobom Clan,
                    Ideato South L.G.A., Imo State
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reception Card */}
          <div className="bg-[#F4F7FA] rounded-xl p-8 md:p-10 border border-navy-deep/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none rotate-45 translate-x-8 -translate-y-8">
              <Leaf className="w-full h-full text-navy-deep fill-navy-deep" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-navy-deep flex items-center justify-center border border-white/20">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-navy-dark">
                Reception Follows Immediately
              </h3>
            </div>

            <div className="space-y-6 relative z-10">
              <p className="text-xl text-navy-deep/90 leading-relaxed italic font-serif">
                "At Late Chief Samuel Eberechukwu Ugochukwu's compound, Umuju
                Village, Umuezideke Community, Umuobom Clan."
              </p>

              <div className="pt-8 flex justify-center">
                <div className="w-24 h-px bg-memorial-gold/30 relative">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2">
                    <Leaf className="w-3 h-3 text-memorial-gold fill-memorial-gold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Leaf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    </svg>
  );
}
