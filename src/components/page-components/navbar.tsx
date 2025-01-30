import { countries, phoneNumber } from "@/utils/constants";
import { Navbar,NavbarContent} from "@heroui/navbar";
import { IoIosCall } from "react-icons/io";
import CheckStatusForm from "../forms/check-status";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import NavbarBottomHeader from "./navbar-bottom-header";


export default function MainNavbar() {

    return (
        <>
            <div className="flex flex-col gap-4">
                <Navbar height={'auto'} position="static" className={`justify-start items-center bg-nav  text-base-blue sm:px-8 px-2 py-4 sm:py-0 !h-auto min-h-16`} classNames={{ wrapper: "w-full max-w-full p-0 sm:flex-row flex-col" }} shouldHideOnScroll>
                    <NavbarContent className=" flex" >
                        <div className="flex w-full sm:gap-16 gap-8 items-center">
                            <div className="flex gap-4">
                                <p className="sm:block hidden">www.mgcfreight.com</p>
                                {countries.map((e: string,index) => <p key={e} className={`${index!=0?"border-l-2" :"sm:border-l-2"}  pl-2 border-base-blue`}>{e}</p>)}
                            </div>
                            <div className="flex gap-2 items-center">
                                <IoIosCall size={20} />
                                <p>{phoneNumber}</p>
                            </div>
                        </div>
                    </NavbarContent>
                    <NavbarContent className="sm:justify-end">
                        <div className="flex  gap-4 w-full sm:justify-end items-center">
                            <div className="flex gap-2 text-base-blue">
                                <FaFacebook />
                                <AiFillTwitterCircle />
                                <FaInstagramSquare />
                                <FaLinkedin />
                            </div>
                            <CheckStatusForm />
                        </div>
                    </NavbarContent>
                </Navbar>
                <NavbarBottomHeader/>
            </div>
        </>
    )
}