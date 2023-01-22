import React from 'react'

export default function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert" className=''>
      <h1>An error occured</h1>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
