import { ComponentProps } from "react";

interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea 
      className="w-full p-4 rounded-lg border font-medium resize-none outline-none transition border-gray-400 text-gray-500 placeholder:text-gray-500 focus:shadow-focus"
      {...props}
    />
  )
}