type Props = {
  title: string
}

export function DevicePreview({ title }: Props) {
  return (
    <div className="relative">
      <div
        aria-label={`${title} desktop preview`}
        className="mx-auto aspect-[16/10] w-full rounded-lg border border-border bg-card shadow-inner"
      >
        <img src="/desktop-ui-preview.jpg" alt="" className="h-full w-full rounded-lg object-cover opacity-95" />
      </div>
      <div className="mx-auto h-2 w-20 rounded-b bg-muted" aria-hidden />
      <div className="mx-auto mt-1 h-1 w-28 rounded bg-muted" aria-hidden />
      <div
        aria-label={`${title} mobile preview`}
        className="absolute -bottom-2 right-3 aspect-[9/19] w-20 rounded-2xl border border-border bg-background shadow"
      >
        <div className="mx-auto mt-1 h-1.5 w-10 rounded bg-muted" aria-hidden />
        <img src="/generic-mobile-app.png" alt="" className="h-[calc(100%-6px)] w-full rounded-b-2xl object-cover" />
      </div>
    </div>
  )
}
