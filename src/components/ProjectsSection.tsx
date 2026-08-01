import { useInViewAnimation } from '../hooks/useInViewAnimation'

interface Project {
  name: string
  description: string
  video: string
}

const projects: Project[] = [
  {
    name: 'Burger',
    description:
      'Hamburgueria artesanal — site institucional com cardápio digital e pedidos pelo WhatsApp.',
    video: '/videos/2026-08-01 11-19-56.mp4',
  },
  {
    name: 'Pizzaria',
    description:
      'Pizzaria tradicional — site com cardápio, promoções e pedidos online.',
    video: '/videos/2026-08-01 11-20-57.mp4',
  },
  {
    name: 'Roupas e Acessórios',
    description:
      'Loja de moda — e-commerce com vitrine digital e checkout otimizado.',
    video: '/videos/2026-08-01 11-21-39.mp4',
  },
  {
    name: 'Esfirras e Tapiocas',
    description:
      'Casa de salgados — site institucional com cardápio e delivery pelo WhatsApp.',
    video: '/videos/2026-08-01 11-23-22.mp4',
  },
  {
    name: 'Social Media',
    description:
      'Gestão de redes sociais — site com portfólio de conteúdo e formulário de orçamento.',
    video: '/videos/2026-08-01 11-24-38.mp4',
  },
  {
    name: 'Lava-Jato e Estética',
    description:
      'Estética automotiva — site com serviços, agendamento e pacotes promocionais.',
    video: '/videos/2026-08-01 11-25-32.mp4',
  },
]

function ProjectItem({ project }: { project: Project }) {
  const { ref, inView } = useInViewAnimation<HTMLElement>()

  return (
    <article ref={ref}>
      <div className="ml-20 md:ml-28">
        <h3
          className={`font-serif text-2xl font-semibold text-[#051A24] md:text-3xl ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {project.name}
        </h3>
        <p
          className={`mt-2 text-sm text-[#051A24]/70 md:text-base ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          {project.description}
        </p>
      </div>
      <div
        className={`mt-6 overflow-hidden rounded-2xl shadow-lg ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.2s' }}
      >
        <video
          src={project.video}
          controls
          preload="metadata"
          playsInline
          className="h-auto w-full"
        />
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1200px] px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
