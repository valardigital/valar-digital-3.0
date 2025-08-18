export type DotSeparatorProps = {
  id?: string
}

export const DotSeparator: React.FC<DotSeparatorProps> = () => {
  return (
    <div className="w-full flex items-center justify-center my-8 md:my-10">
      <div className="flex items-center gap-2" aria-hidden>
        <span className="w-1.5 h-1.5 rounded-full bg-text-light/70"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-text-light/70"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-text-light/70"></span>
      </div>
    </div>
  )
}

