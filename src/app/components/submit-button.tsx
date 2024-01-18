import { Spinner } from "@/components/ui/spinner"

interface SubmitButtonProps {
  isLoading: boolean
}

export function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <button type="submit" className="w-full sm:w-fit px-16 py-3 text-lg font-bold shadow-custom-yellow rounded-full bg-yellow-800">
      {!isLoading ? (
        <span>Enviar fake post</span>
      ) : (
        <Spinner />
      )}
    </button>
  )
}