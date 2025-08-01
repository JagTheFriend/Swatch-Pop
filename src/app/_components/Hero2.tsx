"use client";

import { Button } from "@heroui/react";
import { inter } from "~/fonts";

export default function Hero2() {
	return (
		<section className="flex flex-col gap-16 py-20">
			<div className="flex flex-row items-center justify-center gap-4">
				<Button variant="ghost" size="lg" className={inter.className}>
					BROWSE PALETTES
				</Button>
				<Button variant="ghost" size="lg" className={inter.className}>
					CREATE YOUR OWN
				</Button>
			</div>
		</section>
	);
}
