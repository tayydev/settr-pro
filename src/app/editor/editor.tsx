'use client'

import React, { useState } from "react";
import Stack from "@mui/material/Stack";

import {ClimbingRoute, defaultRoute} from "@/app/editor/climbingRoute";
import ImageEditor from "@/app/editor/imageEditor";
import HoldEditor from "@/app/editor/holdEditor";

const myImage = "/resources/MOCK_rock_wall.jpg";

interface ObjectData {
    id: number;
    x: number;
    y: number;
}

function RouteEditor() {
    const [route, setRoute]: [ClimbingRoute, (value: (((prevState: ClimbingRoute) => ClimbingRoute) | ClimbingRoute)) => void] = useState<ClimbingRoute>(
        defaultRoute
    );

    return <>
        <Stack direction={"row"}>
            <ImageEditor routeState={[route, setRoute]}/>
            <HoldEditor routeState={[route, setRoute]}/>
        </Stack>
    </>
}

export default RouteEditor;
