import React, { useEffect, useState } from "react";
import Switch from "../Switch";
import { shallow } from "zustand/shallow";
import browser from "webextension-polyfill";
import { getLocalStorage } from "@src/lib/tools";
import { useSettingStore } from "@src/store/settingStore";
import IconHelp from "../../assets/icons/help.svg";
import config from "@src/config";
import InfoTip from "../InfoTip";

export default function Footer() {
    const [shouldInject, setShouldInject] = useState(false);

    const toggleDefaultProvider = async (val: boolean) => {
        await browser.storage.local.set({ shouldInject: val });
        setShouldInject(val);
    };

    const checkShouldInject = async () => {
        const res: any = await getLocalStorage("shouldInject");
        setShouldInject(res);
    };

    useEffect(() => {
        checkShouldInject();
    }, []);

    return (
        <div className="px-6 py-3 flex items-center justify-between footer-shadow relative bottom-0">
            <div className="flex items-center gap-[6px] relative z-10">
                <Switch checked={shouldInject} onChange={toggleDefaultProvider} />
                {/* <InfoTip
                    title={shouldInject ? "Unset as default wallet" : "Set as default wallet"}
                /> */}
                <InfoTip title={"Set as default wallet"} />
            </div>
            <div
                className="flex items-center gap-1 absolute left-0 right-0 cursor-pointer tooltip tooltip-top  justify-center text-xs font-bold text-[#737373]"
                data-tip="Test case only, please don't put too much money in"
            >
                Alpha Version
            </div>
            <a href={config.socials.telegram} target="_blank" className="relative z-10">
                <img src={IconHelp} className="w-6 h-6" />
            </a>
        </div>
    );
}
