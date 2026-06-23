import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { source } from "@/lib/source";
import { Lora } from "next/font/google";
import "./global.css";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://js.docs.chonkie.ai"),
  title: "ChonkieJS Documentation",
  description: "The lightweight JavaScript chunking library for RAG pipelines",
  icons: {
    icon: "https://www.chonkie.ai/chonkies/chonkie_icon.svg",
  },
  openGraph: {
    title: "ChonkieJS Documentation",
    description:
      "The lightweight JavaScript chunking library for RAG pipelines",
    siteName: "ChonkieJS",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lora.className}>
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            nav={{
              title: (
                <>
                  <img src="https://www.chonkie.ai/chonkies/chonkie_icon.svg" alt="ChonkieJS" width={24} height={24} />
                  <span>ChonkieJS</span>
                </>
              ),
            }}
            githubUrl="https://github.com/chonkie-inc/chonkie"
            links={[
              { text: "Discord", url: "https://discord.gg/Q6zkP8w6ur" },
            ]}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
