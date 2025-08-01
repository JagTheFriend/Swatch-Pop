import { cn } from "@heroui/react";
import { cormorantSC, italiana } from "~/fonts";

export default function Footer() {
	return (
		<footer className="grid grid-cols-2 gap-5 px-10 py-20">
			<div>
				<p className={cn(cormorantSC.className, "font-semibold")}>
					LOREM IPSUM{" "}
				</p>
				<div className={cn(italiana.className, "font-normal")}>
					<ol className="list-none">Lorem Ipsum</ol>
					<ol className="list-none">Lorem Ipsum</ol>
					<ol className="list-none">Lorem Ipsum</ol>
					<ol className="list-none">Lorem Ipsum</ol>
					<ol className="list-none">Lorem Ipsum</ol>
				</div>
			</div>
			<div>
				<p className={cn(cormorantSC.className, "font-semibold")}>
					LOREM IPSUM{" "}
				</p>
				<div className={cn(italiana.className, "font-normal")}>
					<ol className="list-none">Lorem Ipsum</ol>
					<ol className="list-none">Lorem Ipsum</ol>
					<ol className="list-none">Lorem Ipsum</ol>
					<ol className="list-none">Lorem Ipsum</ol>
				</div>
			</div>
		</footer>
	);
}
