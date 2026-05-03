"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  HardHat,
  Pause,
  Play,
  ShieldCheck,
  Volume2,
  Wrench
} from "lucide-react";

const navItems = ["Home", "Services", "About", "Contact"];

const trustCards = [
  {
    icon: Building2,
    title: "PLAN",
    text: "現場を読み、足場を組む。"
  },
  {
    icon: HardHat,
    title: "SAFETY",
    text: "安全は、見た目に出る。"
  },
  {
    icon: Wrench,
    title: "BUILD",
    text: "単管も、くさび式も。"
  },
  {
    icon: ShieldCheck,
    title: "STRIKE",
    text: "撤収まで、現場品質。"
  }
];

const services = ["単管足場", "くさび式足場", "ビケ足場", "IQ部材", "計画", "撤収"];
const looks = ["SAFETY", "RELIABILITY", "FULL SUPPORT"];
const lookImages = [
  { src: "/images/look-worker.png", alt: "井上組の職人ポートレート" },
  { src: "/images/look-hands.png", alt: "足場部材を締める手元" },
  { src: "/images/look-site.png", alt: "足場が組まれた建設現場" }
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.32], ["0%", "3%"]);
  const beamX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <main className="min-h-screen bg-iron text-[#f8f7f2]">
      <SiteNav />
      <MusicController />

      <section id="home" className="relative h-screen min-h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
          aria-hidden="true"
        >
          <HeroImageStage />
        </motion.div>

        <div className="relative z-10 flex h-screen min-h-screen items-center justify-center px-6 text-center sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[7rem] font-bold leading-none tracking-normal text-white sm:text-[11rem] lg:text-[16rem]"
            >
              組む。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg font-bold text-white/76 sm:text-2xl"
            >
              Invisible work. Visible trust.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="bg-white px-8 py-4 text-sm font-black tracking-[0.14em] text-iron transition hover:bg-signal"
              >
                採用を見る
              </a>
              <a
                href="#services"
                className="bg-signal px-8 py-4 text-sm font-black tracking-[0.14em] text-iron transition hover:bg-white"
              >
                実績を見る
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        className="pointer-events-none fixed inset-y-0 left-1/2 z-20 hidden w-20 bg-signal/8 blur-2xl lg:block"
        style={{ x: beamX }}
        aria-hidden="true"
      />

      <LookSection />

      <SectionShell id="services" eyebrow="Services" title="Plan. Build. Strike.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <BuildBlock key={service} delay={index * 0.06}>
              <div className="group flex min-h-52 items-end justify-between border border-white/10 bg-white/[0.025] p-8 transition hover:border-signal/70 hover:bg-white/[0.055]">
                <span className="max-w-[12rem] text-4xl font-black leading-none">{service}</span>
                <ArrowUpRight className="h-6 w-6 text-signal transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </BuildBlock>
          ))}
        </div>
      </SectionShell>

      <section className="bg-black px-6 py-32 sm:px-10 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-7xl">
          <BuildBlock>
            <div className="mb-20 max-w-5xl">
              <p className="text-sm font-black uppercase tracking-[0.34em] text-signal">Crew</p>
              <h2 className="mt-8 font-display text-7xl font-bold leading-[0.88] text-white sm:text-8xl lg:text-[10rem]">
                WORKERS
                <br />
                AS ICONS.
              </h2>
            </div>
          </BuildBlock>

          <div className="grid gap-6 lg:grid-cols-3">
            {looks.map((look, index) => (
              <BuildBlock key={look} delay={index * 0.08}>
                <div className="model-frame group relative min-h-[34rem] overflow-hidden border border-white/10 bg-[#08090b]">
                  <div className="structure-shadow absolute inset-0 opacity-18 transition duration-700 group-hover:scale-105 group-hover:opacity-24" />
                  <div className="metal-texture absolute inset-0 opacity-20 mix-blend-screen" />
                  <div className="runway-worker" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="font-display text-5xl font-bold leading-none text-white">{look}</p>
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-signal">
                      Inoue Gumi
                    </p>
                  </div>
                </div>
              </BuildBlock>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="construction-grid border-y border-white/10 bg-[#090a0c] px-6 py-32 sm:px-10 lg:px-16 lg:py-44">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-sm font-black uppercase tracking-[0.34em] text-signal">Trust</p>
            <h2 className="mt-8 font-display text-7xl font-bold leading-[0.9] text-white sm:text-8xl lg:text-9xl">
              SAFETY
              <br />
              IS STYLE.
            </h2>
            <p className="mt-10 max-w-xl text-lg font-bold leading-9 text-white/70">
              段取り、声掛け、撤収まで。信頼は細部で決まる。
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {trustCards.map((card, index) => (
              <BuildBlock key={card.title} delay={index * 0.08}>
                <article className="min-h-96 border border-white/10 bg-black/64 p-8 shadow-hard backdrop-blur-sm">
                  <card.icon className="h-9 w-9 text-signal" />
                  <h3 className="mt-16 text-4xl font-black leading-none text-white">{card.title}</h3>
                  <p className="mt-6 text-base font-medium leading-8 text-white/62">{card.text}</p>
                </article>
              </BuildBlock>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f2eb] px-6 py-32 text-iron sm:px-10 lg:px-16 lg:py-44">
        <div className="absolute inset-x-0 top-0 h-2 bg-signal" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.12] structure-shadow" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <BuildBlock>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.34em] text-iron/60">
                Philosophy
              </p>
              <h2 className="mt-8 font-display text-7xl font-bold leading-[0.9] sm:text-8xl lg:text-9xl">
                FULL
                <br />
                SUPPORT.
              </h2>
            </div>
          </BuildBlock>

          <BuildBlock delay={0.1}>
            <div className="grid gap-4">
              {["安全第一", "工程遵守", "近隣配慮"].map((item) => (
                <div key={item} className="flex items-center gap-5 border-b border-iron/18 py-8">
                  <CheckCircle2 className="h-8 w-8 text-signal" />
                  <span className="text-4xl font-black leading-none">{item}</span>
                </div>
              ))}
            </div>
          </BuildBlock>
        </div>
      </section>

      <FinalCta />

      <section id="contact" className="bg-iron px-6 py-32 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 border-t border-white/12 pt-14 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.34em] text-signal">Contact</p>
            <h2 className="mt-8 font-display text-7xl font-bold leading-[0.9] text-white sm:text-8xl">
              現場相談を
              <br />
              ここから。
            </h2>
          </div>
          <div className="grid gap-4 text-base font-bold leading-8 text-white/68">
            <InfoRow label="会社名" value="株式会社 井上組（仮）" />
            <InfoRow label="住所" value="〒000-0000 住所を後ほど追記" />
            <InfoRow label="電話" value="000-0000-0000" />
            <InfoRow label="対応エリア" value="対応エリアを後ほど追記" />
          </div>
        </div>
      </section>
    </main>
  );
}

function FinalCta() {
  return (
    <section className="relative flex min-h-[76vh] items-center justify-center overflow-hidden px-6 py-32 text-center sm:px-10 lg:px-16 lg:py-44">
      <img
        src="/images/final-cta.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <BuildBlock>
          <p className="text-sm font-black uppercase tracking-[0.34em] text-white/62">
            Join Inoue-gumi
          </p>
          <h2 className="mt-8 font-display text-6xl font-bold leading-[0.92] text-white sm:text-8xl lg:text-[10rem]">
            この現場に、
            <br />
            来るか。
          </h2>
          <a
            href="#contact"
            className="mt-12 inline-flex items-center justify-center border border-white bg-transparent px-10 py-5 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
          >
            ENTRY
          </a>
        </BuildBlock>
      </div>
    </section>
  );
}

function LookSection() {
  return (
    <section className="bg-black px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-3">
          {lookImages.map((image, index) => (
            <BuildBlock key={image.src} delay={index * 0.06}>
              <figure className="group">
                <div className="aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-5 text-[0.68rem] font-black uppercase tracking-[0.34em] text-white/42">
                  INOUE-GUMI
                </figcaption>
              </figure>
            </BuildBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function MusicController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <audio
        ref={audioRef}
        src="/audio/gatts-baby.mp3"
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />
      <button
        type="button"
        onClick={toggleAudio}
        className="group flex h-14 min-w-14 items-center gap-3 border border-white/15 bg-black/82 px-4 text-sm font-black text-white shadow-hard backdrop-blur-xl transition hover:border-signal hover:bg-white hover:text-iron"
        aria-label={isPlaying ? "音楽を停止" : "音楽を再生"}
        title={isPlaying ? "音楽を停止" : "音楽を再生"}
      >
        <Volume2 className="h-5 w-5 text-signal group-hover:text-iron" />
        <span className="hidden sm:inline">Gatts Baby</span>
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>
    </div>
  );
}

function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-black/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="#home" className="font-display text-3xl font-bold text-white">
          井上組
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-white/62 transition hover:bg-white/8 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="clip-slab bg-signal px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-iron transition hover:bg-white"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function HeroImageStage() {
  return (
    <div className="relative h-full w-full">
      <img
        src="/images/hero-scaffold.png"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="bg-iron px-6 py-32 sm:px-10 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <BuildBlock>
          <div className="mb-20 flex flex-col justify-between gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.34em] text-signal">{eyebrow}</p>
              <h2 className="mt-8 font-display text-7xl font-bold leading-[0.9] text-white sm:text-8xl lg:text-9xl">
                {title}
              </h2>
            </div>
            <p className="max-w-lg text-lg font-bold leading-9 text-white/62">
              後から実績写真、施工動画、スクロール連動の立体演出を追加しやすい、余白を大きく取ったグリッドです。
            </p>
          </div>
        </BuildBlock>
        {children}
      </div>
    </section>
  );
}

function BuildBlock({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ delay, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      className="origin-bottom"
    >
      {children}
    </motion.div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[104px_1fr] gap-6 border-b border-white/10 py-5">
      <span className="font-black text-signal">{label}</span>
      <span>{value}</span>
    </div>
  );
}
