"use client";

import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

import { UploadButton } from "~/utils/uploadthing";

export const TopNav = () => {
	const router = useRouter();

	return (
		<header data-main-header className="border-b border-gray-400">
			<h1 className="sr-only">Gallery T3 App</h1>
			<nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
				<span>TopNav</span>
				<div className="flex flex-row">
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UploadButton
							endpoint="imageUploader"
							onClientUploadComplete={() => router.refresh()}
						/>
						<UserButton />
					</SignedIn>
				</div>
			</nav>
		</header>
	);
};
