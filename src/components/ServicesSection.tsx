import {
  Globe,
  Rocket,
  ShoppingBag,
  Megaphone,
  Palette,
  Zap,
  Search,
  LineChart,
  Utensils,
} from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

function fadeProps(inView: boolean, delay: number) {
  return {
    className: inView ? 'animate-fade-in-up' : 'opacity-0',
    style: { animationDelay: `${delay}s` },
  }
}

const services = [
  {
    title: 'Sites Profissionais',
    description:
      'Institucionais rápidos, responsivos e focados em conversão.',
    icon: Globe,
  },
  {
    title: 'Landing Pages',
    description:
      'Páginas de alta performance para campanhas e lançamentos.',
    icon: Rocket,
  },
  {
    title: 'Lojas Virtuais',
    description: 'E-commerces modernos com checkout otimizado.',
    icon: ShoppingBag,
  },
  {
    title: 'Cardápio Digital',
    description:
      'Menus interativos com pedidos pelo WhatsApp para lanchonetes e restaurantes.',
    icon: Utensils,
  },
  {
    title: 'Tráfego Pago',
    description: 'Google, Facebook e Instagram Ads com ROI mensurável.',
    icon: Megaphone,
  },
  {
    title: 'Identidade Visual',
    description:
      'Branding que posiciona sua marca acima da concorrência.',
    icon: Palette,
  },
  {
    title: 'Otimização & Automação',
    description: 'Fluxos que reduzem fricção e aumentam conversão.',
    icon: Zap,
  },
  {
    title: 'SEO',
    description:
      'Aparecer no Google quando o cliente está pronto para comprar.',
    icon: Search,
  },
  {
    title: 'Consultoria Digital',
    description: 'Estratégia sob medida para escalar sua operação.',
    icon: LineChart,
  },
]

export default function ServicesSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>()

  return (
    <section
      ref={ref}
      id="services"
      className="mx-auto w-full max-w-[1200px] px-6 py-12 md:py-16"
    >
      <div className="flex flex-col items-center text-center">
        <h2
          {...fadeProps(inView, 0.1)}
          className="font-serif text-[40px] leading-[1.05] tracking-tight text-[#0D212C] md:text-[56px]"
        >
          Serviços
        </h2>
        <p
          {...fadeProps(inView, 0.2)}
          className="mt-4 max-w-xl text-xl leading-snug text-[#051A24] md:text-2xl"
        >
          Tudo o que sua marca precisa para vender online.
        </p>
        <p
          {...fadeProps(inView, 0.3)}
          className="mt-3 max-w-2xl text-sm leading-relaxed text-[#051A24]/70 md:text-base"
        >
          Da primeira linha de código à primeira venda: cuidamos de estratégia,
          design, desenvolvimento e mídia.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              {...fadeProps(inView, 0.15 + i * 0.05)}
              className="group flex flex-col rounded-[24px] bg-white p-6 shadow-[0_1px_2px_0_rgba(5,26,36,0.05),0_4px_16px_rgba(5,26,36,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(5,26,36,0.12)]"
            >
              <Icon
                className="h-6 w-6 text-[#051A24] transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="mt-4 font-medium text-[#051A24]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#051A24]/70">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
