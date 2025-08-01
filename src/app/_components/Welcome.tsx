import { cn } from "@heroui/react";
import { cormorantInfant } from "~/fonts";

export const WelcomeHero = () => {
	return (
		<section
			id="home"
			className={cn(
				"flex flex-col items-center justify-center gap-4 py-20",
				cormorantInfant.className,
				"font-semibold text-6xl",
			)}
		>
			<p>Welcome to SwatchP</p>
		</section>
	);
};
