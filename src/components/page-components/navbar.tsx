import { client,links } from "@/utils/constants";
import { Navbar, NavbarContent } from "@heroui/navbar";
import { IoIosCall } from "react-icons/io";
import CheckStatusForm from "../forms/check-status";
import NavbarBottomHeader from "./navbar-bottom-header";
import Link from "next/link";
import { configData } from "@/utils/types";

export default async function MainNavbar() {

    const configData: configData = await client.fetch({
        query: `*[_type == 'config'][0]{
        ...,
        "imageUrl": logo.asset->url,
        }`,
        config: {
            cache: 'no-store',
        }
    });

    return (
        <>
            <div className="flex flex-col gap-4">
                <Navbar height={'auto'} position="static" className={`justify-start items-center bg-nav  text-base-blue sm:px-8 px-2 py-4 sm:py-0 !h-auto min-h-16`} classNames={{ wrapper: "w-full max-w-full p-0 sm:flex-row flex-col" }} shouldHideOnScroll>
                    <NavbarContent className=" flex" >
                        <div className="flex w-full sm:gap-16 gap-8 items-center">
                            <div className="flex gap-4">
                                <p className="sm:block hidden">www.mgcfreight.com</p>
                                {configData.countries?.slice(0,3).map((e, index) => <p key={e.name} className={`${index != 0 ? "border-l-2" : "sm:border-l-2"}  pl-2 border-base-blue`}>{e.name}</p>)}
                            </div>
                            <div className="flex gap-2 items-center">
                                <IoIosCall size={20} />
                                <p>{configData.phoneNumber}</p>
                            </div>
                        </div>
                    </NavbarContent>
                    <NavbarContent className="sm:justify-end">
                        <div className="flex  gap-4 w-full sm:justify-end items-center">
                            <div className="flex gap-2 text-base-blue">
                                {
                                    configData.socialLinks && Object.entries(configData.socialLinks).map((e) => <Link key={e[1]} target="_blank" href={e[1] as string}>{links[e[0] as keyof (typeof links)]}</Link>)
                                }
                            </div>
                            <CheckStatusForm />
                        </div>
                    </NavbarContent>
                </Navbar>
                <NavbarBottomHeader logo={configData.imageUrl}/>
            </div>
        </>
    )
}