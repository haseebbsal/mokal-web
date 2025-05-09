"use client";

import { FieldValues, useForm } from "react-hook-form";
import BaseInput from "../common/forms/base-input";
import BaseButton from "../common/base-button";

import { useRouter } from "next/navigation";

export default function CheckStatusForm() {
  const { control, handleSubmit } = useForm();
  const router = useRouter();

  const checkStatusSubmit = (e: FieldValues) => {
    router.push(`/track-shipments?id=${e.tracking}`);

    // mutate(e.tracking);
  };

  return (
    <form
      onSubmit={handleSubmit(checkStatusSubmit)}
      className="flex sm:flex-[0.8_0_0] flex-1"
    >
      <BaseInput
        name="tracking"
        rules={{ required: true }}
        classNames={{ inputWrapper: "!rounded-r-none !h-full" }}
        control={control}
        placeholder="Enter Tracking Number"
      />
      <BaseButton extraClass="rounded-l-none" type="submit">
        Check Status
      </BaseButton>
    </form>
  );
}
