import CustomNavbar from "~/components/Navbar";
import Hero1 from "./_components/Hero1";
import Hero2 from "./_components/Hero2";

export default function HomePage() {
	return (
		<>
			<CustomNavbar />
			<main className="flex flex-col items-center justify-center px-10">
				<Hero1 />
				<Hero2 />
			</main>
		</>
	);
}
