"use client";

import { cn } from "@heroui/react";
import { section as MotionSection } from "framer-motion/client";
import { cormorantInfant } from "~/fonts";

export default function Hero1() {
	return (
		<div className="relative w-full bg-background pb-32">
			<MotionSection
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				id="home"
				className={cn(
					cormorantInfant.className,
					"text-center font-semibold text-6xl",
					"py-20",
				)}
			>
				<p>Welcome to SwatchPop</p>
			</MotionSection>
			<div className="shape-divider-1">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<title>SVG Waves</title>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</div>
	);
}
