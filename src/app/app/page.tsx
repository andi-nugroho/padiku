'use client'

const FARM_DEV_URL = 'http://127.0.0.1:5173/'

export default function FarmAppPage() {
  const src = process.env.NODE_ENV === 'development' ? FARM_DEV_URL : '/app/index.html'

  return (
    <iframe
      src={src}
      title="Panora — Enterprise Console"
      className="w-full h-full border-0"
      allow="clipboard-read; clipboard-write"
    />
  )
}
