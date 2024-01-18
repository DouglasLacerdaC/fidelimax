import { ComponentProps } from "react";

interface CustomButtonProps extends ComponentProps<"button"> {
  text: string
}

export function CustomButton({ text, ...props }: CustomButtonProps) {
  return (
    <button className="w-full sm:w-fit text-nowrap py-3 px-4 border rounded-lg transition duration-500 hover:bg-gray-100" type="button" {...props}>
      {text}
    </button>
  )
}