import { ShopFront } from "~/shopfront/shopfront";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  const title = "React Bookshop";

  return [
    { title: title },
    { name: "description", content: "Welcome to " + title + "!" },
  ];
}

export default function Home() {
  return <ShopFront />
}
