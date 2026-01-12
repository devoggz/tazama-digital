import React from "react";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { GithubIcon } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";

function CenteredHome() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>Welcome to&nbsp;</span>
        <br />
        <span className={title()}>Tazama Digital Studios</span>
        <div className={subtitle({ class: "mt-4" })}>
          We are a full-service location print shop & creative company
          specializing in digital printing, & creative design
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="\"
        >
          Print on Demand
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="\"
        >
          <GithubIcon size={20} />
          About US
        </Link>
      </div>

      <div className="mt-8"></div>
    </section>
  );
}

export default CenteredHome;
