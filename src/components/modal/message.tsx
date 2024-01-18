interface MessageProps {
  title: string,
  description: string
}

export function Message({ title, description }: MessageProps) {
  return (
    <div>
      <h5 className="text-lg font-semibold mb-2">{title}</h5>
      <p>{description}</p>
    </div>
  )
}