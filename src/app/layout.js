import "./globals.css";

export const metadata = {
  title: "PepeRuney",
  description: "Welcome back! Please enter your details.",
  openGraph: {
    title: "PepeRuney",
    description: "Welcome back! Please enter your details.",
    images: [
      {
        url: "/meta-image.webp",
        width: 800,
        height: 600,
        alt: "PepeRuney Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PepeRuney",
    description: "Welcome back! Please enter your details.",
    images: ["/meta-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
