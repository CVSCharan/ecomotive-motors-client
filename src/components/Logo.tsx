import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="20" fill="#0056b3" />
      <path
        d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20Z"
        fill="white"
      />
      <path
        d="M15 15L25 25M15 25L25 15"
        stroke="#0056b3"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 10V30"
        stroke="#0056b3"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
