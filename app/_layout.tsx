import { Stack } from "expo-router";

export const metadata = {
  title: "My App",
  description: "Using Google Fonts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Stack />
        {children}
      </body>
    </html>
  );
}