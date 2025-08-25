import type{ ReactNode } from "react";

interface ExpandTrayProps {
  showAll: boolean;
  trayMax: number;
  trayRef: React.RefObject<HTMLDivElement | null>;
  onTrayTransitionEnd: (e: React.TransitionEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

export const ExpandTray = ({ showAll, trayMax, trayRef, onTrayTransitionEnd, children }: ExpandTrayProps) => {
  return (
    <div
      ref={trayRef}
      onTransitionEnd={onTrayTransitionEnd}
      style={{ maxHeight: showAll ? trayMax : 0 }}
      className="transition-[max-height] duration-700 ease-in-out overflow-hidden w-full will-change-[max-height]"
    >
      <div className={`${showAll ? "opacity-100 delay-150" : "opacity-0"} transition-opacity duration-300`}>
        {children}
      </div>
    </div>
  );
};
