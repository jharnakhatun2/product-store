'use client'
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../app/slices/useSlice";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";

export default function Navbar() {
  const dispatch = useDispatch();
  const currency = useAppSelector((state) => state.currency.currency);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value;
    dispatch(setCurrency(selectedCurrency));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#ffbcd8] shadow sticky top-0 z-50 py-1">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12 overflow-hidden">
            <a className="block text-teal-600 py-2" href="/">
              <Image
                src="/sitelogo.png"
                className="h-full w-8/12 lg:w-full object-cover object-center lg:h-full transition duration-500 group-hover:scale-105"
                width={125}
                height={100}
                alt="Picture of the product"
              />
            </a>
          </div>
          <div className="md:flex md:items-center md:gap-4">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li className="">
                  <a
                    className="text-gray-500 transition hover:text-nature hover:drop-shadow-md"
                    href="/"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-nature hover:drop-shadow-md"
                    href="/product"
                  >
                    SHOP
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              {/* Currency Switcher */}
              <div className="sm:flex sm:gap-4">
                <form>
                <div className="inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="h-full rounded-md border-0 bg-transparent py-2 px-2 text-gray-500 focus:ring-1 focus:outline-none focus:ring-gray-400 sm:text-sm hover:text-nature hover:drop-shadow-md"
                  >
                    <option value="USD">USD</option>
                    <option value="JPY">JPY</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
                </form>
              </div>
              {/* Mobile Menu icon */}
              <div className="block md:hidden">
                <button
                  className="rounded bg-[#f988b7] p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute md:hidden mt-2 right-2">
            <ul className="bg-[#ffbcd8] rounded shadow-md py-2 w-full text-center">
              <li className="border-b-2">
                <a
                  className="block text-gray-500 transition hover:text-gray-500/75 px-12 py-1"
                  href="/"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  className="block text-gray-500 transition hover:text-gray-500/75 px-12 py-1"
                  href="/"
                >
                  SHOP
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}