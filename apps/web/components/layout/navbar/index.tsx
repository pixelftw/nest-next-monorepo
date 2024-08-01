import { MoveIn } from "@components/motionComponents/MoveIn";
import { Button } from "@vianlix/ui";
import Link from "next/link";

export default function Navbar() {
  return (
    <MoveIn
      direction="top"
      className="sticky top-0 w-full shadow-sm z-50 backdrop-blur-xl "
    >
      <header>
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-semibold">Vianlix</span>
          </Link>
          <nav className="hidden space-x-4 md:flex items-center">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Track Order
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Support
            </Link>
            <Button>Login</Button>
          </nav>
        </div>
      </header>
    </MoveIn>
  );
}
