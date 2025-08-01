import CustomNavbar from "~/components/Navbar";
import Hero2 from "./_components/Hero2";
import { WelcomeHero } from "./_components/Welcome";

export default function HomePage() {
	return (
		<>
			<CustomNavbar />
			<main className="flex flex-col items-center justify-center px-10">
				<WelcomeHero />
				<Hero2 />
			</main>
		</>
	);
}
