"use client";

import { cn } from "@heroui/react";
import { cormorantInfant } from "~/fonts";

export default function Hero1() {
	return (
		<section
			id="home"
			className={cn(
				cormorantInfant.className,
				"font-semibold text-6xl",
				"py-20",
			)}
		>
			<p>Welcome to SwatchP</p>
		</section>
	);
}
