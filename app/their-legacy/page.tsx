import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Leaf, User, Heart, Users, Star } from "lucide-react";

export default function TheirLegacy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-memorial-gold/50" />
              <span className="text-sm font-sans tracking-[0.3em] text-memorial-gold uppercase">
                Their Legacy
              </span>
              <div className="w-12 h-px bg-memorial-gold/50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-navy-dark mb-6 leading-tight">
              Two Beautiful Lives,
              <br />
              One Lasting Legacy
            </h1>
            <p className="text-lg md:text-xl text-navy-deep/80 max-w-3xl mx-auto font-serif italic mb-8">
              Late Chief Samuel Eberechukwu Ugochukwu (Omeni)
              <br />
              <span className="text-memorial-gold not-italic font-sans text-sm tracking-widest mx-2">
                and
              </span>
              Late Lolo Eunice Ugochukwu.
            </p>
            <div className="relative inline-block">
              <p className="text-muted-text max-w-2xl mx-auto leading-relaxed italic">
                "Their lives touched many, their love built a family, and their
                legacy continues to live on in all of us."
              </p>
              <div className="flex justify-center mt-6">
                <Leaf className="text-memorial-gold w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <div className="aspect-[21/9] relative">
              <Image
                src="/images/buria.png"
                alt="Late Chief Samuel and Late Lolo Eunice Ugochukwu"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-memorial-gold/5 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-deep/5 blur-[120px] rounded-full -ml-48 -mb-48" />
      </section>

      {/* Chief Samuel Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-8 border-background group">
                <Image
                  src="/images/buria.png"
                  alt="Late Chief Samuel Eberechukwu Ugochukwu"
                  fill
                  className="object-cover object-[15%_center] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <span className="text-xs font-sans tracking-[0.2em] text-memorial-gold uppercase mb-4 block">
                In Loving Memory
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-navy-dark mb-2">
                Late Chief Samuel Eberechukwu Ugochukwu (Omeni)
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="text-memorial-gold w-4 h-4" />
                <span className="text-sm font-serif italic text-memorial-gold">
                  A Leader, A Father, A Pillar
                </span>
              </div>
              <div className="space-y-4 text-muted-text leading-relaxed">
                <p>
                  Chief Samuel Eberechukwu Ugochukwu (Omeni) was a respected
                  leader, a devoted husband, father, and a man of great
                  integrity. His strength, discipline, and service to his
                  community left an indelible mark on everyone who knew him.
                </p>
                <p>
                  He lived a life of purpose, always standing for what was
                  right, and his legacy of service, love, and leadership will
                  forever be cherished.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <AttributeItem
                icon={<User className="w-5 h-5" />}
                title="A Respected Leader"
                desc="Known for his dedication to his family and community."
              />
              <AttributeItem
                icon={<Heart className="w-5 h-5" />}
                title="A Loving Husband"
                desc="He built a home filled with love, respect and unity."
              />
              <AttributeItem
                icon={<Users className="w-5 h-5" />}
                title="A Devoted Father"
                desc="He raised his family with strong values and discipline."
              />
              <AttributeItem
                icon={<Leaf className="w-5 h-5" />}
                title="A Lasting Legacy"
                desc="His impact will continue to inspire generations to come."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lolo Eunice Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 lg:order-1">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-8 border-white group">
                <Image
                  src="/images/buria.png"
                  alt="Late Lolo Eunice Ugochukwu"
                  fill
                  className="object-cover object-[85%_center] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:order-2">
              <span className="text-xs font-sans tracking-[0.2em] text-memorial-gold uppercase mb-4 block">
                In Loving Memory
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-navy-dark mb-2">
                Late Lolo Eunice Ugochukwu
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="text-memorial-gold w-4 h-4" />
                <span className="text-sm font-serif italic text-memorial-gold">
                  A Mother, A Wife, A Source of Strength
                </span>
              </div>
              <div className="space-y-4 text-muted-text leading-relaxed">
                <p>
                  Late Lolo Eunice Ugochukwu was a kind, caring and selfless
                  woman who brought warmth and peace wherever she went. She was
                  a devoted wife, a loving mother, and a pillar of support to
                  her family and community.
                </p>
                <p>
                  Her kindness, wisdom and unwavering love will forever remain
                  in the hearts of those who knew her.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 lg:order-3 space-y-8">
              <AttributeItem
                icon={<Heart className="w-5 h-5" />}
                title="A Kind and Caring Heart"
                desc="She touched lives with her compassion and generosity."
              />
              <AttributeItem
                icon={<Star className="w-5 h-5" />}
                title="A Devoted Wife"
                desc="She stood by her husband through every season."
              />
              <AttributeItem
                icon={<Users className="w-5 h-5" />}
                title="A Loving Mother"
                desc="She nurtured her family with love and wisdom."
              />
              <AttributeItem
                icon={<Star className="w-5 h-5" />}
                title="A Guiding Light"
                desc="Her spirit of kindness and strength lives on."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shared Legacy Section */}
      <section className="py-24 bg-white border-t border-memorial-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-memorial-gold/50" />
                <span className="text-xs font-sans tracking-[0.2em] text-memorial-gold uppercase">
                  Their Shared Legacy
                </span>
              </div>
              <h2 className="text-4xl font-serif text-navy-dark mb-8">
                Love, Family, Community
              </h2>
              <p className="text-muted-text text-lg leading-relaxed mb-8">
                Together, Chief Samuel and Lolo Eunice built a home of love,
                raised a family of strong values, and made a lasting impact in
                their community. Their legacy is one of service, compassion,
                unity and faith — a legacy that will continue to guide and
                inspire us for generations to come.
              </p>
              <div className="w-24 h-px bg-memorial-gold/30" />
            </div>
            <div className="bg-background p-12 rounded-3xl relative border border-memorial-gold/20 shadow-inner">
              <p className="text-2xl md:text-3xl font-serif text-navy-deep leading-relaxed italic relative z-10 text-center">
                "Their love, their service, and their kindness will never be
                forgotten."
              </p>
              <div className="flex justify-center mt-8">
                <Leaf className="text-memorial-gold w-8 h-8 opacity-40" />
              </div>
              {/* Decorative lily-like elements could go here if assets were available */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function AttributeItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 group">
      <div className="w-10 h-10 rounded-full bg-background border border-memorial-gold/20 flex items-center justify-center flex-shrink-0 text-memorial-gold transition-colors group-hover:bg-memorial-gold group-hover:text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-serif text-navy-dark text-lg mb-1">{title}</h4>
        <p className="text-sm text-muted-text leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
