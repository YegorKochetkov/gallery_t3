import { ClerkProvider } from '@clerk/nextjs';

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { TopNav } from './_components/TopNav';

const inter = Inter({
	subsets: [ "latin" ],
	variable: "--font-sans",
});

export const metadata = {
	title: "T3 Gallery",
	description: "Exploring the T3 stack by creating an image gallery",
	icons: [ { rel: "icon", url: "/favicon.ico" } ],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`font-sans ${inter.variable} min-h-screen bg-gray-200`}>
					<TopNav />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
