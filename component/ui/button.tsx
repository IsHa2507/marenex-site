"use client";

import { FaArrowRight } from "react-icons/fa";

interface PrimaryButtonProps {
  label?: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  label = "Learn More",
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group mt-8 inline-flex items-center gap-3 rounded bg-blue-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-400"
    >
      {label}

      {/* Arrow Icon */}
      <span className="transition-transform duration-300 group-hover:-rotate-45">
        <FaArrowRight className="text-sm" />
      </span>
    </button>
  );
}
