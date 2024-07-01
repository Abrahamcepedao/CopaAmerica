import AppLayout from "@/components/layout/app/AppLayout"

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <AppLayout>
        {children}
    </AppLayout>
  )
}