interface DescriptionProps {
  text: string
} 

export function Description({ text }: DescriptionProps) {
  return (
    <legend className="text-sm font-medium">
      {text}
    </legend>
  )
}