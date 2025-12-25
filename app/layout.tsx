import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Óptica Domínguez Romero",
  description: "Profesionales de la visión en Las Palmas y Gáldar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-optica-blue`}>
        <Navbar />
        <main className="min-h-screen px-4 md:px-8 max-w-6xl mx-auto py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
