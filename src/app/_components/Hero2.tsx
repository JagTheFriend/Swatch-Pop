"use client";

import { Button, Image } from "@heroui/react";
import { inter } from "~/fonts";

export default function Hero2() {
	return (
		<section className="flex flex-col py-20">
			<div className="flex flex-col items-center justify-center gap-20">
				<Image src="/about.svg" alt="palette" />
				<div className="flex flex-col items-center justify-center gap-4 md:flex-row">
					<Button variant="ghost" size="lg" className={inter.className}>
						BROWSE PALETTES
					</Button>
					<Button variant="ghost" size="lg" className={inter.className}>
						CREATE YOUR OWN
					</Button>
				</div>
			</div>
		</section>
	);
}
