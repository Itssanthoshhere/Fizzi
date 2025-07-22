import React from "react";
import { FizziLogo } from "./FizziLogo";
import CircleText from "./CircleText";

type Props = object;

export default function Footer({ }: Props) {
    return (
        <footer className="bg-[#FEE832] text-[#FE6334]">
            <div className="relative flex justify-center w-full max-w-4xl px-4 py-10 mx-auto">
                <FizziLogo />
                <div className="absolute top-0 origin-center right-24 size-28 -translate-y-14 md:size-48 md:-translate-y-28">
                    <CircleText />
                </div>
            </div>
        </footer>
    );
}