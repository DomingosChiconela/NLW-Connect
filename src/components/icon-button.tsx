//import {ArrowRight} from "lucide-react"

import { twMerge } from 'tailwind-merge'



import type { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export  function IconButton({className,...props}: ButtonProps) {
  return (
    <button
      className={twMerge("p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300 ",className)}
      {...props}
    />
  )
}
