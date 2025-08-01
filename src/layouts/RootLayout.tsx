"use client";

import { HeroUIProvider } from "@heroui/react";

export default function CustomRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <HeroUIProvider>{children}</HeroUIProvider>;
}
