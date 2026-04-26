"use client";

import { useState } from "react";

/* ─── Types ──────────────────────────────────────────────── */
interface Book {
  title: string;
  subtitle?: string;
  description: string;
  amazonUrl: string;
}

interface Series {
  id: string;
  name: string;
  genre: string;
  tagline: string;
  description: string;
  accentColor: string;
  coverBg: string;
  books: Book[];
  reviews: { text: string; attribution: string }[];
}

/* ─── Data ────────────────────────────────────────────────── */
const NEWEST_BOOK = {
  title: "Harry's Gold",
  subtitle: "Gray Sides at Dawn · HMS Defy",
  description:
    "Navy Captain Harry Holden and his loyal 'Holden's Privateers' crew have just been assigned a secret mission that could decide the outcome of WW2 — cross the most Axis-patrolled and dangerous sea in the world to recover millions in hidden gold bars before the Germans get their hands on them. Jutland veteran Commodore Nichols, 100 Royal Marines, two shifty guides, and an Adriatic pirate with a talent for burning enemy ships join the Privateers. Finding and securing the gold is job 1. Fighting their way back through enemy waters is job 2.",
  amazonUrl: "https://www.amazon.com/Gray-Sides-Dawn-DEFY-Harrys/dp/1068871792/",
  accentColor: "#1B3A5C",
  coverBg: "#0F2133",
};

