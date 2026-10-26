import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  BookOpen,
  Users,
  Church,
  Leaf,
} from "lucide-react";

export default function ServiceDetailsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-[52%] text-center lg:text-center order-2 lg:order-1">
              <div className="flex flex-col items-center">
                <h2 className="text-xs md:text-sm font-sans tracking-[0.3em] text-memorial-gold uppercase mb-4">
                  MEMORIAL SERVICE DETAILS
                </h2>

                <div className="flex justify-center mb-6">
                  <Leaf className="text-memorial-gold w-6 h-6" />
                </div>

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-navy-dark leading-tight mb-4">
                  <span className="text-lg md:text-xl italic text-navy-deep/70 block mb-2">
                    The Memorial Service of
                  </span>
                  Late Chief Samuel
                  <br />
                  Eberechukwu Ugochukwu
                  <br />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    (Omeni)
                  </span>
                </h1>

                <div className="text-2xl md:text-3xl font-serif text-memorial-gold my-2">
                  &
                </div>

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-navy-dark leading-tight mb-8">
                  Late Lolo Eunice Ugochukwu
                </h1>

                <p className="text-lg md:text-xl text-navy-deep/80 font-serif italic mb-12">
                  Forever in our hearts, always in our memories.
                </p>

                <div className="flex justify-center">
                  <Leaf className="text-memorial-gold w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[48%] order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-[540px]">
                <div
                  className="absolute -inset-4 rounded-[2rem] bg-white/70 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-memorial-gold/40 bg-white p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[1.1rem]">
                    <Image
                      src="/images/buria.png"
                      alt="Memorial couple"
                      width={1536}
                      height={1024}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-memorial-gold/50" />
              <Leaf className="text-memorial-gold w-5 h-5" />
              <div className="w-8 h-px bg-memorial-gold/50" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy-dark mb-4">
              Service Details
            </h2>
            <p className="text-muted-text italic font-serif">
              Join us as we celebrate their lives and honor their legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <InfoCard
              icon={<Calendar className="w-8 h-8 text-white" />}
              title="Date"
              content="Sunday, 3rd January 2027"
            />
            <InfoCard
              icon={<Clock className="w-8 h-8 text-white" />}
              title="Time"
              content="10:00 AM"
            />
            <InfoCard
              icon={<MapPin className="w-8 h-8 text-white" />}
              title="Venue"
              content="Umuju Village, Ezedike Autonomous Community, Umuobom Clan, Ideato South L.G.A., Imo State"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="bg-background rounded-2xl border border-memorial-gold/20 p-6 shadow-sm">
              <div className="aspect-video relative rounded-xl overflow-hidden mb-6 bg-gray-200 flex items-center justify-center border border-gray-300">
                <div className="absolute inset-0 opacity-40 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i12!2i2048!3i1024!2m3!1e0!2sm!3i407105151!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1f2!24m8!2i3!3m1!1sen!8m2!1e1!2e1!10b1!12b1!16b1')] bg-cover" />
                <div className="relative z-10 flex flex-col items-center">
                  <MapPin className="w-12 h-12 text-red-500 mb-2 drop-shadow-md" />
                  <span className="font-sans font-bold text-navy-dark bg-white/80 px-3 py-1 rounded-full text-sm">
                    Umuju Village
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-navy-dark flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl text-navy-dark mb-2">
                    Location
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed mb-4">
                    Umuju Village, Ezedike Autonomous Community, Umuobom Clan,
                    Ideato South L.G.A., Imo State.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Umuju+Village+Ideato+South+Imo+State"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-navy-dark text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy-deep transition-all shadow-md group"
                  >
                    <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    Get Directions
                    <Navigation className="w-4 h-4 rotate-90" />
                  </a>
                  <p className="text-[10px] text-gray-400 mt-2">
                    (Opens in Google Maps)
                  </p>
                </div>
              </div>
            </div>

            {/* Reception Card */}
            <div className="bg-background rounded-2xl border border-memorial-gold/20 p-8 shadow-sm relative overflow-hidden flex flex-col justify-center text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-memorial-gold/10 flex items-center justify-center border border-memorial-gold/20">
                  <Church className="w-8 h-8 text-memorial-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-serif text-navy-dark mb-4">
                Reception
              </h3>
              <h4 className="text-lg font-serif text-navy-deep mb-4 uppercase tracking-wider">
                Reception Follows Immediately
              </h4>
              <p className="text-muted-text leading-relaxed mb-8 italic">
                at Late Chief Samuel Eberechukwu Ugochukwu's compound, Umuju
                Village, Umuezideke Community, Umuobom Clan.
              </p>
              <div className="flex flex-col items-center">
                <div className="w-24 h-px bg-memorial-gold/30 mb-6" />
                <p className="text-memorial-gold font-serif italic text-lg">
                  Your presence, prayers and support mean a lot to us.
                </p>
                <div className="mt-4">
                  <Leaf className="text-memorial-gold w-6 h-6 opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Program */}
      <section className="py-20 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Leaf className="text-memorial-gold w-8 h-8 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Service Program
            </h2>
            <p className="text-gray-400 italic font-serif">
              A time to remember, celebrate and give thanks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ProgramItem
              icon={<Church className="w-6 h-6" />}
              time="10:00 AM"
              title="Opening Prayer"
            />
            <ProgramItem
              icon={<BookOpen className="w-6 h-6" />}
              time="10:30 AM"
              title="Scripture Readings"
            />
            <ProgramItem
              icon={<Users className="w-6 h-6" />}
              time="11:00 AM"
              title="Tributes & Eulogies"
            />
            <ProgramItem
              icon={<Church className="w-6 h-6" />}
              time="12:00 PM"
              title="Closing Prayer"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InfoCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="bg-background rounded-2xl border border-memorial-gold/20 p-8 shadow-sm group hover:border-memorial-gold/40 transition-colors">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-navy-dark flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-serif text-navy-dark mb-4">{title}</h3>
        <p className="text-muted-text leading-relaxed font-serif">{content}</p>
        <div className="mt-8 w-24 h-px bg-memorial-gold/20" />
        <div className="mt-2">
          <Leaf className="text-memorial-gold w-4 h-4 opacity-30" />
        </div>
      </div>
    </div>
  );
}

function ProgramItem({
  icon,
  time,
  title,
}: {
  icon: React.ReactNode;
  time: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-14 h-14 rounded-full border border-memorial-gold/30 flex items-center justify-center mb-4 text-memorial-gold group-hover:bg-memorial-gold group-hover:text-navy-dark transition-all">
        {icon}
      </div>
      <div className="w-px h-12 bg-memorial-gold/20 mb-4 hidden md:block" />
      <h4 className="text-lg font-serif mb-1">{title}</h4>
      <p className="text-sm text-memorial-gold font-sans tracking-widest">
        {time}
      </p>
    </div>
  );
}
