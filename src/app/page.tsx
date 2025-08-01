import CustomNavbar from "~/components/Navbar";
import About from "./_components/About";
import BallsDivider from "./_components/BallsDivider";
import CatchPhrase from "./_components/CatchPhrase";
import Footer from "./_components/Footer";
import Hero1 from "./_components/Hero1";
import Hero2 from "./_components/Hero2";
import Pallets from "./_components/Pallets";

export default function HomePage() {
	return (
		<>
			<CustomNavbar />
			<main className="flex flex-col items-center justify-center px-10">
				<Hero1 />
				<Hero2 />
				<About />
				<BallsDivider />
				<Pallets />
				<CatchPhrase />
			</main>
			<Footer />
		</>
	);
}
