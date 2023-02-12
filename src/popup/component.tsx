import React from "react";
import { WalletContextProvider } from "@src/context/WalletContext";
import { ToastContainer } from "material-react-toastify";
import { HashRouter as Router } from "react-router-dom";
import PluginRouter from "@src/router";
import "material-react-toastify/dist/ReactToastify.css";

export function Popup() {
    return (
        <div>
            <WalletContextProvider>
                <Router>
                    <PluginRouter />
                </Router>
            </WalletContextProvider>
            <ToastContainer position="bottom-center" />
        </div>
    );
}