"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const MegaMenuContext = createContext<{
  show: null | number;
  setShow: Dispatch<SetStateAction<number | null>>;
}>({ show: null, setShow: () => {} });

export default function MegaMenuProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [show, setShow] = useState<null | number>(null);
  return (
    <MegaMenuContext.Provider value={{ show, setShow }}>
      <div
        onClick={() => {
          setShow(null);
        }}
      >
        {children}
      </div>
    </MegaMenuContext.Provider>
  );
}
