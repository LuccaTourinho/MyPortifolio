'use client';

import { Suspense} from 'react'

const Resume = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        Resume
      </div>
    </Suspense>
  )
}

export default Resume
