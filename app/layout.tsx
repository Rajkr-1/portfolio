import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { SmoothScroll } from '@/components/animations/smooth-scroll';
import { PageTransition } from '@/components/animations/page-transition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raj Kumar  - Full Stack Developer',
  description: 'Computer Science Student at Techno India University || Full Stack Developer passionate about building innovative web applications',
  keywords: 'Raj Kumar, Full Stack Developer, React, Next.js, TypeScript, Portfolio, Computer Science',
  authors: [{ name: 'Raj Kumar' }],
  creator: 'Raj Kumar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <PageTransition>
            {children}
          </PageTransition>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}