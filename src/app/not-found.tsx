'use client' // Error boundaries must be Client Components

export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
    
  return (
    <html>
      <body className="bg-slate-900 text-white">
        Not Found
      </body>
    </html>
  )
}