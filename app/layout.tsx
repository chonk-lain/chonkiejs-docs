import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { Lora } from "next/font/google";
import "./global.css";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "ChonkieJS Documentation",
  description: "The lightweight JavaScript chunking library for RAG pipelines",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lora.className}>
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            nav={{ title: "ChonkieJS" }}
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
