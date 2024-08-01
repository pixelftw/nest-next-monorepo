import Link from "next/link";

export function Steps() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Create Your Custom Tote Bag
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow these four easy steps to design your one-of-a-kind tote
              bag.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-muted rounded-xl p-8 flex flex-col items-center justify-center gap-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center">
              <TypeIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Design</h3>
            <p className="text-muted-foreground text-center">
              Choose from our selection of custom designs or upload your own
              artwork.
            </p>
          </div>
          <div className="bg-muted rounded-xl p-8 flex flex-col items-center justify-center gap-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center">
              <ReplaceIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Customize</h3>
            <p className="text-muted-foreground text-center">
              Personalize your tote bag with your choice of colors, fonts, and
              more.
            </p>
          </div>
          <div className="bg-muted rounded-xl p-8 flex flex-col items-center justify-center gap-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center">
              <ViewIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Preview</h3>
            <p className="text-muted-foreground text-center">
              See a 3D preview of your custom tote bag before you place your
              order.
            </p>
          </div>
          <div className="bg-muted rounded-xl p-8 flex flex-col items-center justify-center gap-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center">
              <ListOrderedIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Order</h3>
            <p className="text-muted-foreground text-center">
              Once you're satisfied, add your custom tote bag to your cart and
              complete your order.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function ReplaceIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4c0-1.1.9-2 2-2" />
      <path d="M20 2c1.1 0 2 .9 2 2" />
      <path d="M22 8c0 1.1-.9 2-2 2" />
      <path d="M16 10c-1.1 0-2-.9-2-2" />
      <path d="m3 7 3 3 3-3" />
      <path d="M6 10V5c0-1.7 1.3-3 3-3h1" />
      <rect width="8" height="8" x="2" y="14" rx="2" />
    </svg>
  );
}

function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
