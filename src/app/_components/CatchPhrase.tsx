"use client";

import { cn, Image } from "@heroui/react";
import { cormorantSC } from "~/fonts";

export default function CatchPhrase() {
	return (
		<section
			className="flex flex-col gap-20 bg-[url('/bubbles.svg')] bg-cover px-10 py-28"
			id="contact%20us"
		>
			<div className="grid w-full grid-cols-2 justify-items-center gap-4">
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
			</div>
			<Image src="/img-row.svg" alt="img-row" />
		</section>
	);
}
