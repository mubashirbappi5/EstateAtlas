
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function withAuth(Component: React.FC) {
  return function ProtectedComponent(props: React.ComponentProps<typeof Component>) {
    const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/login')
      }
    }, [])

    return <Component {...props} />
  }
}
