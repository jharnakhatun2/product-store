import { Metadata } from "next";
import Hero from "@/components/hero";
import Collections from "@/components/collections";
import TopProduct from "@/components/topProduct";
import Achievement from "@/components/achievement";
import UpcomingProducts from "@/components/upcomingProducts";
import Features from "@/components/features";

export const metadata: Metadata = {
  title: "Home",
  description: "Product store Home",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Features/>
      <TopProduct />
      <UpcomingProducts />
      <Achievement />
    </>
  );
}
