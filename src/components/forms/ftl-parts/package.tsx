import BaseButton from "@/components/common/base-button";
import { Input, Radio, RadioGroup } from "@heroui/react";
import Image from "next/image";
import { useContext, useEffect } from "react";
import {
  useController,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { FtlFormContext } from "../ftl-form";
import axiosInstance from "@/utils/axiosInstance";
import BaseInput from "@/components/common/forms/base-input";
import { PiWarningCircleFill } from "react-icons/pi";
import BaseSwitch from "@/components/common/forms/base-switch";

export default function Package() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    register,
    trigger,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: "items", control });
  const watchValues = useWatch({ control });
  const { setActiveState } = useContext(FtlFormContext);
  useEffect(() => {
    if (!fields.length) {
      append({
        weight: "",
        description: "",
      });
    }
  }, []);

  // values: FieldValues
  function submit() {
    setActiveState((prev) => prev + 1);
  }

  const { field: radioFields, fieldState: radioFieldState } = useController({
    name: "measurementType",
    control,
    rules: { required: "Class is required" },
  });

  useEffect(() => {
    const postal = watchValues?.shippingFrom?.postalCode;
    const timeOut = setTimeout(async () => {
      if (postal.length >= 5) {
        const dataa = await axiosInstance.get(`/location?postalCode=${postal}`);
        const {
          data: { data },
        } = dataa;
        const { city, country, state, stateCode } = data;

        setValue("shippingFrom.city", city);
        setValue("shippingFrom.country", country);
        setValue("shippingFrom.state", state);
        setValue("shippingFrom.stateCode", stateCode);

        trigger("shippingFrom.postalCode");
      }
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [watchValues?.shippingFrom?.postalCode]);

  useEffect(() => {
    const postal = watchValues?.shippingTo?.postalCode;
    const timeOut = setTimeout(async () => {
      if (postal.length >= 5) {
        const dataa = await axiosInstance.get(`/location?postalCode=${postal}`);
        const {
          data: { data },
        } = dataa;
        const { city, country, state, stateCode } = data;
        setValue("shippingTo.city", city);
        setValue("shippingTo.country", country);
        setValue("shippingTo.state", state);
        setValue("shippingTo.stateCode", stateCode);

        trigger("shippingTo.postalCode");
      }
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [watchValues?.shippingTo?.postalCode]);

  useEffect(() => {
    const { flatbed, reefer, van, container } = watchValues;
    if (reefer) {
      setValue("flatbed", null);
      setValue("van", null);
      setValue("container", null);
    }
    if (flatbed) {
      setValue("reefer", null);
      setValue("van", null);
      setValue("container", null);
    }
    if (van) {
      setValue("reefer", null);
      setValue("flatbed", null);
      setValue("container", null);
    }
    if (container) {
      setValue("reefer", null);
      setValue("van", null);
      setValue("flatbed", null);
    }
    if (!reefer && !van && !container && !flatbed) {
      return;
    }

    trigger("reefer");
    trigger("flatbed");
    trigger("van");
    trigger("container");
    // if (!packagee && !envelop && !courier && !pallet) {
    //   setValue("pallet", null, { shouldValidate: true });
    //   setValue("envelop", null, { shouldValidate: true });
    //   setValue("package", null, { shouldValidate: true });
    //   setValue("courier", null, { shouldValidate: true });
    // }
  }, [
    watchValues.reefer,
    watchValues.flatbed,
    watchValues.van,
    watchValues.container,
  ]);

  const switchErrors =
    !!errors.flatbed && !!errors.reefer && !!errors.container && !!errors.van;
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="bg-white rounded-xl p-8 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4 items-start">
        <p className="text-base-purple font-semibold text-lg">Equipment</p>
        <div className="flex gap-4 w-full">
          <div
            className={`flex flex-1 p-4 justify-between ${switchErrors && "border-red-400 text-red-400"
              } border-base-teal border-1 rounded-lg`}
          >
            <div className="flex flex-col gap-2 items-start ">
              <Image
                src={"/icons/flatbed.svg"}
                width={100}
                height={100}
                alt="flat bed truck"
              />
              <div className="flex flex-col items-start">
                <p className="text-lg font-semibold">48’ Flatbed</p>
                <p className="text-sm">Dimensions: 48’ x 8’6” x 8’6”</p>
              </div>
            </div>

            <BaseSwitch
              name="flatbed"
              control={control}
              rules={{
                validate: (value, formValues) => {
                  return (
                    !!value ||
                    !!formValues.reefer ||
                    !!formValues.van ||
                    !!formValues.container
                  );
                },
              }}
            />
          </div>

          <div
            className={`flex flex-1 p-4 justify-between ${switchErrors && "border-red-400 text-red-400"
              } border-base-teal border-1 rounded-lg`}
          >
            <div className="flex flex-col gap-2 items-start ">
              <Image
                src={"/icons/reefer.svg"}
                width={100}
                height={100}
                alt="reefer truck"
              />
              <div className="flex flex-col items-start">
                <p className="text-lg font-semibold">53’ Reefer</p>
                <p className="text-sm">Dimensions: 53’ x 8’2” x 8’6”</p>
              </div>
            </div>

            <BaseSwitch
              name="reefer"
              control={control}
              rules={{
                validate: (value, formValues) => {
                  return (
                    !!value ||
                    !!formValues.flatbed ||
                    !!formValues.van ||
                    !!formValues.container
                  );
                },
              }}
            />
          </div>

          <div
            className={`flex flex-1 p-4 justify-between ${switchErrors && "border-red-400 text-red-400"
              } border-base-teal border-1 rounded-lg`}
          >
            <div className="flex flex-col gap-2 items-start ">
              <Image
                src={"/icons/van.svg"}
                width={100}
                height={100}
                alt="van"
              />
              <div className="flex flex-col items-start">
                <p className="text-lg font-semibold">53’ Dry van</p>
                <p className="text-sm">Dimensions: 53’ x 8’” x 9’</p>
              </div>
            </div>

            <BaseSwitch
              name="van"
              control={control}
              rules={{
                validate: (value, formValues) => {
                  return (
                    !!value ||
                    !!formValues.reefer ||
                    !!formValues.flatbed ||
                    !!formValues.container
                  );
                },
              }}
            />
          </div>

          <div
            className={`flex flex-1 p-4 justify-between ${switchErrors && "border-red-400 text-red-400"
              } border-base-teal border-1 rounded-lg`}
          >
            <div className="flex flex-col gap-2 items-start ">
              <Image
                src={"/icons/van.svg"}
                width={100}
                height={100}
                alt="container"
              />
              <div className="flex flex-col items-start">
                <p className="text-lg font-semibold">
                  53’ Intermodal Container
                </p>
                <p className="text-sm">Dimensions: 53’ x 8’” x 9’</p>
              </div>
            </div>

            <BaseSwitch
              name="container"
              control={control}
              rules={{
                validate: (value, formValues) => {
                  return (
                    !!value ||
                    !!formValues.reefer ||
                    !!formValues.van ||
                    !!formValues.flatbed
                  );
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start">
        <p className="text-base-purple font-semibold text-lg">Shipping From:</p>
        <div className="flex gap-4 w-full">
          <BaseInput
            name="shippingFrom.postalCode"
            classNames={{
              inputWrapper:
                "bg-transparent border-1 border-base-teal p-7 rounded-xl",
              label: "pb-2",
              input: "!text-base-blue",
              helperWrapper: "text-start",
            }}
            rules={{
              required: "Postal Code is required",
              minLength: {
                value: 5,
                message: "Min Length is 5",
              },
              validate: (value, formValues) => {
                return (
                  (!!formValues.shippingFrom.city &&
                    !!formValues.shippingFrom.country &&
                    !!formValues.shippingFrom.state) ||
                  "Invalid Postal Code"
                );
              },
            }}
            control={control}
            label="Postal / Zip Code *"
            labelPlacement="outside"
            placeholder="Enter Postal Code"
          />

          <BaseInput
            control={control}
            name="shippingFrom.country"
            classNames={{
              inputWrapper:
                "bg-transparent border-1 border-base-teal p-7 rounded-xl",
              label: "pb-2",
              input: "!text-base-blue",
              helperWrapper: "text-start",
            }}
            isDisabled={true}
            label="Country"
            labelPlacement="outside"
            placeholder="Select"
          />

          <BaseInput
            control={control}
            name="shippingFrom.state"
            classNames={{
              inputWrapper:
                "bg-transparent border-1 border-base-teal p-7 rounded-xl",
              label: "pb-2",
              input: "!text-base-blue",
              helperWrapper: "text-start",
            }}
            isDisabled={true}
            label="State"
            labelPlacement="outside"
            placeholder="Enter"
          />

          <BaseInput
            control={control}
            name="shippingFrom.city"
            classNames={{
              inputWrapper:
                "bg-transparent border-1 border-base-teal p-7 rounded-xl",
              label: "pb-2",
              input: "!text-base-blue",
              helperWrapper: "text-start",
            }}
            isDisabled={true}
            label="City"
            labelPlacement="outside"
            placeholder="Select"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start">
        <p className="text-base-purple font-semibold text-lg">Shipping To:</p>
        <div className="flex gap-4 w-full">
          <BaseInput
            name="shippingTo.postalCode"
            classNames={{
              inputWrapper:
                "bg-transparent border-1 border-base-teal p-7 rounded-xl",
              label: "pb-2",
              input: "!text-base-blue",
              helperWrapper: "text-start",
            }}
            rules={{
              required: "Postal Code is required",
              minLength: {
                value: 5,
                message: "Min Length is 5",
              },
              validate: (value, formValues) => {
                return (
                  (!!formValues.shippingTo.city &&
                    !!formValues.shippingTo.country &&
                    !!formValues.shippingTo.state) ||
                  "Invalid Postal Code"
                );
              },
            }}
            control={control}
            label="Postal / Zip Code *"
            labelPlacement="outside"
            placeholder="Enter Postal Code"
          />

          <BaseInput
            control={control}
            name="shippingTo.country"
            classNames={{
              inputWrapper:
                "bg-transparent border-1 border-base-teal p-7 rounded-xl",
              label: "pb-2",
              input: "!text-base-blue",
              helperWrapper: "text-start",
            }}
            isDisabled={true}
            label="Country"
            labelPlacement="outside"
            placeholder="Select"
          />

          <BaseInput
            control={control}
            name="shippingTo.state"
            classNames={{
              inputWrapper:
                "bg-transparent border-1 border-base-teal p-7 rounded-xl",
              label: "pb-2",
              input: "!text-base-blue",
              helperWrapper: "text-start",
            }}
            isDisabled={true}
            label="State"
            labelPlacement="outside"
            placeholder="Enter"
          />

          <BaseInput
            control={control}
            name="shippingTo.city"
            classNames={{
              inputWrapper:
                "bg-transparent border-1 border-base-teal p-7 rounded-xl",
              label: "pb-2",
              input: "!text-base-blue",
              helperWrapper: "text-start",
            }}
            isDisabled={true}
            label="City"
            labelPlacement="outside"
            placeholder="Select"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start">
        <div className="flex flex-col items-start">
          <p className="text-base-purple font-semibold text-lg">Commodities:</p>
          <p>
            For each commodity, please enter a weight (whole number in pounds)
            and description.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {fields.map((e, index, array) => (
            <div key={e.id} className="flex gap-4 w-full items-end">
              <Input
                {...register(`items.${index}.weight`, {
                  required: "Weight is required",
                })}
                type="number"
                name={`items.${index}.weight`}
                isInvalid={!!(errors.items as any)?.[index]?.weight}
                errorMessage={(errors.items as any)?.[index]?.weight?.message}
                className="max-w-40"
                classNames={{
                  inputWrapper:
                    "bg-transparent border-1 border-base-teal p-7 rounded-xl",
                  label: "pb-2",
                  input: "!text-base-blue",
                }}
                label="Weight(lbs) *"
                labelPlacement="outside"
                placeholder="Enter Weight"
              />

              <Input
                {...register(`items.${index}.description`, {
                  required: "Description is required",
                })}
                isInvalid={!!(errors.items as any)?.[index]?.description}
                errorMessage={
                  (errors.items as any)?.[index]?.description?.message
                }
                className="flex-1"
                classNames={{
                  inputWrapper:
                    "bg-transparent border-1 border-base-teal p-7 rounded-xl",
                  label: "pb-2",
                  input: "!text-base-blue",
                }}
                label="Description *"
                labelPlacement="outside"
                placeholder="Enter Description"
              />
              {!!(array.length - 1) && (
                <BaseButton onClick={() => remove(index)}>Delete</BaseButton>
              )}
            </div>
          ))}
          <BaseButton onClick={() => append({ weight: "", description: "" })}>
            Add More
          </BaseButton>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-start">
        <p className="text-base-purple font-semibold text-lg">
          Dimensions & Weight:
        </p>
        <div className="flex gap-4 w-full ">
          <BaseInput
            name="palletQuantity"
            type="number"
            className="max-w-52"
            rules={{ required: "Pallet Quantity is required" }}
            classNames={{
              inputWrapper:
                "bg-transparent border-1 border-base-teal p-7 rounded-xl",
              label: "pb-2",
              input: "!text-base-blue",
            }}
            control={control}
            label="Pallet Quantity"
            labelPlacement="outside"
            placeholder="Enter "
          />
          <div className="flex flex-col gap-4 items-start flex-1">
            <p>Class & Density Calculator</p>
            <RadioGroup
              {...radioFields}
              isInvalid={!!radioFieldState.error}
              errorMessage={radioFieldState.error?.message}
              classNames={{ wrapper: "!flex-row !flex-nowrap" }}
              className="w-full items-start"
            >
              <Radio value={"1"}>
                <div className="flex gap-2 items-center">
                  <p>Metric ( cm & kg ) </p>{" "}
                  <PiWarningCircleFill className="text-base-blue" />
                </div>
              </Radio>
              <Radio value={"2"}>Imperial ( in & lbs )</Radio>
            </RadioGroup>
          </div>
        </div>

        {/* <div className="flex gap-4">
          <p className="text-base-purple font-semibold text-md">
            Extra services:
          </p>
          <Checkbox>Hazardous</Checkbox>
        </div> */}

        {/* <div className="flex flex-col items-start w-full gap-4">
          <p className="text-base-purple font-semibold text-md">
            Additional Service Options:
          </p>
          <div className=" flex gap-4 w-full">
            <Checkbox className="!flex-1 max-w-full">Air Ride</Checkbox>
            <Checkbox className="!flex-1 max-w-full">Food grade</Checkbox>
            <Checkbox className="!flex-1 max-w-full">Load Bars</Checkbox>
            <Checkbox className="!flex-1 max-w-full">Straps</Checkbox>
            <Checkbox className="!flex-1 max-w-full">Tarps</Checkbox>
            <Checkbox className="!flex-1 max-w-full">Team</Checkbox>
          </div>
        </div> */}
      </div>

      <div className="flex justify-end">
        <BaseButton type="submit" extraClass="!p-6">
          Next
        </BaseButton>
      </div>
    </form>
  );
}
