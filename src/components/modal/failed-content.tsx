import { Bomb } from "lucide-react";
import { ReactNode } from "react";

interface FailedContentProps {
  children: ReactNode
  onClose?: () => void
}

export function FailedContent({ children, onClose }: FailedContentProps) {
  return (
    <div className="text-center flex items-center flex-col gap-8">
      <div className="w-fit p-6 rounded-full bg-red-50">
        <Bomb size={64} strokeWidth={1.5} className="text-red-700" />
      </div>

      {children}

      <div>
        <button 
          type="button" 
          className="p-3 rounded-lg bg-red-700 text-white"
          onClick={onClose}
        >
          Fechar janela
        </button>
      </div>
    </div>
  )
}