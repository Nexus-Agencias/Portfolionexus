import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Marcus Anderson',
    role: 'CEO',
    company: 'Data.storage',
    quote:
      'Com muito pouca orientação, o time entregou designs que acertaram em cheio todas as vezes...',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    name: 'Alex Wu',
    role: 'Fundador',
    company: 'Nexgate',
    quote:
      'Cleverton Oliver liderou a criação da nossa melhor apresentação de captação até hoje!...',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
  },
  {
    name: 'James Mitchell',
    role: 'VP de Produto',
    company: 'LaunchPad',
    quote:
      'Trabalhar com Cleverton Oliver transformou a visão do nosso produto...',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
  },
  {
    name: 'Rachel Foster',
    role: 'Co-fundadora',
    company: 'Nexus Labs',
    quote: 'A qualidade do design superou todas as nossas expectativas...',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    name: 'David Zhang',
    role: 'Diretor de Design',
    company: 'Paradigm Labs',
    quote: 'Trabalho incrível do início ao fim...',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
]

const CARD_GAP = 24
const RESET_AT = testimonials.length

function fadeProps(inView: boolean, delay: number) {
  return {
    className: inView ? 'animate-fade-in-up' : 'opacity-0',
    style: { animationDelay: `${delay}s` },
  }
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-[32px] bg-white px-6 py-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:rounded-[40px] md:pl-10 md:pr-24">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-6 w-6 text-[#051A24]/30"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="mt-5 flex-1 text-base leading-relaxed text-[#0D212C]">
        {t.quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-[#051A24]">{t.name}</p>
          <p className="flex items-center gap-1.5 text-sm text-[#273C46]">
            <span aria-hidden="true">→</span>
            {t.role}, {t.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation<HTMLElement>()
  const [pos, setPos] = useState(0)
  const [leaving, setLeaving] = useState<number | null>(null)
  const [noTransition, setNoTransition] = useState(false)
  const [cardUnit, setCardUnit] = useState(427.5 + CARD_GAP)

  const cardRef = useRef<HTMLDivElement | null>(null)
  const posRef = useRef(0)
  const hoverRef = useRef(false)

  useEffect(() => {
    posRef.current = pos
  }, [pos])

  useEffect(() => {
    const measure = () => {
      const el = cardRef.current
      if (el) setCardUnit(el.getBoundingClientRect().width + CARD_GAP)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const step = useCallback(() => {
    const p = posRef.current
    const next = p + 1
    setLeaving(p % testimonials.length)
    if (next >= RESET_AT) {
      setNoTransition(true)
      setPos(0)
    } else {
      setPos(next)
    }
  }, [])

  const prev = useCallback(() => {
    const p = posRef.current
    if (p === 0) {
      setNoTransition(true)
      setPos(RESET_AT - 1)
    } else {
      setPos(p - 1)
    }
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      if (!hoverRef.current) step()
    }, 3000)
    return () => clearInterval(id)
  }, [step])

  useEffect(() => {
    if (noTransition) {
      const id = requestAnimationFrame(() => setNoTransition(false))
      return () => cancelAnimationFrame(id)
    }
  }, [noTransition])

  useEffect(() => {
    if (leaving !== null) {
      const t = setTimeout(() => setLeaving(null), 900)
      return () => clearTimeout(t)
    }
  }, [leaving])

  const cards = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section
      ref={ref}
      className="w-full py-20"
      onMouseEnter={() => {
        hoverRef.current = true
      }}
      onMouseLeave={() => {
        hoverRef.current = false
      }}
    >
      <div
        {...fadeProps(inView, 0.1)}
        className="mb-12 flex flex-col items-start justify-between gap-6 px-6 md:ml-auto md:max-w-4xl md:flex-row md:items-center"
      >
        <h2 className="text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
          O que os <span className="font-serif">clientes</span> dizem
        </h2>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-black text-black" />
          ))}
          <span className="ml-2 text-sm font-medium text-[#0D212C]">
            Avaliação 5/5
          </span>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${pos * cardUnit}px)`,
            transition: noTransition
              ? 'none'
              : 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {cards.map((t, i) => (
            <div
              key={i}
              ref={i === 0 ? cardRef : undefined}
              className={`w-[calc(100%-48px)] shrink-0 md:w-[427.5px] ${
                leaving === i % testimonials.length
                  ? 'scale-95 opacity-0 transition-[opacity,transform] duration-700 ease-out'
                  : ''
              }`}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      <div
        {...fadeProps(inView, 0.2)}
        className="mt-10 flex items-center justify-center gap-3"
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Depoimento anterior"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#0D212C]/20 text-[#0D212C] transition-colors hover:bg-[#051A24] hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={step}
          aria-label="Próximo depoimento"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#0D212C]/20 text-[#0D212C] transition-colors hover:bg-[#051A24] hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
