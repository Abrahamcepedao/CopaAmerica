import AuthLayout from "@/components/layout/auth/AuthLayout"

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <AuthLayout>
        {children}
    </AuthLayout>
  )
}