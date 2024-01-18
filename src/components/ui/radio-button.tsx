import { ComponentProps } from "react";

interface RadioButtonProps extends ComponentProps<'input'> {
  position?: "vertical" | "horizontal"
  label: string
}

export function RadioButton({ position = "horizontal", label, ...props }: RadioButtonProps) {
  return (
    <div data-position={position} className="w-fit flex items-center justify-center gap-2 cursor-pointer data-[position=vertical]:flex-col">
      <input 
        className="w-4 h-4 accent-gray-700" 
        type="radio" 
        {...props} 
      />
      
      <label htmlFor={props.id} className="text-sm font-medium">
        {label}
      </label>
    </div>
  )
}