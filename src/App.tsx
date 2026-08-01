import { useInViewAnimation } from './hooks/useInViewAnimation'
import { marqueeImages, WHATSAPP_URL } from './data'
import TestimonialSection from './components/TestimonialSection'
import PricingSection from './components/PricingSection'
import TestimonialCarousel from './components/TestimonialCarousel'
import ProjectsSection from './components/ProjectsSection'
import ServicesSection from './components/ServicesSection'
import PartnerSection from './components/PartnerSection'
import Footer from './components/Footer'
import CopyrightBar from './components/CopyrightBar'
import BottomNav from './components/BottomNav'
import FluidCursor from './components/FluidCursor'

function fadeProps(inView: boolean, delay: number) {
  return {
    className: inView ? 'animate-fade-in-up' : 'opacity-0',
    style: { animationDelay: `${delay}s` },
  }
}

const heroTokens = [
  { text: '</>', left: '6%', top: '16%', size: 18, dur: 9, delay: 0 },
  { text: '{ }', left: '12%', top: '58%', size: 14, dur: 11, delay: 1.2 },
  { text: 'const', left: '86%', top: '20%', size: 15, dur: 10, delay: 0.5 },
  { text: '=>', left: '81%', top: '64%', size: 20, dur: 8, delay: 2 },
  { text: 'function', left: '18%', top: '80%', size: 13, dur: 12, delay: 0.8 },
  { text: '()', left: '90%', top: '84%', size: 16, dur: 9.5, delay: 1.6 },
  { text: 'return', left: '7%', top: '40%', size: 12, dur: 10.5, delay: 0.3 },
  { text: 'import', left: '74%', top: '44%', size: 13, dur: 11.5, delay: 1.1 },
  { text: '#', left: '24%', top: '32%', size: 22, dur: 8.5, delay: 0.1 },
  { text: '_', left: '68%', top: '9%', size: 24, dur: 9.2, delay: 2.2 },
  { text: 'while', left: '31%', top: '90%', size: 14, dur: 12.5, delay: 0.7 },
  { text: '&&', left: '60%', top: '76%', size: 16, dur: 10.8, delay: 1.4 },
  { text: 'console.log', left: '88%', top: '52%', size: 12, dur: 13, delay: 0.9 },
  { text: '<div>', left: '42%', top: '12%', size: 14, dur: 9.8, delay: 1.8 },
  { text: 'if', left: '47%', top: '82%', size: 16, dur: 10.2, delay: 0.4 },
  { text: 'export', left: '55%', top: '46%', size: 12, dur: 11.8, delay: 1.3 },
]

const heroLogos = [
  { left: '4%', top: '8%', size: 56, dur: 10, delay: 0 },
  { left: '12%', top: '62%', size: 40, dur: 13, delay: 1.4 },
  { left: '20%', top: '26%', size: 30, dur: 9, delay: 2.1 },
  { left: '31%', top: '82%', size: 48, dur: 12, delay: 0.6 },
  { left: '42%', top: '6%', size: 34, dur: 11, delay: 1.9 },
  { left: '53%', top: '78%', size: 60, dur: 10.5, delay: 0.3 },
  { left: '64%', top: '22%', size: 38, dur: 12.5, delay: 2.4 },
  { left: '74%', top: '70%', size: 44, dur: 9.5, delay: 1.1 },
  { left: '84%', top: '12%', size: 52, dur: 11.5, delay: 0.9 },
  { left: '92%', top: '56%', size: 34, dur: 13.5, delay: 1.7 },
]

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-grid absolute inset-0" />
      {heroLogos.map((l, i) => (
        <img
          key={`logo-${i}`}
          src="/photos/logo/logo.png"
          alt=""
          aria-hidden="true"
          className="hero-logo"
          style={{
            left: l.left,
            top: l.top,
            width: `${l.size}px`,
            animationDuration: `${l.dur}s`,
            animationDelay: `${l.delay}s`,
          }}
        />
      ))}
      {heroTokens.map((t, i) => (
        <span
          key={i}
          className="hero-token"
          style={{
            left: t.left,
            top: t.top,
            fontSize: `${t.size}px`,
            animationDuration: `${t.dur}s`,
            animationDelay: `${t.delay}s`,
          }}
        >
          {t.text}
        </span>
      ))}
    </div>
  )
}

function Hero() {
  const { ref, inView } = useInViewAnimation<HTMLElement>()

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-black">
      <HeroBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-12 text-center md:pt-16">
      <img
        src="/photos/logo/logo.jpg"
        alt="Logo da agência"
        className={`mb-4 w-32 md:w-40 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      />

      <p
        {...fadeProps(inView, 0.2)}
        className="mb-2 font-mono text-xs text-white/80 md:text-sm"
      >
        Agência Digital · Estúdio de Performance
      </p>

      <h1
        {...fadeProps(inView, 0.3)}
        className="text-[32px] leading-[1.1] tracking-tight text-white md:text-[40px] lg:text-[44px]"
      >
        Presença digital <span className="font-serif">que vende</span>
        <br />
        <span className="font-serif">todos os dias</span>
      </h1>

      <div
        {...fadeProps(inView, 0.4)}
        className="mt-5 flex flex-col gap-6 text-sm leading-relaxed text-white/80 md:mt-6 md:text-base"
      >
        <p>
          Criamos sites Premium com animações realistas, campanha de tráfego e
          estratégia de marcas que transformam visitas em clientes — com design
          de referência mundial e obsessão por resultados.
        </p>
        <p>
          O estúdio é deliberadamente pequeno. Eu guio a visão criativa em cada
          projeto, apoiado por uma equipe veterana de design que se move rápido
          sem cortar caminho.
        </p>
        <p>Faça um orçamento sem compromisso.</p>
      </div>

      <div
        {...fadeProps(inView, 0.5)}
        className="mt-5 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-6 md:gap-4"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full cursor-pointer rounded-full bg-white px-7 py-3 text-center text-sm font-medium text-[#051A24] shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)] transition-transform duration-200 active:scale-[0.98] sm:w-auto md:text-base"
        >
          Faça seu orçamento aqui sem compromisso
        </a>
        <a
          href="#work"
          className="w-full cursor-pointer rounded-full border border-white/30 px-7 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto md:text-base"
        >
          Ver projetos
        </a>
      </div>
      </div>
    </section>
  )
}

function Marquee() {
  const doubled = [...marqueeImages, ...marqueeImages]

  return (
    <div className="mt-16 mb-16 w-full overflow-hidden md:mt-20">
      <div className="flex w-max animate-marquee-mobile md:animate-marquee">
        {doubled.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            className={`mx-3 h-[220px] rounded-2xl object-cover shadow-lg sm:h-[280px] md:h-[500px] ${
              i % 2 === 1 ? 'hidden sm:block' : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#051A24] antialiased">
      <FluidCursor />
      <Hero />
      <Marquee />
      <TestimonialSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </main>
  )
}
