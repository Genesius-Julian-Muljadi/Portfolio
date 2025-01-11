import { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_8fr_1fr]">
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 my-20 flex">
        {children}
      </div>
    </div>
  );
}
