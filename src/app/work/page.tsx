import { Suspense } from 'react'

const Work = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>WorkPage</div>
    </Suspense>
  )
}

export default Work
