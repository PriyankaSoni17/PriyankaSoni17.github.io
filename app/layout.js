import "./globals.css";

export const metadata = {
  title: "Priyanka Soni | Backend & Distributed Systems",
  description: "Software Engineer specializing in Java, Spring Boot, Kafka, AWS and distributed systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
