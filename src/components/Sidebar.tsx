"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import logo from "../../public/logo.png"
import { Calculator, ChartBarStacked, ChartNoAxesCombined, ChartPie, CreditCard, FileChartColumn, Globe, Headset, LogOut, Save, UserCog, Users } from 'lucide-react';
const Sidebar: FC = () => {
  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="EstateAtlas Logo"
          width={220}
          height={28}
        />
        
      </Link>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6">
          {/* Main Menu */}
          <div className="space-y-3">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              Main Menu
            </label>

            <NavItem href="Countries" label="All Countries" icon=  {<Globe />} />
            <NavItem href="globaldata" label="Global Data" icon={    <ChartNoAxesCombined />} />
            <NavItem href="Regional" label="Regional/City Data" icon={  <FileChartColumn/>} />
            <NavItem href="Reports" label="Quarterly Reports" icon={    <ChartPie/>} />
            <NavItem href="SavedCountries" label="Saved Countries" icon={    <Save/>}/>
          </div>

          {/* Investments */}
          <div className="space-y-3">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              Investments
            </label>

            <NavItem href="InvestCalculator" label="Investment Calculator" icon={    <Calculator/>} />
            <NavItem href="comparison" label="Comparison Tool" icon={    <ChartBarStacked/>} />
          </div>

          {/* Settings */}
          <div className="space-y-3">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              Settings
            </label>

            <NavItem href="affiliate " label="Affiliate Dashboard" icon={    <Users />} />
            <NavItem href="accountSettings" label="Account Settings" icon={    <UserCog/>} />
            <NavItem href="billing" label="Billing" icon={    <CreditCard />} />
            <NavItem href="support" label="Support" icon=  {<Headset />} />
            <NavItem href="#" label="Log Out" icon={    <LogOut />} />
          </div>
        </nav>
      </div>
    </aside>
  );
};

import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  label: string;
  icon: ReactNode;
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
    <span className="text-sm ">{icon}</span>
    <span className="mx-2">{label}</span>
  </Link>
);

export default Sidebar;
