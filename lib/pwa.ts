import { Metadata } from "next";

export const metadataWithPWA = function (metadata: Metadata) {
  const pwaMetadata = {
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
    manifest: '/site.webmanifest',
    authors: [
      { name: 'Yuang Wei' },
      {
        name: 'Yuang Wei',
        url: 'https://yuangwei.com',
      },
    ],
    icons: [
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
      { rel: "icon", url: "/apple-touch-icon.png" },
    ],
  }
  return {
    ...metadata,
    ...pwaMetadata,
  }
}