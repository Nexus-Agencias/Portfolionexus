import { useEffect, useRef } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { marqueeImages, WHATSAPP_URL } from '../data'

function fadeProps(inView: boolean, delay: number) {
  return {
    className: inView ? 'animate-fade-in-up' : 'opacity-0',
    style: { animationDelay: `${delay}s` },
  }
}

export default function PartnerSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const lastSpawnRef = useRef(0)
  const rafRef = useRef(0)
  const itemsRef = useRef<{ el: HTMLImageElement; createdAt: number }[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const spawn = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect()
      const size = 120
      const img = document.createElement('img')
      img.src =
        marqueeImages[Math.floor(Math.random() * marqueeImages.length)]
      img.alt = ''
      img.style.position = 'absolute'
      img.style.left = `${clientX - rect.left - size / 2}px`
      img.style.top = `${clientY - rect.top - size / 2}px`
      img.style.width = `${size}px`
      img.style.height = `${size}px`
      img.style.objectFit = 'cover'
      img.style.borderRadius = '16px'
      img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`
      img.style.transition = 'opacity 1000ms ease, transform 1000ms ease'
      img.style.pointerEvents = 'none'
      container.appendChild(img)

      itemsRef.current.push({ el: img, createdAt: performance.now() })
      requestAnimationFrame(() => {
        img.style.opacity = '0'
        img.style.transform = `scale(0.7) rotate(${Math.random() * 20 - 10}deg)`
      })
    }

    const onMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastSpawnRef.current < 80) return
      lastSpawnRef.current = now
      spawn(e.clientX, e.clientY)
    }

    const loop = () => {
      const now = performance.now()
      itemsRef.current = itemsRef.current.filter(({ el, createdAt }) => {
        if (now - createdAt > 1100) {
          el.remove()
          return false
        }
        return true
      })
      rafRef.current = requestAnimationFrame(loop)
    }

    container.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      container.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      itemsRef.current.forEach(({ el }) => el.remove())
      itemsRef.current = []
    }
  }, [])

  return (
    <section ref={ref} className="w-full px-6 py-12">
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[40px] bg-white py-24 shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:py-48"
      >
        <div className="relative z-10 flex flex-col items-center px-6">
          <h2
            {...fadeProps(inView, 0.1)}
            className="mb-12 text-center font-serif text-[48px] leading-none tracking-tight text-[#0D212C] md:text-[64px] lg:text-[80px]"
          >
            Partner with us
          </h2>

          <img
            {...fadeProps(inView, 0.2)}
            src="/photos/seo/ad7b0d66-0b14-4f3d-933e-7e145fe7e0400.png"
            alt="Cleverton Oliver"
            loading="lazy"
            className="mb-12 w-full max-w-xs rounded-2xl shadow-lg"
          />

          <a
            {...fadeProps(inView, 0.3)}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#051A24] py-2 pr-7 pl-2 text-white shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <img
              src="/photos/seo/ad7b0d66-0b14-4f3d-933e-7e145fe7e0400.png"
              alt="Cleverton Oliver"
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-sm font-medium md:text-base">
              Start chat with Cleverton Oliver
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
