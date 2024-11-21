'use client';

import { Suspense } from 'react'

const Contact = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        Contact Page
      </div>
    </Suspense>
  )
}

export default Contact
