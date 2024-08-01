import { MoveIn } from "@components/motionComponents/MoveIn";
import { ScrollRevealText } from "@components/motionComponents/ScrollRevielHeading";
import { ScrollSlideIn } from "@components/motionComponents/ScrollSlideIn";
import { Button } from "@vianlix/ui";
import Image from "next/image";

export function Steps() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 md:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <div className="space-y-6">
            <ScrollRevealText className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl uppercase">
              Relive Your Special Moments
            </ScrollRevealText>
            <MoveIn>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hold on to all your picture-perfect moments with our customized
                Tote bags in just 4 simple steps.
              </p>
            </MoveIn>
          </div>
          <ul className="grid gap-4">
            <li className="flex items-start gap-3">
              <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Seamless Collaboration</h3>
                <p className="text-muted-foreground">
                  Work together effortlessly with built-in code review and
                  communication tools.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Automated Workflows</h3>
                <p className="text-muted-foreground">
                  Streamline your processes with continuous integration and
                  deployment.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Scalable Infrastructure</h3>
                <p className="text-muted-foreground">
                  Grow your application with ease using our scalable cloud
                  infrastructure.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Secure and Compliant</h3>
                <p className="text-muted-foreground">
                  Keep your data safe with our robust security and compliance
                  features.
                </p>
              </div>
            </li>
          </ul>
          <Button>Get one for your self</Button>
        </div>
        <ScrollSlideIn>
          <Image
            src="/images/hero-image.jpg"
            width={800}
            height={600}
            alt="Hero Image"
            className="rounded-xl object-cover"
          />
        </ScrollSlideIn>
      </div>
    </section>
  );
}

function CheckIcon(props: { className?: string }) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
