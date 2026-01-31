import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'CunaguarosDev.web | Innovación Digital',
  description: 'Desarrollo de software de alto impacto con estética neón.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' className='dark'>
      <head>
        {/* Cargamos los iconos de Google */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap'
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-display`}>
        {children}
      </body>
    </html>
  );
}
