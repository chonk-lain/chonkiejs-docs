import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { source } from "@/lib/source";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <RootProvider search={{ options: { type: "static" } }}>
          <DocsLayout
            tree={source.pageTree}
            nav={{
              title: (
                <>
                  <div className="relative">
                    <img
                      src="https://www.chonkie.ai/chonkies/chonkie_icon.svg"
                      alt="ChonkieJS"
                      width={28}
                      height={28}
                      className="rounded-sm"
                    />
                    <span className="absolute -bottom-0.5 -right-1.5 text-[8px] font-bold leading-none bg-fd-primary text-fd-primary-foreground rounded px-0.5">
                      JS
                    </span>
                  </div>
                  <span className="font-semibold">ChonkieJS</span>
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
