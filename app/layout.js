export const metadata = {
  title: 'PetWorld - Your Pet Care Companion',
  description: 'Revolutionary pet care platform connecting pet owners with premium services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
