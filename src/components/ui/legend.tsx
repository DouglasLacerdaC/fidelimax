interface LegendProps {
  text: string
  additionalText?: string
}

export function Legend({ text, additionalText }: LegendProps) {
  return (
    <legend className="font-medium">
      {text} {" "}
      {additionalText && 
        <span className="text-sm text-gray-500">
          ({additionalText})
        </span>
      }
    </legend>
  )
}