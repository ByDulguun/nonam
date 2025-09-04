// app/layout.js
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Greativity",
  description: "Creative Agency",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
