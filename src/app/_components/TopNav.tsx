"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { UploadButton } from "./UploadButton";
import { ModeToggle } from "~/components/modeToggle";

export const TopNav = () => {
	return (
		<header data-main-header className="top-0 z-10 sticky border-gray-400 bg-inherit border-b">
			<h1 className="sr-only">Gallery T3 App</h1>
			<nav className="flex justify-between items-center p-4 w-full font-semibold text-xl">
				<span>TopNav</span>
				<div className="flex flex-row items-center gap-6">
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UploadButton />
						<ModeToggle />
						<UserButton />
					</SignedIn>
				</div>
			</nav>
		</header>
	);
};
