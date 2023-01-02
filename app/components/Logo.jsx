import { Link } from "@remix-run/react";
import { useRouteData } from "remix-utils";

export default function Logo() {
  const { home } = useRouteData(`root`);

  return (
    <p className="text-lg font-bold tracking-tighter text-black dark:text-white lg:text-2xl">
      <Link to="/">{home.siteTitle}</Link>
    </p>
  );
}
