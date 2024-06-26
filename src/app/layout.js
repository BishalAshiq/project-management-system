import { Inter } from "next/font/google";
import "./globals.css";
// import 'antd/dist/antd.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Management System",
  description: "Project Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