const SERIES: Series[] = [
  {
    id: "gray-sides",
    name: "Gray Sides at Dawn",
    genre: "Nautical Historical Fiction",
    tagline: "Old ships. Brave crews. The unforgiving seas of World War Two.",
    description:
      "A sweeping nautical historical fiction series following Royal Navy and Canadian warships — and the flawed, courageous officers who sail them — through the deadliest waters of World War Two. From the stormy Atlantic to the Adriatic's hidden gold to the treacherous Pacific, each book is a stand-alone battle of wits, steel, and seamanship.",
    accentColor: "#1B3A5C",
    coverBg: "#0F2133",
    books: [
      {
        title: "HMS Brock",
        subtitle: "Book 1",
        description:
          "An old cruiser snatched from the breaker's yard, refitted with scavenged guns and cast-off crew. Under the command of Captain Menzies and sharp-tongued Commander Harry Holden, HMS Brock sails into the teeth of the Atlantic war — and proves she's no museum piece.",
        amazonUrl:
          "https://www.amazon.com/Gray-Sides-Dawn-HMS-Brock/dp/1068871733/",
      },
      {
        title: "Harry's Gold",
        subtitle: "Book 2 — Newest Release",
        description:
          "Captain Harry Holden and his 'Holden's Privateers' are assigned a secret mission: cross the most Axis-patrolled sea in the world to recover millions in hidden gold bars before the Germans do. An Adriatic pirate, 100 Royal Marines, and a Jutland veteran join the operation.",
        amazonUrl:
          "https://www.amazon.com/Gray-Sides-Dawn-DEFY-Harrys/dp/1068871792/",
        isNew: true,
      } as Book & { isNew?: boolean },
      {
        title: "Rebel Sister",
        subtitle: "Book 3",
        description:
          "Newly promoted Captain Harry Holden takes command of HMCS Rose — a luxury liner frantically converted for war — and plies the harsh northern Pacific seeking the Axis foes. Ancient guns, a cast-off crew, and a horizon bristling with torpedoes.",
        amazonUrl:
          "https://www.amazon.com/Gray-Sides-Dawn-Rebel-Sister/dp/1068871776/",
      },
    ],
    reviews: [
      {
        text: "Ferris brings the claustrophobic tension of naval warfare to life. The characters feel lived-in, the ships feel real, and the action is relentless.",
        attribution: "★★★★★  — Amazon Reviewer",
      },
      {
        text: "A thoroughly researched and gripping WW2 naval adventure. HMS Brock is a wonderful starting point — I tore through the whole series.",
        attribution: "★★★★★  — Amazon Reviewer",
      },
    ],
  },
  {
    id: "terry-reid",
    name: "The Terry Reid Cycle",
    genre: "Dystopian Action-Thriller",
    tagline: "White-knuckled suspense. International intrigue. A cop who won't quit.",
    description:
      "Set in a grim near-future America where a maverick president rides a rising tide of revisionism toward world domination, the Terry Reid novels follow Theresa Reid — tough-as-nails Canadian Mountie — and her sharp-witted niece Jessica as they unravel conspiracies, thwart rogue technology, and outmanoeuvre enemies on every continent. Six pulse-pounding books of gritty action and moral complexity.",
    accentColor: "#7B1C24",
    coverBg: "#2E1A1E",
    books: [
      {
        title: "His Disciples Watch",
        subtitle: "Book 1",
        description:
          "Terry Reid arrives in future America facing a series of deadly murders and a Revisionist State tightening its grip. She trusts no one, enlisting the help of a poet, a drifter, and a height-challenged accordion player. Who is really pulling the strings?",
        amazonUrl:
          "https://www.amazon.com/gp/product/B07PBDQMNB/",
      },
      {
        title: "His Disciples Sleep",
        subtitle: "Book 2",
        description:
          "Terry Reid returns after the presidential assassination. Jess fights for her life as deadly 'Verbeelding' dream-glasses become untraceable instruments of murder. Post-Revisionist America's bad actors won't go quietly.",
        amazonUrl:
          "https://www.amazon.com/gp/product/B07PBDQMNB/",
      },
      {
        title: "His Disciples Deceive",
        subtitle: "Book 3",
        description:
          "Terry wakes on a disabled plane over Afghanistan, drafted into a doomed mission to find a kidnapped American president. A booze-soaked actor stands in for him back home — one slip from triggering a world war.",
        amazonUrl:
          "https://www.amazon.com/dp/1999092015/",
      },
      {
        title: "His Disciples Replicate",
        subtitle: "Book 4",
        description:
          "Billionaire Sandros Hammar's space-travel venture explodes — literally. Now the Disciples demand he reactivate two rogue A-bombs. Terry, on post-Brexit England, discovers her reputation has followed her across the ocean.",
        amazonUrl:
          "https://www.amazon.com/dp/199909204X/",
      },
      {
        title: "His Disciples In Motion",
        subtitle: "Book 5",
        description:
          "Jess infiltrates an Alaskan commune hunting for her father. When the community's secretive 'Angel Protectors' bury a murder, Terry drops in. The idyllic wilderness has a dark, regimented heart — and giving up is not in Terry's DNA.",
        amazonUrl:
          "https://www.amazon.com/Disciples-Motion-Patrick-Douglas-Ferris/dp/1999092074/",
      },
      {
        title: "His Disciples Vanish",
        subtitle: "Book 6",
        description:
          "The final chapter of the Disciples saga. Major Terry Reid closes in on the last stronghold, chasing a small but terrifying bomb while a tech-titan 'frenemy' begs for protection at his lavish 'Techno-Scientist Ball' — the perfect stage for the Disciples to ride again.",
        amazonUrl:
          "https://www.amazon.com/gp/product/B07PBDQMNB/",
      },
    ],
    reviews: [
      {
        text: "White-knuckled suspense from the first page. Terry Reid is one of the most compelling protagonists in Canadian fiction — fearless, flawed, and relentlessly real.",
        attribution: "★★★★★  — Amazon Reviewer",
      },
      {
        text: "Ferris writes gritty action and political intrigue with a confident hand. Each book in the cycle ratchets up the stakes in ways you don't see coming.",
        attribution: "★★★★★  — Amazon Reviewer",
      },
    ],
  },
  {
    id: "time-sleuths",
    name: "Time Sleuths",
    genre: "Mystery · Time-Travel",
    tagline: "Victorian detectives. Modern crimes. No way home.",
    description:
      "A mysterious time portal hurls three Victorian investigators — Edward, Smitty, and Mae — into present-day London. Stranded with no passage back, they set up 'Proper Investigations' and begin accepting the city's most baffling cases. Ferris weaves together Victorian charm, sharp humour, and modern crime-solving in a series that delights readers of all ages.",
    accentColor: "#3D5A3E",
    coverBg: "#1A2E1C",
    books: [
      {
        title: "Time Sleuths",
        subtitle: "The Complete Series",
        description:
          "Five mysteries in one volume. Edward, Smitty, and Mae navigate smartphones, CCTV, and the London Underground armed with only Victorian instinct and each other. Chief Inspector Hardcastle is skeptical — but even he can't argue with results.",
        amazonUrl:
          "https://www.amazon.com/Time-Sleuths-Patrick-D-Ferris-ebook/dp/B0D8K3K7R1/",
      },
    ],
    reviews: [
      {
        text: "Ferris masterfully weaves together humor, suspense, and heartfelt character development. Edward, Smitty, and Mae are an irresistible team.",
        attribution: "★★★★★  — Amazon Editorial",
      },
      {
        text: "A delightful fish-out-of-water mystery with real heart. The Victorian-meets-modern London dynamic is endlessly inventive.",
        attribution: "★★★★★  — Amazon Reviewer",
      },
    ],
  },
  {
    id: "gypsies",
    name: "The Gypsies Series",
    genre: "Cycling Romance",
    tagline: "Follow your heart. Race your dreams. Find your people.",
    description:
      "A warm, whimsical romance set against the dramatic backdrop of competitive cycling. Giselle — tall, forbidding, raised as a mechanic in Trinidad — loses everything and gambles her last penny on a school in Tucson, only to be turned away by local politics. A chance meeting with Larry and his ragtag group of cycling 'gypsies' changes everything. Stakes rise with every race as the team chases glory and love across four unforgettable books.",
    accentColor: "#7A5C2E",
    coverBg: "#2E1F0A",
    books: [
      {
        title: "A Gypsy Romance",
        subtitle: "Larry & Giselle · Book 1",
        description:
          "Giselle arrives in America with nothing. A job at a small shop and a chance meeting with Larry and his cycling crew opens a door she never expected. An endearing odd couple among strangers, drawn together by speed, sweat, and something deeper.",
        amazonUrl:
          "https://www.amazon.com/Gypsy-Romance-Larry-Giselle/dp/1730936083/",
      },
      {
        title: "A Gypsy Engagement",
        subtitle: "Larry & Giselle · Book 2",
        description:
          "The stakes climb higher as Larry and Giselle's relationship deepens off the bike while the competitive pressure intensifies on it. Can their bond survive the demands of professional cycling — and each other?",
        amazonUrl:
          "https://www.amazon.com/gp/product/B07P844P2T/",
      },
      {
        title: "A Gypsy Haunting",
        subtitle: "Larry & Giselle · Book 3",
        description:
          "Larry and Giselle settle in Goosefield, a small farm in northern Canada. Giselle's orphaned cousin Erika arrives from Trinidad and discovers cycling is her ticket out. But Larry secretly burns to ride the big races he was cheated from.",
        amazonUrl:
          "https://www.amazon.com/Gypsy-Haunting-Larry-Giselle-romance/dp/099198529X/",
      },
      {
        title: "A Gypsy Homecoming",
        subtitle: "Larry & Giselle · Book 4",
        description:
          "The final chapter of the Larry and Giselle saga — a homecoming in every sense of the word, bringing the series full circle with warmth, humour, and the spirit of the open road.",
        amazonUrl:
          "https://www.amazon.com/Gypsy-Homecoming-Patrick-Ferris/dp/1738965953/",
      },
    ],
    reviews: [
      {
        text: "Charming, warm, and surprisingly gripping. Ferris clearly knows competitive cycling from the inside — and it shows in every chapter.",
        attribution: "★★★★★  — Amazon Reviewer",
      },
      {
        text: "Larry and Giselle are one of fiction's great odd couples. The cycling backdrop is vivid and the romance is earned, not forced.",
        attribution: "★★★★★  — Amazon Reviewer",
      },
    ],
  },
];

