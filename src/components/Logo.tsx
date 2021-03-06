import React from "react";

const Logo = ({ width = 100, height = 100 }) => {
  return (
    <svg
      id="Capa_1"
      enable-background="new 0 0 512 512"
      height={height}
      viewBox="0 0 512 512"
      width={width}
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="302.017"
        x2="302.017"
        y1="511.999"
        y2=".001"
      >
        <stop offset="0" stop-color="#5558ff" />
        <stop offset="1" stop-color="#00c0ff" />
      </linearGradient>
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="196"
        x2="196"
        y1="331.001"
        y2="181.001"
      >
        <stop offset="0" stop-color="#addcff" />
        <stop offset=".5028" stop-color="#eaf6ff" />
        <stop offset="1" stop-color="#eaf6ff" />
      </linearGradient>
      <g>
        <g>
          <g>
            <path
              d="m504.8 243.101-390-240.958c-5.4-3.3-12.301-2.701-17.401 1.199-4.799 4.2-6.599 11.1-4.499 17.1l82.5 220.558 126.599 15-126.599 15-82.5 220.6c-2.1 6-.3 12.9 4.499 17.1 5.005 3.892 12.278 4.399 17.401 1.199l390-241c4.499-2.999 7.2-7.8 7.2-12.9 0-5.097-2.701-9.898-7.2-12.898z"
              fill="url(#SVGID_1_)"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="m377 241.001h-201.599l5.698 15-5.698 15h201.599c8.401 0 15-6.599 15-15s-6.599-15-15-15zm-270 0h-92c-8.291 0-15 6.709-15 15s6.709 15 15 15h92c8.291 0 15-6.709 15-15s-6.709-15-15-15zm-30 60h-62c-8.291 0-15 6.709-15 15s6.709 15 15 15h62c8.291 0 15-6.709 15-15s-6.709-15-15-15zm-62-90h62c8.291 0 15-6.709 15-15s-6.709-15-15-15h-62c-8.291 0-15 6.709-15 15s6.709 15 15 15z"
              fill="url(#SVGID_2_)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
