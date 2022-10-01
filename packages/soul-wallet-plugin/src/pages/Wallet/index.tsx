import React, { useState, useEffect } from "react";
import { Navbar } from "@src/components/Navbar";
import useWalletContext from "@src/context/hooks/useWalletContext";
import AccountInfo from "@src/components/AccountInfo";
import Operations from "./comp/Operations";
import Actions from "./comp/Actions";

export function Wallet() {
    const { walletAddress, account } = useWalletContext();

    return (
        <>
            <Navbar />
            <AccountInfo account={walletAddress} action="activate" />
            <div className="text-center">
                EOA: 0x{account.slice(0, 4)}...{account.slice(-4)}
            </div>
            <Actions />
            <Operations />
        </>
    );
}
