import { cn } from "@heroui/react";
import { comfortaa, cormorantInfant } from "~/fonts";

export default function About() {
	return (
		<section className="grid grid-cols-1 gap-5 py-20 md:grid-cols-2">
			<div
				className={cn(
					cormorantInfant.className,
					"font-bold",
					"text-8xl",
					"flex",
					"justify-center",
					"items-center",
				)}
			>
				ABOUT US
			</div>
			<p
				className={cn(
					comfortaa.className,
					"text-4xl",
					"font-light",
					"md:text-right",
				)}
			>
				Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
				ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
				tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
				Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
				massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
				vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
				inceptos himenaeos.
			</p>
		</section>
	);
}
