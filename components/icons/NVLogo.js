import * as React from "react";
const NVLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <linearGradient id="b">
        <stop offset={0} />
        <stop offset={0.675} stopColor="#0b8bbf" />
      </linearGradient>
      <linearGradient id="a">
        <stop offset={0} />
        <stop offset={0.787} stopColor="#7a15e0" />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="e"
        x1={56.552}
        x2={370.146}
        y1={166.403}
        y2={162.943}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#b"
        id="c"
        x1={47.066}
        x2={-206.837}
        y1={227.364}
        y2={229.527}
        gradientUnits="userSpaceOnUse"
      />
      <path id="f" d="M94.203 72.793h355.403v333.381H94.203z" />
      <path id="d" d="M-101.544 130.294h324.818v302.184h-324.818z" />
    </defs>
    <g fontFamily="Noto Serif" fontSize={192}>
      <text
        xmlSpace="preserve"
        fill="url(#c)"
        style={{
          InkscapeFontSpecification: "&quot",
          whiteSpace: "pre",
          shapeInside: "url(#d)",
        }}
        transform="translate(225.869 15.725)"
      >
        <tspan x={-101.543} y={304.988}>
          {"N"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        fill="url(#e)"
        style={{
          InkscapeFontSpecification: "&quot",
          whiteSpace: "pre",
          shapeInside: "url(#f)",
        }}
        transform="matrix(1.0025 0 0 1.00197 122.82 72.98)"
      >
        <tspan x={94.203} y={247.488}>
          {"V"}
        </tspan>
      </text>
    </g>
  </svg>
);
export default NVLogo;
