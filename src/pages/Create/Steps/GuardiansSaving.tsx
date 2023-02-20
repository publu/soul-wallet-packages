import Button from "@src/components/Button";
import InputWrapper from "@src/components/InputWrapper";
import { CreateStepEn, StepActionTypeEn, useStepDispatchContext } from "@src/context/StepContext";
import React, { useState } from "react";

const GuardiansSaving = () => {
    const [email, setEmail] = useState<string>();
    const [hasSaved, setHasSaved] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const [sending, setSending] = useState(false);

    const dispatch = useStepDispatchContext();

    const handleDownload = () => {
        setDownloading(true);
        // TODO: here

        setTimeout(() => {
            setDownloading(false);
            setHasSaved(true);
        }, 2000);
    };

    const handleEmailChange = (val: string) => {
        setEmail(val);
    };

    const handleSendEmail = () => {
        setSending(true);

        // TODO: here
        setTimeout(() => {
            setSending(false);
            setHasSaved(true);
        }, 2000);
    };

    const handleNext = () => {
        dispatch({
            type: StepActionTypeEn.JumpToTargetStep,
            payload: CreateStepEn.SetSoulWalletAsDefault,
        });
    };

    return (
        <div className="pb-58">
            <p className="tip-text mt-16 mb-37">
                To finish up, remember to backup your Guardians list!
                <br />
                <br />
                You’ll need this file to start the wallet recovery process, so make sure you have the copy saved.
            </p>

            <div className="flex flex-row items-end">
                {/* TODO: add loading & retry */}
                <Button type="default" onClick={handleDownload} className="w-base" loading={downloading}>
                    Download
                </Button>

                <span className="mx-28 mb-12 text-base text-black">or</span>

                <InputWrapper
                    className="w-base"
                    label={"Back up via Email"}
                    value={email}
                    onChange={handleEmailChange}
                    buttonText="Send"
                    buttonLoading={sending}
                    onClick={handleSendEmail}
                />
            </div>

            <Button className="w-base mt-83 mx-auto" type="primary" disable={!hasSaved} onClick={handleNext}>
                Next
            </Button>
        </div>
    );
};

export default GuardiansSaving;