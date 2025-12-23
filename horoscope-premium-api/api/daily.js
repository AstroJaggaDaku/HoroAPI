import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";
import { clean } from "./utils/clean.js";
import { astroMeta, luckScore } from "./utils/astro.js";
import { nakshatraInfo } from "./utils/nakshatra.js";
import { remedy } from "./utils/remedies.js";
import { translate } from "./utils/translate.js";
import { RSS, ZODIAC } from "./utils/data.js";

/* 🔥 CORS HELPER — MUST */
function cors(res){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {

  /* ✅ CORS FIX */
  cors(res);
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const xml = await fetch(RSS).then(r => r.text());
    const parsed = await parseStringPromise(xml);
    const items = parsed.rss.channel[0].item;

    const nk = nakshatraInfo();

    const out = {
      branding: "Astrologer Joydev Sastri",
      period: "daily",
      date: new Date().toISOString().slice(0,10),
      nakshatra: nk.nakshatra,
      moon_phase: nk.moon_phase
    };

    for (const z of ZODIAC) {
      const it = items.find(i =>
        i.title[0].toLowerCase().includes(z)
      );
      if (!it) continue;

      const base = clean(it.description[0]);
      const astro = astroMeta(z,"daily");
      const enriched =
        `${base} ${astro.flavour} Influenced by ${astro.planet}.`;

      out[z] = {
        planet: astro.planet,
        luck: luckScore(z,"daily"),
        remedy: remedy(z),
        en: enriched,
        bn: await translate(enriched,"bn"),
        hi: await translate(enriched,"hi")
      };
    }

    /* ✅ CACHE (VERY IMPORTANT) */
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=21600, stale-while-revalidate=3600"
    );

    res.json(out);

  } catch (e) {
    res.status(500).json({ error: "Horoscope unavailable" });
  }
}
