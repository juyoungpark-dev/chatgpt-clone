import './styles/globals.css'

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'ChatGPT Messenger',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}

          {/* ClientProvider - Notification */}
          
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
