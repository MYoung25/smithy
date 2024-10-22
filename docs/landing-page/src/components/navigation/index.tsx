import React from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const SmithyLogo = () => {
  return (
    <div className="flex-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto min-w-28"
        version="1.1"
        viewBox="0 0 326 78"
      >
        <g transform="matrix(0.74 0 0 0.74 36.88 36.88)">
          <image
            className="stroke-none stroke-0"
            style={{
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "rgb(0,0,0)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            href="data:image/png;base64,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"
            x="-50"
            y="-50"
            width="100"
            height="100"
          ></image>
        </g>
        <g transform="matrix(2.99 0 0 2.99 241.93 41.66)">
          <text
            fontFamily="'Ember', sans-serif"
            fontSize="22"
            fontStyle="normal"
            fontWeight="bold"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "white",
              fillRule: "nonzero",
              opacity: 1,
              whiteSpace: "pre",
            }}
          >
            <tspan x="-48.98" y="6.91">
              smithy
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  );
};

const CenterMenuLinks: { href: string; title: string }[] = [
  { href: "/#", title: "Menu 1" },
  { href: "/#", title: "Menu 2" },
  { href: "/#", title: "Menu 3" },
  { href: "/#", title: "Menu 4" },
];

export const TopNavigation = () => {
  return (
    <div className="bg-black text-white h-20">
      <NavigationMenu>
        <NavigationMenuList className="h-20 px-10 w-screen flex flex-row justify-between">
          <NavigationMenuItem>
            <SmithyLogo />
          </NavigationMenuItem>
          <NavigationMenuItem className="w-1/3 flex flex-row justify-between">
            {CenterMenuLinks.map((itm) => (
              // <a href={itm.href} key={itm.href}>
              <NavigationMenuLink href={itm.href} key={itm.title}>
                {itm.title}
              </NavigationMenuLink>
              // </a>
            ))}
          </NavigationMenuItem>
          <NavigationMenuItem>
              <Button variant="gradient-outline" darkBg>Get Started</Button>
            <a href="https://github.com/smithy-lang/smithy">
              <Button
                size="icon"
                className="bg-black h-10 w-10 text-white"
              >
                <Icons.gitHub />
              </Button>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
