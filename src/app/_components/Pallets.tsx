"use client";

import { Image } from "@heroui/react";
import { section as MotionSection } from "framer-motion/client";

export default function Pallets() {
	return (
		<MotionSection
			id="palettes"
			initial={{ y: -100 }}
			whileInView={{ y: 0 }}
			transition={{ duration: 1 }}
			className="py-4"
		>
			<Image src="/pallets.svg" alt="palette" />
		</MotionSection>
	);
}
