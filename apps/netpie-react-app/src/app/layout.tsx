import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from "@/context/ThemeContext";
import '../styles/globals.scss'

const metaTitle = 'Moda';
const metaDescription =
    'Jumpstart your Next project with this starter. Easily manage your content and scale your application without the backend hassle. Get started now!';
const metaImage = '/thumbnail.jpg';

export const metadata: Metadata = {
    metadataBase: new URL('https://e-commerce-starter.thebcms.com'),
    alternates: {
        canonical: '/',
    },
    title: metaTitle,
    description: metaDescription,
    openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: 'website',
        images: [metaImage],
        siteName: metaTitle,
    },
    twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
        images: [metaImage],
        site: '@thebcms',
        creator: '@thebcms',
    },
};

const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <main className="App">{children}</main>
        </ThemeProvider>
        </body>
        </html>
    );
};

export default RootLayout;
