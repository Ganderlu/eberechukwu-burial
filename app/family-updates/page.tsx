import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Megaphone, Calendar, Leaf, Bell, Info, Heart } from "lucide-react";

export default function FamilyUpdates() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-memorial-gold/20 flex items-center justify-center border border-memorial-gold/40 shadow-lg">
                <Megaphone className="w-10 h-10 text-memorial-gold" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Updates & Announcements
            </h1>
            <p className="text-xl text-gray-400 font-serif italic max-w-2xl mx-auto">
              Stay informed about the memorial service arrangements and family
              updates.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-memorial-gold/5 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -ml-48 -mb-48" />
      </section>

      {/* Announcements Section */}
      <section className="py-20 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {/* Announcement Item 1 */}
            <AnnouncementCard
              date="October 16, 2026"
              title="Official Memorial Date Confirmed"
              content="The Eberechukwu family is pleased to announce that the memorial service for Late Chief Samuel and Late Lolo Eunice will be held on Sunday, 3rd January 2027. We look forward to welcoming family and friends to honor their legacy."
              type="important"
            />

            {/* Announcement Item 2 */}
            <AnnouncementCard
              date="October 10, 2026"
              title="Venue Preparations Underway"
              content="Preparations at the family compound in Umuju Village are currently in progress to ensure a comfortable and respectful environment for all guests attending the memorial service and reception."
              type="info"
            />

            {/* Announcement Item 3 */}
            <AnnouncementCard
              date="October 05, 2026"
              title="Service Program Finalized"
              content="The order of service has been finalized. The program will include scripture readings, tributes, and eulogies from family members and close associates, starting promptly at 10:00 AM."
              type="update"
            />
          </div>

          {/* Thank You Card */}
          <div className="mt-20 bg-white rounded-3xl p-12 text-center border border-memorial-gold/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-memorial-gold" />
            <Heart className="w-12 h-12 text-memorial-gold mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-serif text-navy-dark mb-6">
              A Message from the Family
            </h2>
            <p className="text-2xl font-serif text-navy-deep leading-relaxed italic mb-8">
              "Your presence, prayers and support mean a lot to us during this
              time of remembrance."
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="w-12 h-px bg-memorial-gold/30" />
              <Leaf className="text-memorial-gold w-6 h-6" />
              <div className="w-12 h-px bg-memorial-gold/30" />
            </div>
            <p className="mt-8 text-muted-text font-sans tracking-widest uppercase text-sm">
              The Eberechukwu Family
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function AnnouncementCard({
  date,
  title,
  content,
  type,
}: {
  date: string;
  title: string;
  content: string;
  type: "important" | "info" | "update";
}) {
  const icons = {
    important: <Bell className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
    update: <Calendar className="w-5 h-5 text-memorial-gold" />,
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-memorial-gold/10 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-start gap-6">
        <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-memorial-gold/10">
          {icons[type]}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-sans tracking-widest text-memorial-gold uppercase">
              {date}
            </span>
            <span
              className={`text-[10px] font-sans tracking-widest uppercase px-2 py-1 rounded-full ${
                type === "important"
                  ? "bg-red-50 text-red-600"
                  : type === "info"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-memorial-gold/10 text-memorial-gold"
              }`}
            >
              {type}
            </span>
          </div>
          <h3 className="text-xl font-serif text-navy-dark mb-3 group-hover:text-memorial-gold transition-colors">
            {title}
          </h3>
          <p className="text-muted-text leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
