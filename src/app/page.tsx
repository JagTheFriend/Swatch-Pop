import CustomNavbar from "~/components/Navbar";
import { WelcomeHero } from "./_components/Welcome";

export default function HomePage() {
	return (
		<>
			<CustomNavbar />
			<main className="px-10">
				<WelcomeHero />
			</main>
		</>
	);
}
