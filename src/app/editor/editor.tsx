'use client'

import React, {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";

import {ClimbingRoute, defaultRoute} from "@/app/editor/climbingRoute";
import ImageEditor from "@/app/editor/imageEditor";
import HoldEditor from "@/app/editor/holdEditor";
import {Box} from "@mui/system";

// This function sets up a confirmation dialog when the user attempts to leave the page.
export const useConfirmOnPageExit = (message: string) => {
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent): string | void => {
            event.returnValue = message;
            return message;
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [message]); // Dependency on 'message' so it updates if message changes
};


function RouteEditor() {
    //TODO: Re-enable in production app
    // useConfirmOnPageExit("You have unsaved changes. Are you sure you want to leave?", true);

    const [route, setRoute]: [ClimbingRoute, (value: (((prevState: ClimbingRoute) => ClimbingRoute) | ClimbingRoute)) => void] = useState<ClimbingRoute>(
        defaultRoute
    );

    const [highlightedHold, setHighlightedHold]: [string | null, (value: (((prevState: (string | null)) => (string | null)) | string | null)) => void] = useState<string|null>(null)
    const [selectedHold, setSelectedHold]: [string | null, (value: (((prevState: (string | null)) => (string | null)) | string | null)) => void] = useState<string|null>(null)

    return <>
        <Stack direction={"row"}>
            <Box style={{width: "65%"}} padding={"1rem"}>
                <ImageEditor
                    routeState={[route, setRoute]}
                    highlightedState={[highlightedHold, setHighlightedHold]}
                    selectedState={[selectedHold, setSelectedHold]}
                />
            </Box>
            <Box style={{width: "35%"}}>
                <HoldEditor
                    routeState={[route, setRoute]}
                    highlightedState={[highlightedHold, setHighlightedHold]}
                    selectedState={[selectedHold, setSelectedHold]}
                />
            </Box>
        </Stack>
    </>
}

export default RouteEditor;