import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Cesium Flight Simulator',
  description: 'A 3D flight simulator using CesiumJS',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Widgets/widgets.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="overflow-hidden">
        <Script src="https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Cesium.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
