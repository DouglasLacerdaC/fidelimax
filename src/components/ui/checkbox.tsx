import { ComponentProps } from "react";

interface CheckboxProps extends ComponentProps<'input'> {
  label: string
  error?: string
}

export function Checkbox({ label, error, ...props }: CheckboxProps) {
  return (
    <div data-error={!!error} className="w-fit flex items-center justify-center gap-2 data-[error=true]:text-red-500">
      <input 
        className="w-4 h-4 accent-gray-700" 
        type="checkbox" 
        {...props} 
      />
      
      <label htmlFor={props.id} className="text-sm font-medium">
        {label}
      </label>
    </div>
  )
}