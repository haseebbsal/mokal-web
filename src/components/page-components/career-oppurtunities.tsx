"use client";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BaseButton from "../common/base-button";
import BaseFile from "../common/forms/base-file";
import BaseInput from "../common/forms/base-input";
import BaseTextArea from "../common/forms/base-textarea";
import { Accordion, AccordionItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import LinearGradientText from "../common/linear-gradient-text";
import { BiSearch } from "react-icons/bi";

export default function CareerOppurtunities() {
  const { control } = useForm();

  return (
    <div
      className={`  p-8 flex flex-col gap-16 sm:w-[80%] m-auto items-center `}
    >
      <div>
        <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">
          Current <LinearGradientText text="Career Opportunities" />
        </h1>
        <p className="text-text-darkGray">
          View available openings with Freightcom across our many locations.
        </p>
      </div>
      <BaseInput
        name="search"
        classNames={{ inputWrapper: "p-6" }}
        extraClass="w-full"
        control={control}
        placeholder="Search Positions"
        endContent={<BiSearch size={20} />}
      />

      <Accordion variant="splitted">
        <AccordionItem
          className="bg-transparent shadow-none border-1 border-gray-200"
          classNames={{
            title: "font-semibold text-lg",
            indicator: "!rotate-0",
          }}
          title="Billing Specialist"
          indicator={
            <p
              onClick={() => {}}
              className="p-2 bg-transparent border-base-blue border-2 rounded-xl text-base-blue"
            >
              Apply Now
            </p>
          }
        >
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap mt-4">
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                control={control}
                placeholder="First Name"
                label="First Name *"
                labelPlacement="outside"
              />
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                control={control}
                placeholder="Last Name"
                label="Last Name *"
                labelPlacement="outside"
              />
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                type="email"
                control={control}
                placeholder="Email"
                label="Email *"
                labelPlacement="outside"
              />
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                control={control}
                placeholder="Position"
                label="Position you are looking for? *"
                labelPlacement="outside"
              />
              <BaseFile
                name="file1"
                control={control}
                className="flex-[1_0_40%]"
                bgColor="bg-gray-100"
                label="Resume *"
              />
              <BaseFile
                name="file2"
                control={control}
                className="flex-[1_0_40%]"
                bgColor="bg-gray-100"
                label="Cover Letter"
              />
              <BaseTextArea
                name="checkcc"
                control={control}
                label="Message"
                labelPlacement="outside"
                placeholder="Write Message"
                minRows={10}
              />
              <BaseButton extraClass="!py-6">
                Submit Application <MdKeyboardDoubleArrowRight />
              </BaseButton>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          className="bg-transparent shadow-none border-1 border-gray-200"
          classNames={{
            title: "font-semibold text-lg",
            indicator: "!rotate-0",
          }}
          title="Account Executive"
          indicator={
            <p
              onClick={() => {}}
              className="p-2 bg-transparent border-base-blue border-2 rounded-xl text-base-blue "
            >
              Apply Now
            </p>
          }
        >
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap mt-4">
              {/* <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="First Name" label="First Name *" labelPlacement="outside" />
                            <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Last Name" label="Last Name *" labelPlacement="outside" />
                            <BaseInput extraClass="flex-[1_0_20%]" type="email" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                            <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Position" label="Position you are looking for? *" labelPlacement="outside" />
                            <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Resume *" />
                            <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Cover Letter" />
                            <BaseTextArea label="Message" labelPlacement="outside" placeholder="Write Message" minRows={10} /> */}
              <BaseButton extraClass="!py-6">
                Submit Application <MdKeyboardDoubleArrowRight />
              </BaseButton>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          className="bg-transparent shadow-none border-1 border-gray-200"
          classNames={{
            title: "font-semibold text-lg",
            indicator: "!rotate-0",
          }}
          title="Senior Technical Lead"
          indicator={
            <p
              onClick={() => {}}
              className="p-2 bg-transparent border-base-blue border-2 rounded-xl text-base-blue "
            >
              Apply Now
            </p>
          }
        >
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap mt-4">
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                control={control}
                placeholder="First Name"
                label="First Name *"
                labelPlacement="outside"
              />
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                control={control}
                placeholder="Last Name"
                label="Last Name *"
                labelPlacement="outside"
              />
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                type="email"
                control={control}
                placeholder="Email"
                label="Email *"
                labelPlacement="outside"
              />
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                control={control}
                placeholder="Position"
                label="Position you are looking for? *"
                labelPlacement="outside"
              />
              <BaseFile
                name="firstName"
                control={control}
                className="flex-[1_0_40%]"
                bgColor="bg-gray-100"
                label="Resume *"
              />
              <BaseFile
                name="firstName"
                control={control}
                className="flex-[1_0_40%]"
                bgColor="bg-gray-100"
                label="Cover Letter"
              />
              <BaseTextArea
                name="firstName"
                control={control}
                label="Message"
                labelPlacement="outside"
                placeholder="Write Message"
                minRows={10}
              />
              <BaseButton extraClass="!py-6">
                Submit Application <MdKeyboardDoubleArrowRight />
              </BaseButton>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          className="bg-transparent shadow-none border-1 border-gray-200"
          classNames={{
            title: "font-semibold text-lg",
            indicator: "!rotate-0",
          }}
          title="Technical Sales Representative"
          indicator={
            <p
              onClick={() => {}}
              className="p-2 bg-transparent border-base-blue border-2 rounded-xl text-base-blue "
            >
              Apply Now
            </p>
          }
        >
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Position Overview:</p>
              <p className="text-text-darkGray">
                We are seeking a dynamic and results-driven Technical Sales
                Representative to join our team. In this role, you will bridge
                the gap between technology and sales, leveraging your technical
                expertise to identify customer needs, present solutions, and
                drive revenue growth. You will work closely with the sales and
                technical teams to deliver exceptional service and support to
                our clients.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap mt-4">
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                control={control}
                placeholder="First Name"
                label="First Name *"
                labelPlacement="outside"
              />
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                control={control}
                placeholder="Last Name"
                label="Last Name *"
                labelPlacement="outside"
              />
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                type="email"
                control={control}
                placeholder="Email"
                label="Email *"
                labelPlacement="outside"
              />
              <BaseInput
                name="firstName"
                extraClass="flex-[1_0_20%]"
                control={control}
                placeholder="Position"
                label="Position you are looking for? *"
                labelPlacement="outside"
              />
              <BaseFile
                control={control}
                name="firstName"
                className="flex-[1_0_40%]"
                bgColor="bg-gray-100"
                label="Resume *"
              />
              <BaseFile
                control={control}
                name="firstName"
                className="flex-[1_0_40%]"
                bgColor="bg-gray-100"
                label="Cover Letter"
              />
              <BaseTextArea
                control={control}
                name="firstName"
                label="Message"
                labelPlacement="outside"
                placeholder="Write Message"
                minRows={10}
              />
              <BaseButton extraClass="!py-6">
                Submit Application <MdKeyboardDoubleArrowRight />
              </BaseButton>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
