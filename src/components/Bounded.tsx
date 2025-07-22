
import clsx from "clsx";
import React from "react";

type BoundedProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<T>;

export const Bounded = <T extends React.ElementType = "section">({
  as,
  className,
  children,
  ...restProps
}: BoundedProps<T>) => {
  const Comp = as || "section";
  return (
    <Comp
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="flex flex-col items-center w-full mx-auto max-w-7xl">
        {children}
      </div>
    </Comp>
  );
};
