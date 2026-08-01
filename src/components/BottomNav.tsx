import Button from './Button'
import { WHATSAPP_URL } from '../data'

export default function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)] sm:gap-4 sm:px-8">
        <img
          src="/photos/logo/logo.png"
          alt="NEXUS"
          className="nav-logo h-8 w-8 rounded-full object-contain sm:h-9 sm:w-9"
        />
        <Button
          variant="primary"
          className="px-5 py-2 sm:px-6"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com Oliver
        </Button>
      </div>
    </nav>
  )
}
