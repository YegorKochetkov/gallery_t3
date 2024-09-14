"use client";

import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

import { UploadButton } from "~/utils/uploadthing";

export const TopNav = () => {
	const router = useRouter()

	return (
		<header data-main-header className="border-gray-400 border-b">
			<h1 className="sr-only">Gallery T3 App</h1>
			<nav className="flex justify-between items-center p-4 w-full font-semibold text-xl">
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
