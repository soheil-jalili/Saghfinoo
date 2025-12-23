import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/module/Footer/Footer";
import Header from "@/components/module/Header/Header";
import ReduxProvider from "./(redux)/ReduxProvider";

export const metadata: Metadata = {
  title: "Saghfinoo",
  description:
    "پروژه «سقفینو» پلتفرمی آنلاین برای خرید، فروش و اجاره املاک است.",
};
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { [key: string]: string | string[] };
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
