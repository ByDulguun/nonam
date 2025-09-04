import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./globals.css";

export const metadata = {
  title: "Greativity",
  description: "Creative Agency",
  icons: {
    icon: "/headerlogo.png",
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
