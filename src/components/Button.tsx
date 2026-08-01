import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface ButtonBaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  'aria-label'?: string
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm md:text-base font-medium transition-transform duration-200 active:scale-[0.98] select-none cursor-pointer whitespace-nowrap'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#051A24] text-white px-7 py-3 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]',
  secondary:
    'bg-white text-[#051A24] px-7 py-3 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]',
  tertiary:
    'bg-white text-[#051A24] px-7 py-3 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]',
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  target,
  rel,
  type = 'button',
  onClick,
  ...rest
}: ButtonBaseProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
