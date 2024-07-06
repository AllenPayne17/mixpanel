import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Healthcare / Mixpanel",
  description: "this is the User clone Interface for the Mixpanel Healthcare project to demonstrate the React Query build. this is a test project only and not intend to use in production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="container md:container lg:container">
          {children}
        </main>
      </body>
    </html>
  );
}
