import { LegacyRef, useRef } from "react";
import { ClimbingRoute, HoldData, NaturalData } from "../../editor/climbingRoute";
import { lightenHexColor } from "../../theme";

interface RouteViewerProps {
    climbingRoute: ClimbingRoute
}

export default function RouteImageViewer(props: RouteViewerProps) {
    const ref = useRef<HTMLDivElement>(null);

return (
    <div>
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
            <pattern id="cautionPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(-45)">
                <rect width="10" height="20" fill={props.climbingRoute.color1}/>
                <rect x="10" width="10" height="20" fill={props.climbingRoute.color2 ? props.climbingRoute.color2 : props.climbingRoute.color1}/>
            </pattern>
            <pattern id="lightCautionPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(-45)">
                <rect width="10" height="20" fill={lightenHexColor(props.climbingRoute.color1, 0.2)}/>
                <rect x="10" width="10" height="20" fill={props.climbingRoute.color2 ? lightenHexColor(props.climbingRoute.color2, 0.2) : lightenHexColor(props.climbingRoute.color1, 0.2)}/>
            </pattern>
        </defs>
    </svg>
        <div style={{ position: 'relative', width: '100%', height: 'auto'}}>
            <img
                ref={ref as LegacyRef<HTMLImageElement>}
                src={props.climbingRoute.image}
                alt={props.climbingRoute.name}
                style={{width: '100%', height: 'auto'}}
            />
            {props.climbingRoute.holds.map((hold: HoldData) => (
                <HoldNode hold={hold} key={hold.id} />
            ))}
            {props.climbingRoute.naturals.map((natural: NaturalData) => {
                const hold1 = props.climbingRoute.holds.find(hold => hold.id === natural.hold1id)!;
                const hold2 = props.climbingRoute.holds.find(hold => hold.id === natural.hold2id)!;

                return (
                    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                        <line
                            x1={`${hold1.x}%`}
                            y1={`${hold1.y}%`}
                            x2={`${hold2.x}%`}
                            y2={`${hold2.y}%`}
                            stroke="url(#cautionPattern)"
                            strokeWidth=".5rem"
                        />
                    </svg>
                );
            })}
        </div>
    </div>
);
}
interface HoldNodeProps{
    hold: HoldData
}

function HoldNode({hold}: HoldNodeProps) {
return  <div style={{
            position: "absolute",
            top: `${hold.y}%`,
            left: `${hold.x}%`,
            width: "1px",
            height: "1px",
        }}
        >
            <svg width="4rem" height="4rem" style={{transform: "translate(-50%, -50%)"}}>
                <circle
                    cx="2rem"
                    cy="2rem"
                    r="1.5rem"
                    fill={"url(#cautionPattern)"}
                />
            </svg>
        </div>
}