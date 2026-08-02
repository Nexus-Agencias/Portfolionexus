import Button from './Button'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { WHATSAPP_URL } from '../data'

function fadeProps(inView: boolean, delay: number) {
  return {
    className: inView ? 'animate-fade-in-up' : 'opacity-0',
    style: { animationDelay: `${delay}s` },
  }
}

const CEO_INSTAGRAM = 'https://www.instagram.com/clevertonoliver.dev/'
const AGENCY_INSTAGRAM = 'https://www.instagram.com/agenciasnexus_/'

export default function PricingSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>()

  return (
    <section ref={ref} className="w-full px-6 py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <img
          {...fadeProps(inView, 0.1)}
          src="./photos/seo/foto 2.jpeg"
          alt="Cleverton Oliver, fundador da NEXUS"
          loading="lazy"
          className="w-full rounded-[40px] object-cover shadow-lg"
        />

        <div>
          <p
            {...fadeProps(inView, 0.2)}
            className="text-lg leading-relaxed text-[#0D212C] md:text-xl"
          >
            Fundador da NEXUS, Cleverton reúne mais de uma década entre
            desenvolvimento, design e marketing digital. Lidera pessoalmente
            cada projeto para garantir padrão de agência premium — do primeiro
            contato à entrega final.
          </p>

          <div
            {...fadeProps(inView, 0.3)}
            className="mt-10 flex flex-col items-start gap-3 sm:flex-row"
          >
            <Button
              variant="primary"
              href={CEO_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram do CEO
            </Button>
            <Button
              variant="primary"
              href={AGENCY_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram da Agência
            </Button>
            <Button
              variant="secondary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com o CEO
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
