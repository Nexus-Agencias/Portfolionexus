import { WHATSAPP_URL } from '../data'

const linkClasses =
  'text-base text-[#051A24] transition-opacity duration-200 hover:opacity-70'

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1200px] px-6 pt-16 pb-28 md:pb-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="./photos/logo/logo.png"
              alt="NEXUS"
              loading="lazy"
              className="h-16 w-16 rounded-full object-contain"
            />
            <p className="text-xs tracking-[0.2em] text-[#051A24]/60">
              AGÊNCIA DIGITAL
            </p>
          </div>
          <p className="mt-5 max-w-md leading-relaxed text-[#051A24]/80">
            Presença digital que vende todos os dias. Sites, tráfego pago e
            estratégia para empresas que querem crescer com autoridade.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-[#051A24]">
            Navegação
          </p>
          <nav className="mt-4 flex flex-col items-start gap-3">
            <a href="#services" className={linkClasses}>
              Serviços
            </a>
            <a href="#process" className={linkClasses}>
              Processo
            </a>
            <a href="#work" className={linkClasses}>
              Portfólio
            </a>
            <a href="#faq" className={linkClasses}>
              FAQ
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              Contato
            </a>
          </nav>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-[#051A24]/10 pt-6 text-[#051A24]">
        <a
          href="https://wa.me/5579996817114"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-base transition-opacity duration-200 hover:opacity-70"
        >
          WhatsApp · +55 79 99681-7114
        </a>
        <div className="flex flex-col gap-1 md:flex-row md:gap-6">
          <a
            href="https://www.instagram.com/clevertonoliver.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-base transition-opacity duration-200 hover:opacity-70"
          >
            @clevertonoliver.dev
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-[#051A24]/10 pt-6 text-sm text-[#051A24] md:flex-row md:items-center">
        <p>© 2026 NEXUS Agência Digital. Todos os direitos reservados.</p>
        <p>Feito com precisão por NEXUS.</p>
      </div>
    </footer>
  )
}
