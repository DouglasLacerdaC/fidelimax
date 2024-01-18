interface TitleProps {
  text: string
}

export function Title({ text }: TitleProps) {
  return (
    <h2 className="text-2xl font-semibold">
      {text}
    </h2>
  )
}