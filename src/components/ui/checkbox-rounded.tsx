import { ComponentProps } from "react";

interface CheckboxRoundedProps extends ComponentProps<'input'> {
  label: string
  error?: string
}

export function CheckboxRounded({ label, error, ...props }: CheckboxRoundedProps) {
  return (
    <div data-error={!!error} className="w-fit flex items-center justify-center gap-2 data-[error=true]:text-red-500">
      <input
        className="peer hidden"
        type="checkbox" 
        {...props} 
      />

      <label 
        htmlFor={props.id} 
        className="px-4 py-2 rounded-full font-medium border border-gray-300 text-sm transition duration-500 cursor-pointer peer-checked:bg-yellow-800 peer-checked:border-yellow-800 hover:bg-orange-400"
      >
        {label}
      </label>
    </div>
  )
}