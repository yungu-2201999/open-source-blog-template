'use client' // Error boundaries must be Client Components

export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
       <div className="text-white text-center ">
         Not Found 
        </div>
    </>
  )
}