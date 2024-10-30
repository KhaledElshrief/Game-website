import { cn } from "@/app/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
  noPadding,
}: {
  children: ReactNode;
  className?: string;
  noPadding?:boolean;
}) => {
  return (
    <section className={cn("max-w-[1375px] w-full py-5 px-10 lg:px-20", className || "",
        {"py-0":noPadding},
        {"py-8":!noPadding}
    )}>
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
