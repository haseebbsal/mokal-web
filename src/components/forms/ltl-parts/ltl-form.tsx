"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import PackageLTL from "./package";
import { FormProvider, useForm } from "react-hook-form";
import Details from "./details";
import Quote from "./quote";

export const LtlFormContext = createContext<{
  activeState: number;
  setActiveState: Dispatch<SetStateAction<number>>;
}>({
  activeState: 1,
  setActiveState: () => {},
});
export default function LTLForm() {
  const [activeState, setActiveState] = useState(1);
  const methods = useForm({
    defaultValues: {
      pallet: true,
    },
  });

  return (
    <FormProvider {...methods}>
      <LtlFormContext.Provider value={{ activeState, setActiveState }}>
        <div className="bg-base-blue rounded-xl flex flex-col border-1 border-base-teal gap-2 w-full">
          <div className="p-4 flex justify-center gap-2 w-1/2 m-auto items-center">
            <div className="flex gap-2">
              <p
                className={`${
                  activeState >= 1 && "!text-white !bg-[#6F93E1]  "
                }  text-gray-400 bg-text-beige min-w-7 min-h-6 rounded-full flex items-center justify-center`}
              >
                1
              </p>
              <p
                className={`${
                  activeState >= 1 && "!text-[#6F93E1]"
                } text-text-beige text-lg font-semibold`}
              >
                Package
              </p>
            </div>
            <hr className="border-dashed flex-1 border-[0.08rem]" />
            <div className="flex gap-2">
              <p
                className={`${
                  activeState >= 2 && "!text-white !bg-[#6F93E1]  "
                }  text-gray-400 bg-text-beige min-w-7 min-h-6 rounded-full flex items-center justify-center`}
              >
                2
              </p>
              <p
                className={`${
                  activeState >= 2 && "!text-[#6F93E1]"
                } text-text-beige text-lg font-semibold`}
              >
                Details
              </p>
            </div>
            <hr className="border-dashed flex-1 border-[0.08rem]" />
            <div className="flex gap-2">
              <p
                className={`${
                  activeState >= 3 && "!text-white !bg-[#6F93E1]  "
                }  text-gray-400 bg-text-beige min-w-7 min-h-6 rounded-full flex items-center justify-center`}
              >
                3
              </p>
              <p
                className={`${
                  activeState >= 3 && "!text-[#6F93E1]"
                } text-text-beige text-lg font-semibold`}
              >
                Quote
              </p>
            </div>
          </div>
          {activeState == 1 && <PackageLTL />}
          {activeState == 2 && <Details />}
          {activeState == 3 && <Quote />}
        </div>
      </LtlFormContext.Provider>
    </FormProvider>
  );
}
