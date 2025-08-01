"use client";

import { cn, Image } from "@heroui/react";
import { cormorantSC } from "~/fonts";

export default function CatchPhrase() {
	return (
		<section className="grid grid-cols-2 justify-items-center gap-4 bg-[url('/bubbles.svg')] bg-cover px-10 pt-28">
			<div
				className={cn(
					cormorantSC.className,
					"font-semibold",
					"text-xl",
					"md:text-5xl",
					"flex",
					"flex-col",
					"h-full",
					"justify-evenly",
					"gap-5",
				)}
			>
				<p>Already know what you want? Let's match it to your vibe.</p>
				<p>Pick your item, we'll bring the aesthetic!</p>
			</div>
			<div>
				<Image src="/hand-bag.svg" alt="palette" />
			</div>
		</section>
	);
}
