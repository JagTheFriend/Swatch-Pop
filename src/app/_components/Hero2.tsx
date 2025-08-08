"use client";

import { Button, Image } from "@heroui/react";
import { section as MotionSection } from "framer-motion/client";
import { inter } from "~/fonts";

export default function Hero2() {
	return (
		<MotionSection
			initial={{ filter: "blur(10px)" }}
			whileInView={{ filter: "blur(0px)" }}
			transition={{ duration: 1 }}
			className="flex flex-col py-20"
		>
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
		</MotionSection>
	);
}
