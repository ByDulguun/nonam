// app/layout.js
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Greativity",
  description: "Creative Agency",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757399731/red_1_aqqyqa.png",
        type: "image/png",
        sizes: "32x32", // tab icon
      },
      {
        url: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757399731/red_1_aqqyqa.png",
        type: "image/png",
        sizes: "64x64", // higher resolution for retina
      },
      {
        url: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757399731/red_1_aqqyqa.png",
        type: "image/png",
        sizes: "128x128", // PWA / large displays
      },
    ],
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
