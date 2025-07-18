// app/layout.tsx or app/layout.js
import "./globals.css";

export const metadata = {
  title: "Your LIC Agent",
  description: "A platform to facilitate seamless interaction between LIC agents and clients.",
  icons: {
    icon: [
      { url: "/myageny_logo.png", sizes: "64x64", type: "image/png" }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
