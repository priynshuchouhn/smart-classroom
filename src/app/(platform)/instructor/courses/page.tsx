import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function CoursePage() {
  return (
    <div className='p-6'>
      <Link href={'/instructor/courses/create'}>
        <Button>
          New Course
        </Button>
      </Link>
    </div>
  )
}

export default CoursePage
