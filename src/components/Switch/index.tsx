import React from "react";
import cn from "classnames";
import { ISwitchProps } from "@src/types/ISwitch";

export default function Switch({ checked, onChange }: ISwitchProps) {
    return (
        <div
            onClick={() => onChange(!checked)}
            className={cn(
                "rounded-xl flex p-[2px] cursor-pointer w-[42px]",
                checked ? "bg-blue justify-end" : "bg-[#999]",
            )}
        >
            <div className="w-5 h-5 rounded-full switch-circle-shadow bg-white" />
        </div>
    );
}
