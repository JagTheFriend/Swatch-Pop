import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import CustomRootLayout from "~/layouts/RootLayout";

export const metadata: Metadata = {
	title: "Swatch Pop",
	description: "EVERY SHADE HAS A STORY. SHOP YOURS NOW",
	icons: [{ rel: "icon", url: "/logo.svg" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable} scroll-smooth`}>
			<body>
				<CustomRootLayout>{children}</CustomRootLayout>
			</body>
		</html>
	);
}
