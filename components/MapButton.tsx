"use client";

import { useState } from "react";
import { Loader2, Navigation } from "lucide-react";

/** Exact venue as recorded by the family. Used as the map destination. */
const VENUE =
  "Umuju Village, Ezedike Autonomous Community, Umuobom Clan, Ideato South L.G.A., Imo State, Nigeria";

function directionsUrl(origin?: string) {
  const destination = encodeURIComponent(VENUE);
  const from = origin ? `&origin=${encodeURIComponent(origin)}` : "";
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving${from}`;
}

export default function MapButton() {
  const [locating, setLocating] = useState(false);

  const handleClick = () => {
    // Open the tab during the click itself, so the browser never treats it as a popup.
    const tab = window.open("", "_blank");
    if (tab) {
      tab.opener = null;
      tab.document.write(
        '<title>Getting directions…</title><body style="margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background:#0b2340;color:#f8f4ec;font-family:system-ui,sans-serif">Finding your location…</body>'
      );
    }

    const go = (origin?: string) => {
      const url = directionsUrl(origin);
      if (tab && !tab.closed) {
        tab.location.replace(url);
      } else {
        // Popup blocked — navigate in the current tab instead.
        window.location.href = url;
      }
    };

    if (!("geolocation" in navigator)) {
      go();
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocating(false);
        go(`${position.coords.latitude},${position.coords.longitude}`);
      },
      () => {
        // Permission denied or unavailable: Google Maps falls back to the
        // device's own current location.
        setLocating(false);
        go();
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-28 right-8 z-[60] group flex items-center justify-center w-16 h-16 bg-navy-dark border border-memorial-gold/40 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Get directions to the burial venue on the map"
    >
      {locating ? (
        <Loader2 className="w-7 h-7 text-memorial-gold animate-spin" />
      ) : (
        <Navigation className="w-7 h-7 text-memorial-gold fill-memorial-gold/20 transition-colors group-hover:text-white group-hover:fill-white/20" />
      )}

      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-1 bg-navy-dark text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-memorial-gold/20">
        Get directions to the venue
      </span>
    </button>
  );
}
