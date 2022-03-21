import { Link } from "remix";
import { HeroSection } from "~/components/sections/HeroSection";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <div className="w-full">
      <HeroSection title="Helping people make the world a better place through quality software." />
      <main className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center"></main>
    </div>
  );
}
