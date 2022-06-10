import { useMediaQuery } from "@mui/material";

export default function AnimatedBG() {
  const matches = useMediaQuery("(max-width:820px)");

  return (
    <svg
      viewBox={matches ? `0 0 70 70` : `0 0 50 50`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `100%`, height: `100vh` }}
    >
      <g fill="transparent">
        <g fill="transparent" stroke="#cf22ca" stroke-width=".1">
          <circle cx="25" cy="5" r="40" fill="#cf22c90d" />
          <g fill="transparent" stroke="#cf22ca" stroke-width=".1">
            <circle cx="65" cy="5" r="3" fill="transparent"></circle>
          </g>
        </g>
        <g fill="transparent" stroke="#cf22c999" stroke-width=".1">
          <circle cx="25" cy="5" r="32" fill="#cf22c91c" />
        </g>
        <g fill="transparent" stroke="#cf22c974" stroke-width=".1">
          <circle cx="25" cy="5" r="24" fill="#cf22c942" />
        </g>
        <g fill="transparent" stroke="#cf22c942" stroke-width=".1">
          <circle cx="25" cy="5" r="17" fill="#cf22c974" />
        </g>
        <g fill="transparent" stroke="#cf22c91c" stroke-width=".1">
          <circle cx="25" cy="5" r="11" fill="#cf22c999" />
        </g>
        <g fill="transparent" stroke="#cf22c90d" stroke-width=".1">
          <circle cx="25" cy="5" r="5" fill="#cf22ca" />
        </g>
      </g>
    </svg>
  );
}
