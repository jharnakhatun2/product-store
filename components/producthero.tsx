import Image from "next/image";

export default function ProductHero() {
  return (
    <div className="relative">
      <Image
        src="/images/productHero1.png"
        className=" left-0 top-0 w-full transition-opacity duration-500 dark:opacity-0"
        alt="Hero Section / Intro Section Clouds Design Block Light v.10"
        width={1200}
        height={300}
        alt="Picture of the product"
      />
    </div>
  );
}
