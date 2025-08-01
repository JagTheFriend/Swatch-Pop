"use client";

import { cn, Image } from "@heroui/react";
import { div as MotionDiv } from "framer-motion/client";
import { cormorantSC } from "~/fonts";

export default function CatchPhrase() {
	return (
		<section
			className="flex flex-col gap-20 bg-[url('/bubbles.svg')] bg-cover px-10 py-28"
			id="contact%20us"
		>
			<div className="grid w-full grid-cols-2 justify-items-center gap-4">
				<MotionDiv
					initial={{ x: 100 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1 }}
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
				</MotionDiv>
				<MotionDiv
					initial={{ x: -100 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1 }}
				>
					<Image src="/hand-bag.svg" alt="palette" />
				</MotionDiv>
			</div>
			<MotionDiv
				initial={{ y: 100 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 1 }}
				className="grid grid-cols-1 items-center justify-items-center gap-3 md:grid-cols-4"
			>
				<div className="relative z-0">
					<div className="-translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4 z-10 flex h-full w-full items-center justify-center font-semibold text-4xl text-white hover:backdrop-blur-sm">
						Clothes
					</div>
					<Image src="/imgs/1.svg" alt="img-1" className="-z-10 w-full" />
				</div>
				<div className="relative z-0">
					<div className="-translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4 z-10 flex h-full w-full items-center justify-center font-semibold text-4xl text-white backdrop-blur-md hover:backdrop-blur-none">
						Books
					</div>
					<Image src="/imgs/2.svg" alt="img-2" className="-z-10 w-full" />
				</div>
				<div className="relative z-0">
					<div className="-translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4 z-10 flex h-full w-full items-center justify-center font-semibold text-4xl text-white backdrop-blur-md hover:backdrop-blur-none">
						Home Decor
					</div>
					<Image src="/imgs/3.svg" alt="img-3" className="-z-10 w-full" />
				</div>
				<div className="relative z-0">
					<div className="-translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4 z-10 flex h-full w-full items-center justify-center font-semibold text-4xl text-white backdrop-blur-md hover:backdrop-blur-none">
						Stationaries
					</div>
					<Image src="/imgs/4.svg" alt="img-4" className="-z-10 w-full" />
				</div>
			</MotionDiv>
		</section>
	);
}
