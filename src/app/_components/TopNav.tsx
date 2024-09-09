import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

export const TopNav = () => {
	return (
		<header data-main-header className="border-gray-400 border-b">
			<h1 className="sr-only">Gallery T3 App</h1>
			<nav
				className={`
					flex w-full items-center justify-between p-4 text-xl font-semibold
				`}
			>
				<span>TopNav</span>
				<div>
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</nav>
		</header>
	);
};
