import clsx from "clsx";
import { Link } from "remix";
import { useOptionalUser } from "~/utils";
import { Grid } from "../grid";

export type HeroSectionProps = {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  action?: React.ReactNode;
  as?: React.ElementType;
};

export const HeroSection = ({ as = "header" }: HeroSectionProps) => {
  const user = useOptionalUser();

  return (
    <Grid as={as} className="lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12">
      <div className="relative col-span-full mb-12 lg:mb-0">
        <div className="lg:pb-18 relative mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
          <div className="relative col-span-full min-h-full  sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-contain lg:object-none  "
                src="https://i.ibb.co/DpbtPxT/terra-Kong-Bubble.jpg"
                alt="terrkong"
              />
              <div className="absolute inset-0 bg-[color:#000000] mix-blend-overlay" />
              <div className="absolute inset-0 bg-[color:#56757cca] mix-blend-multiply" />
              {/* <div className="absolute inset-0 bg-[color:#252525f1] mix-blend-soft-light" /> */}
            </div>
            <div className="relative pt-16 pb-32 sm:pb-14 lg:pt-20 ">
              <div className="flex-col justify-between sm:flex lg:flex-row">
                <div className="pb-44 lg:pb-0">
                  <h1 className="flex text-left text-5xl font-extrabold italic tracking-tight text-white drop-shadow-2xl sm:text-5xl lg:text-7xl">
                    <span className=" block ">Yuta Asato</span>
                  </h1>
                  <p className="text-shadow-md mt-6 max-w-xs pb-48 text-left text-xl text-white lg:pb-0">
                    I'm a self taught Frontend developer based in Tokyo.
                    Currently working as a React developer for a startup which
                    provides SaaS and Fintech solutions in the investment
                    industry. I'm a self taught financial trader and have been
                    actively trading the Japanese derivatives market since 2012.
                    I'm also classically trained on the piano and have worked as
                    a music producer in London. I enjoy playing the piano or
                    making DnB/Bass music in my free time.
                  </p>
                </div>
                <div className="mr-30 text-4xl font-bold italic text-white  lg:pt-20">
                  <h2 className=" text-left lg:mt-12 ">#FrontEnd Developer</h2>
                  <h2 className=" mt-12 text-left ">#Financial Trader</h2>
                  <h2 className=" mt-12 text-left ">#Music Producer</h2>
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    {/* <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600  "
                    >
                      Log In
                    </Link> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8"></div>
        </div>
      </div>
    </Grid>
  );
};
