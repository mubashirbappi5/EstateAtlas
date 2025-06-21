"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="https://merakiui.com/images/logo.svg"
          alt="EstateAtlas Logo"
          width={28}
          height={28}
        />
        <span className="text-lg font-semibold text-gray-800 dark:text-white">
          EstateAtlas
        </span>
      </Link>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6">
          {/* Main Menu */}
          <div className="space-y-3">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              Main Menu
            </label>

            <NavItem href="#" label="All Countries" icon="🌍" active />
            <NavItem href="#" label="Global Data" icon="📊" />
            <NavItem href="#" label="Regional/City Data" icon="🏙️" />
            <NavItem href="#" label="Quarterly Reports" icon="📈" />
            <NavItem href="#" label="Saved Countries" icon="💾" />
          </div>

          {/* Investments */}
          <div className="space-y-3">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              Investments
            </label>

            <NavItem href="#" label="Investment Calculator" icon="🧮" />
            <NavItem href="#" label="Comparison Tool" icon="⚖️" />
          </div>

          {/* Settings */}
          <div className="space-y-3">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              Settings
            </label>

            <NavItem href="#" label="Affiliate Dashboard" icon="👥" />
            <NavItem href="#" label="Account Settings" icon="⚙️" />
            <NavItem href="#" label="Billing" icon="💳" />
            <NavItem href="#" label="Support" icon="🛠️" />
            <NavItem href="#" label="Log Out" icon="🚪" />
          </div>
        </nav>
      </div>
    </aside>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  icon: string;
  active?: boolean;
}

const NavItem: FC<NavItemProps> = ({ href, label, icon, active }) => (
  <Link
    href={href}
    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 transform rounded-lg ${
      active
        ? "bg-gray-900 text-white dark:text-white"
        : "text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-white"
    }`}
  >
    <span className="text-lg">{icon}</span>
    <span className="mx-2">{label}</span>
  </Link>
);

export default Sidebar;
