import React, {ReactNode} from "react";

export default function PageHeader({children}: { children: ReactNode }) {
  return <h1 className="text-2xl font-bold text-gray-700 tracking-tight mb-6">
    {children}
  </h1>
}