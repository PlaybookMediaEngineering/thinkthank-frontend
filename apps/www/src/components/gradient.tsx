import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-100',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-100',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
