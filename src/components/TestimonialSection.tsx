import { Quote } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

function fadeProps(inView: boolean, delay: number) {
  return {
    className: inView ? 'animate-fade-in-up' : 'opacity-0',
    style: { animationDelay: `${delay}s` },
  }
}

export default function TestimonialSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>()

  return (
    <section
      ref={ref}
      className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-12 text-center"
    >
      <Quote
        {...fadeProps(inView, 0.1)}
        className="h-6 w-6 text-slate-900"
        strokeWidth={1.5}
      />

      <blockquote
        {...fadeProps(inView, 0.2)}
        className="mt-6 text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]"
      >
        Cleverton Oliver — o cérebro por trás da NEXUS
      </blockquote>

      <p
        {...fadeProps(inView, 0.3)}
        className="mt-6 text-sm italic text-[#273C46]"
      >
        Cleverton Oliver
      </p>
    </section>
  )
}
