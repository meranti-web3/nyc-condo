import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Button({
  href,
  className,
  children,
  ...props
}: PropsWithChildren<any>) {
  className = clsx(
    "inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70",
    className
  );

  return href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <button className={className} {...props} />
  );
}
