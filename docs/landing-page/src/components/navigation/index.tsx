import React from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { HamburgerMenu } from "./HamburgerMenu";
import { MenuLinks } from "./MenuLinks";

export const TopNavigation = () => {
  return (
    <div className="bg-smithy-black text-white h-[var(--nav-offset)] fixed top-0 z-50">
      <NavigationMenu>
        <NavigationMenuList className="h-[var(--nav-offset)] px-10 w-screen flex flex-row justify-between">
          <NavigationMenuItem className="flex-1">
            <div className="flex-1 min-w-36">
              <a href="/">
                <img
                  className="max-w-36 h-auto"
                  src={"/logos/smithy_logo_lt.svg"}
                />
              </a>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-1/3 flex flex-row justify-between md:flex hidden">
            <MenuLinks />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex-1 flex justify-end items-end">
            <Button
              variant="gradient-outline"
              darkBg
              className="hidden md:flex"
            >
              Get Started
            </Button>
            <a href="https://github.com/smithy-lang/smithy">
              <Button size="icon" variant={"ghost"}>
                <Icons.gitHub />
              </Button>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem className="md:hidden">
            <div>
              <HamburgerMenu />
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
