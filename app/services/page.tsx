import { Suspense } from "react";
import ServicesClient from "./ServicesClient";

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="py-40 text-center">Loading services…</div>}>
      <ServicesClient />
    </Suspense>
  );
}
