import Link from "next/link"

export default function Footer() {
    return (
        <div className="divider1 b bg-sfumed-1 pb-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 pt-[100px] md:pt-[150px]">
                <div className="col-span-1 flex flex-row justify-center items-center pb-10 md:pb-0">
                    <div className="">
                        <h2 className="text-white">ALTERA</h2>
                    </div>
                </div>
                <div className="col-span-1 flex flex-row justify-center items-center pb-10 md:pb-0">
                    <div className="flex flex-row justify-center items-center">
                        <Link legacyBehavior href="https://www.facebook.com/altera.consulting">
                            <a className="pr-3 pl-3 md:pl-0 md:pr-5"><img src="images/facebook.png" /></a>
                        </Link>
                        <Link legacyBehavior href="https://www.facebook.com/altera.consulting">
                            <a className="pr-3 pl-3 md:pl-0 md:pr-5"><img src="images/instagram.png" /></a>
                        </Link>
                        <Link legacyBehavior href="https://www.facebook.com/altera.consulting">
                            <a className="pr-3 pl-3 md:pl-0 md:pr-5"><img src="images/linkedin.png" /></a>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 flex flex-row justify-center items-center pb-10 md:pb-0">
                    <div className="flex flex-row justify-center items-center">
                        <h2 className="text-white font-[500]">info@altera.consulting</h2>
                    </div>
                </div>
            </div>
            <div className="px-[15px]"><hr className="max-w-[500px] mx-auto pt-[10px] mt-4" /></div>
            <div className="container mx-auto text-center text-white text-[15px]">
                Altera ©2022 All rights reserved
            </div>
        </div>
    )
}