/* ─── Sub-Components ─────────────────────────────────────── */

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Books", href: "#books" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-xl font-semibold text-ink tracking-wide"
        >
          Patrick D. Ferris
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.amazon.com/stores/author/B07L51K7P3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body px-4 py-2 bg-ink text-cream rounded hover:bg-ink/80 transition-colors"
          >
            Amazon ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-cream px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-body text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.amazon.com/stores/author/B07L51K7P3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body text-burgundy font-medium"
          >
            Amazon Author Page ↗
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 lg:py-44">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="font-body text-xs uppercase tracking-[0.2em] text-cream/50 mb-6">
            Author · Fort St. John, B.C., Canada
          </p>

          {/* Name */}
          <h1 className="font-display text-6xl md:text-8xl font-light text-cream leading-none mb-6">
            Patrick
            <br />
            <span className="italic font-medium">D. Ferris</span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-lg md:text-xl text-cream/70 mb-8 leading-relaxed max-w-xl">
            Multi-genre fiction author — writing gritty thrillers, nautical
            adventure, time-travel mystery, and heartfelt cycling romance from
            the Peace Country of British Columbia.
          </p>

          {/* Series pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Terry Reid Cycle", "Gray Sides at Dawn", "Time Sleuths", "Gypsies Series"].map(
              (s) => (
                <span
                  key={s}
                  className="font-body text-xs px-3 py-1.5 rounded-full border border-cream/20 text-cream/60"
                >
                  {s}
                </span>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#books"
              className="font-body px-6 py-3 bg-cream text-ink text-sm font-medium rounded hover:bg-parchment transition-colors"
            >
              Explore the Books
            </a>
            <a
              href="https://www.amazon.com/stores/author/B07L51K7P3"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body px-6 py-3 border border-cream/30 text-cream text-sm rounded hover:border-cream/60 transition-colors"
            >
              View on Amazon ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-parchment border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="order-2 md:order-1">
            <div
              className="w-full max-w-sm mx-auto md:mx-0 rounded-sm"
              style={{
                aspectRatio: "4/5",
                background: "linear-gradient(145deg, #2E2E3A 0%, #1A1A2E 100%)",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 opacity-30">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <p className="text-white text-xs font-body">Author photo</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 md:order-2">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted mb-4">
              About the Author
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-6 leading-tight">
              Stories from the
              <br />
              <em>Peace Country</em>
            </h2>
            <div className="space-y-4 font-body text-muted leading-relaxed">
              <p>
                Born in Winnipeg, Manitoba in 1954, Pat Ferris grew up in
                Victoria and moved to Fort St. John in 1975 — a city carving
                its identity from the rapidly expanding natural gas fields of
                northeastern B.C. He spent decades in the gas industry and a
                subsequent bicycle shop, all while writing on the side.
              </p>
              <p>
                In 2015, Pat retired to write full-time. Since then he has
                produced four distinct series — the gritty, dystopian{" "}
                <em>Terry Reid Cycle</em>; the WW2 naval adventure series{" "}
                <em>Gray Sides at Dawn</em>; the time-travel mystery{" "}
                <em>Time Sleuths</em>; and the warm cycling romance of the{" "}
                <em>Gypsies</em> books — as well as short stories published in
                compilations and anthologies.
              </p>
              <p>
                A lifelong cyclist who has raced on- and off-road for decades, Ferris
                brings authentic detail and hard-won experience to every page
                he writes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookCover({
  title,
  subtitle,
  bg,
}: {
  title: string;
  subtitle?: string;
  bg: string;
}) {
  return (
    <div
      className="book-cover rounded-sm w-full flex flex-col items-center justify-end p-4"
      style={{ background: bg }}
    >
      <div className="text-center">
        {subtitle && (
          <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1 font-body">
            {subtitle}
          </p>
        )}
        <p className="text-white/80 text-sm font-display font-semibold leading-snug">
          {title}
        </p>
      </div>
    </div>
  );
}

function SeriesSection({ series, reversed }: { series: Series; reversed?: boolean }) {
  return (
    <section
      id={series.id}
      className="border-b border-border py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Series header */}
        <div className="mb-14 max-w-2xl">
          <span
            className="font-body text-xs uppercase tracking-[0.2em] font-medium mb-3 inline-block"
            style={{ color: series.accentColor }}
          >
            {series.genre}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink leading-tight mb-4">
            {series.name}
          </h2>
          <p
            className="font-body text-lg italic mb-5"
            style={{ color: series.accentColor }}
          >
            {series.tagline}
          </p>
          <p className="font-body text-muted leading-relaxed">
            {series.description}
          </p>
        </div>

        {/* Books grid */}
        <div
          className={`grid gap-6 mb-14 ${
            series.books.length === 1
              ? "grid-cols-1 max-w-xs"
              : series.books.length <= 3
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
          }`}
        >
          {series.books.map((book) => (
            <a
              key={book.title}
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <BookCover
                title={book.title}
                subtitle={book.subtitle}
                bg={series.coverBg}
              />
              <div className="mt-3 px-0.5">
                <h3 className="font-body text-sm font-medium text-ink group-hover:text-burgundy transition-colors leading-snug">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="font-body text-xs text-muted mt-0.5">
                    {book.subtitle}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Book descriptions (for series with multiple books) */}
        {series.books.length > 1 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {series.books.map((book) => (
              <div
                key={book.title}
                className="border border-border rounded-sm p-5 bg-parchment/40"
              >
                <p className="font-body text-xs uppercase tracking-widest text-muted mb-1">
                  {book.subtitle}
                </p>
                <h4 className="font-display text-lg font-semibold text-ink mb-2">
                  {book.title}
                </h4>
                <p className="font-body text-sm text-muted leading-relaxed mb-4">
                  {book.description}
                </p>
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs font-medium transition-colors"
                  style={{ color: series.accentColor }}
                >
                  Buy on Amazon ↗
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Single book description */}
        {series.books.length === 1 && (
          <div className="mb-14 max-w-xl border border-border rounded-sm p-6 bg-parchment/40">
            <p className="font-body text-sm text-muted leading-relaxed mb-4">
              {series.books[0].description}
            </p>
            <a
              href={series.books[0].amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium transition-colors"
              style={{ color: series.accentColor }}
            >
              Buy on Amazon ↗
            </a>
          </div>
        )}

        {/* Reviews */}
        <div className="grid sm:grid-cols-2 gap-6">
          {series.reviews.map((review, i) => (
            <blockquote
              key={i}
              className="border-l-2 pl-5 py-1"
              style={{ borderColor: series.accentColor }}
            >
              <p className="font-display italic text-lg text-ink/80 leading-relaxed mb-2">
                &ldquo;{review.text}&rdquo;
              </p>
              <cite className="font-body text-xs text-muted not-italic">
                {review.attribution}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShortStories() {
  return (
    <section id="short-stories" className="border-b border-border py-20 md:py-28 bg-parchment/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-muted mb-3 inline-block">
              Short Fiction
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-4 leading-tight">
              Fragmented Thoughts,
              <br />
              <em>Random Directions</em>
            </h2>
            <p className="font-body text-muted leading-relaxed mb-6">
              Pat Ferris has been writing short fiction throughout his career,
              with stories published in compilations and in print. This
              collection — <em>Fragmented Thoughts Random Directions</em> —
              gathers a range of Ferris's shorter works: sharp, genre-spanning,
              and unpredictable, reflecting the same restless creative energy
              that drives his longer series.
            </p>
            <a
              href="https://www.amazon.com/Fragmented-Thoughts-Random-Directions-Collection/dp/1999092023/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium px-5 py-2.5 border border-ink text-ink rounded hover:bg-ink hover:text-cream transition-colors inline-block"
            >
              Buy on Amazon ↗
            </a>
          </div>

          <div className="flex justify-center">
            <div
              className="w-48 rounded-sm"
              style={{
                aspectRatio: "2/3",
                background: "linear-gradient(145deg, #2E2E3A 0%, #1A1A2E 100%)",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-end pb-6 px-4 text-center">
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1 font-body">
                  Short Stories
                </p>
                <p className="text-white/80 text-sm font-display font-semibold leading-snug">
                  Fragmented Thoughts Random Directions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form — no backend yet
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-b border-border py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-cream/40 mb-4 text-center">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-cream text-center mb-4 leading-tight">
            Say Hello
          </h2>
          <p className="font-body text-cream/60 text-center mb-12">
            Questions about the books, media enquiries, or just want to say
            hello — Pat would love to hear from you.
          </p>

          {submitted ? (
            <div className="text-center py-12 border border-cream/20 rounded-sm">
              <p className="font-display text-2xl italic text-cream mb-2">
                Thank you!
              </p>
              <p className="font-body text-cream/60 text-sm">
                Your message has been received. Pat will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-cream/50 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent border border-cream/20 rounded-sm px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-cream/50 transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-cream/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-cream/20 rounded-sm px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-cream/50 transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-cream/50 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full bg-transparent border border-cream/20 rounded-sm px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-cream/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full font-body text-sm font-medium py-3 bg-cream text-ink rounded-sm hover:bg-parchment transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink border-t border-cream/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display italic text-cream/60 text-lg">
          Patrick D. Ferris
        </span>
        <div className="flex gap-6">
          <a
            href="#books"
            className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors"
          >
            Books
          </a>
          <a
            href="#about"
            className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors"
          >
            Contact
          </a>
          <a
            href="https://www.amazon.com/stores/author/B07L51K7P3"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors"
          >
            Amazon ↗
          </a>
        </div>
        <p className="font-body text-xs text-cream/30">
          © {year} Patrick D. Ferris. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── New Book Banner ────────────────────────────────────── */
function NewBookBanner() {
  return (
    <section
      id="books"
      style={{ background: "#0A1B2A" }}
      className="border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-body text-xs font-medium px-3 py-1 rounded-full bg-[#C4963A] text-[#0A1B2A] uppercase tracking-widest">
            New Release
          </span>
          <span className="font-body text-xs uppercase tracking-[0.2em] text-white/40">
            Gray Sides at Dawn Series
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-medium italic text-white leading-tight mb-2">
              Harry&rsquo;s Gold
            </h2>
            <p className="font-body text-sm uppercase tracking-widest text-white/40 mb-6">
              HMS Defy &mdash; Book 2
            </p>
            <p className="font-body text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
              Navy Captain Harry Holden and his loyal &ldquo;Holden&rsquo;s Privateers&rdquo; have just been
              assigned a secret mission that could decide the outcome of WW2 — cross the most
              Axis-patrolled and dangerous sea in the world to recover millions in hidden gold bars
              before the Germans get their hands on them.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.amazon.com/Gray-Sides-Dawn-DEFY-Harrys/dp/1068871792/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium px-6 py-3 rounded"
                style={{ background: "#C4963A", color: "#0A1B2A" }}
              >
                Buy on Amazon ↗
              </a>
              <a
                href="#gray-sides"
                className="font-body text-sm px-6 py-3 rounded border border-white/25 text-white/70 hover:border-white/50 transition-colors"
              >
                View Full Series
              </a>
            </div>
          </div>

          {/* Cover placeholder */}
          <div
            className="hidden md:flex w-full rounded-sm flex-col items-center justify-end pb-8 px-6 text-center"
            style={{
              aspectRatio: "2/3",
              background: "linear-gradient(160deg, #1B3A5C 0%, #0A1B2A 100%)",
              border: "1px solid rgba(196,150,58,0.25)",
            }}
          >
            <span
              className="font-body text-[10px] uppercase tracking-widest mb-2"
              style={{ color: "rgba(196,150,58,0.6)" }}
            >
              New Release
            </span>
            <span className="font-display italic text-xl font-semibold text-white/80 leading-snug">
              Harry&rsquo;s Gold
            </span>
            <span className="font-body text-xs text-white/35 mt-1">
              Gray Sides at Dawn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Books Intro (other series) ────────────────────────── */
function BooksIntro() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20 pb-4">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-muted mb-4">
        All Four Series
      </p>
      <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight">
        Four worlds.
        <br />
        <em className="font-medium">Endless stories.</em>
      </h2>
      <div className="mt-6 h-px bg-border w-full" />
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Page() {
  const [graySides, ...otherSeries] = SERIES;
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <NewBookBanner />
      <SeriesSection series={graySides} />
      <BooksIntro />
      {otherSeries.map((series) => (
        <SeriesSection key={series.id} series={series} />
      ))}
      <ShortStories />
      <Contact />
      <Footer />
    </main>
  );
}
