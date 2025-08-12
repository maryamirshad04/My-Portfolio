import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Maryam Irshad | Creative Developer",
  description:
    "Portfolio of Maryam Irshad, a creative developer skilled in building modern, responsive websites.",
  keywords: [
    "Maryam Irshad",
    "web developer",
    "portfolio",
    "creative developer",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Maryam Irshad" }],
  openGraph: {
    title: "Maryam Irshad | Creative Developer",
    description:
      "Portfolio of Maryam Irshad, showcasing projects, skills, and contact details.",
    images: ["https://my-portfolio-lilac-six-70.vercel.app/Untitled.png"],
    url: "https://my-portfolio-lilac-six-70.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maryam Irshad",
    jobTitle: "Creative Developer",
    url: "https://my-portfolio-lilac-six-70.vercel.app/",
    image: "https://my-portfolio-lilac-six-70.vercel.app/Untitled.png",
    sameAs: [
      "https://www.linkedin.com/in/maryam-irshad-a72333374?",
      "https://github.com/maryamirshad04",
    ],
    description:
      "Portfolio of Maryam Irshad, a creative developer skilled in building modern, responsive websites.",
  };

  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}
