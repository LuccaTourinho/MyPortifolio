'use client';

import { Suspense } from "react";

const Services = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        Service Page
      </div>
    </Suspense>
  )
}

export default Services
