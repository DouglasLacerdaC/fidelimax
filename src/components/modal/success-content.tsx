import { Rocket } from "lucide-react";
import { ReactNode } from "react";

interface SuccessContentProps {
  children: ReactNode,
  onClose?: () => void
}

export function SuccessContent({ children, onClose }: SuccessContentProps) {
  return (
    <div className="text-center flex items-center flex-col gap-8">
      <div className="w-fit p-6 rounded-full bg-emerald-50">
        <Rocket size={64} strokeWidth={1.5} className="text-emerald-700" />
      </div>

      {children}

      <div>
        <button 
          type="button"
          className="p-3 rounded-lg bg-emerald-700 text-white"
          onClick={onClose}
        >
          Fechar janela
        </button>
      </div>
    </div>
  )
}