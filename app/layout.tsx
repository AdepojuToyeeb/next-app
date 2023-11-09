import { inter } from "@/app/ui/font";
import "@/app/ui/global.css";
import TawkTo from "@/app/ui/tawk";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     {/* <TawkTo /> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
