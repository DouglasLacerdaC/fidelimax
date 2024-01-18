import { ReactNode } from "react";

interface RootProps {
  children: ReactNode,
  isOpen: boolean
}

export function Root({ children, isOpen }: RootProps) {
  return (
    <div data-open={isOpen} className="group opacity-0 invisible grid place-items-center transition fixed top-0 left-0 w-screen h-screen bg-gray-600/40 backdrop-blur-sm data-[open=true]:opacity-100 data-[open=true]:visible">
      <section className="mx-8 scale-150 blur-3xl rounded-lg max-w-lg p-12 bg-white transition duration-300 group-data-[open=true]:scale-100 group-data-[open=true]:blur-0">
        {children}
      </section>
    </div>
  )
}