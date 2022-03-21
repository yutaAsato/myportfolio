import * as React from "react";
import clsx from "clsx";

interface GridProps {
  children: React.ReactNode;
  overflow?: boolean;
  className?: string;
  as?: React.ElementType;
  nested?: boolean;
  rowGap?: boolean;
  featured?: boolean;
}

const Grid = React.forwardRef<HTMLElement, GridProps>(function Grid(
  { children, className, as: Tag = "div", featured, nested, rowGap },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={clsx("relative", {
        "mx-20": !nested,
        "w-full": nested,
        "py-10 md:py-24 lg:pb-40 lg:pt-36": featured,
      })}
    >
      {featured ? (
        <div className="-mx-5vw absolute inset-0">
          <div className="bg-secondary max-w-8xl mx-auto h-full w-full rounded-lg" />
        </div>
      ) : null}

      <div
        className={clsx(
          "relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6",
          {
            "mx-auto max-w-7xl": !nested,
            "gap-y-4 lg:gap-y-6": rowGap,
          },
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
});

/**
 * Use for development only! It renders the grid columns and gaps as page overlay
 */
function GridLines() {
  if (process.env.NODE_ENV !== "development") {
    throw new Error("<GridLines />  should only be used during development");
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-10 select-none">
      <Grid>
        {Array.from({ length: 12 }).map((_, idx) => (
          <div
            key={idx}
            className="flex h-screen items-start bg-black text-black opacity-10 dark:bg-white dark:text-white"
          >
            <div className="w-full pt-4 text-center text-lg text-black dark:text-white">
              {idx + 1}
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export { Grid, GridLines };
