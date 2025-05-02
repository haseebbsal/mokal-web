import { BaseInputProps } from "@/utils/types";
import { Input } from "@heroui/input";
import { useController } from "react-hook-form";

export default function BaseInput({
  extraClass,
  name,
  rules,
  control,
  ...props
}: BaseInputProps) {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    defaultValue: "",
  });
  return (
    <Input
      {...field}
      isInvalid={!!fieldState.error}
      errorMessage={fieldState.error?.message}
      className={`  ${extraClass}`}
      {...props}
    />
  );
}
