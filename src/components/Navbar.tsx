"use client";

import {
	Button,
	cn,
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@heroui/react";
import React from "react";
import { italiana } from "~/fonts";

export const BrandLogo = () => {
	return (
		<div className="flex items-center gap-2">
			<Image src={"/logo.svg"} alt="Logo" />
		</div>
	);
};

export default function CustomNavbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = ["HOME", "ABOUT US", "PALETTES", "CONTACT US"];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				base: cn(italiana.className),
			}}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<BrandLogo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden gap-4 sm:flex" justify="center">
				{menuItems.map((item) => (
					<NavbarItem key={`${item}-${Math.random()}`}>
						<Link
							className="w-full"
							color="foreground"
							href={`#${item.toLocaleLowerCase()}`}
							size="lg"
						>
							{item}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Button
						as={Link}
						href="#"
						variant="flat"
						className={cn(italiana.className, "font-medium", "bg-white")}
					>
						LOGIN
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						href="#"
						variant="flat"
						className={cn(italiana.className, "font-medium", "bg-white")}
					>
						SIGN UP
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item) => (
					<NavbarMenuItem key={`${item}-${Math.random()}`}>
						<Link
							className="w-full"
							color={"foreground"}
							href={`#${item.toLocaleLowerCase()}`}
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
