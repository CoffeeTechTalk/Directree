import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Sidebar = ({
  className,
  children,
  ...props
}: ComponentProps<'aside'>): JSX.Element => {
  return (
    <aside
      className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)}
      {...props}
    >
      {children}
    </aside>
  )
}
