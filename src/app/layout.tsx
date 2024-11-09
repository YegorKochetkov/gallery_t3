import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import "@uploadthing/react/styles.css";
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { TopNav } from "./_components/TopNav";
import { ourFileRouter } from "./api/uploadthing/core";
import { ThemeProvider } from "~/components/themeProvider";
import { Toaster } from "~/components/ui/sonner";

const inter = Inter({
	subsets: [ "latin" ],
});

export const metadata = {
	title: "T3 Gallery",
	description: "Exploring the T3 stack by creating an image gallery",
	icons: [ { rel: "icon", url: "/favicon.ico" } ],
};

export default function RootLayout({
	children,
	modal
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<NextSSRPlugin
					/**
					 * The `extractRouterConfig` will extract **only** the route configs
					 * from the router to prevent additional information from being
					 * leaked to the client. The data passed to the client is the same
					 * as if you were to fetch `/api/uploadthing` directly.
					 */
					routerConfig={extractRouterConfig(ourFileRouter)}
				/>
				<body
					className={`${inter.className} min-h-screen`}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<TopNav />
						{children}
						{modal}
						<div id="modal-root" />
						<Toaster />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
