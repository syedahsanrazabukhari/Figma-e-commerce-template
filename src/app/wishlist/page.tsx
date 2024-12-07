export default function Wishlist() {
    return (
        <main>
            <section className="mx-[135px] mt-[80px] mb-[140px]">
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-xl"> Wishlist (4)</p>
                        <button className="border border-[#00000080] opacity-100">
                            <p className="font-medium py-4 px-[48px] ">Move All To Bag</p>
                        </button>
                    </div>
                    <div className="mt-[60px] flex gap-x-[30px]">
                        <div>
                            <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                                <div className="relative">
                                    <div className="absolute top-3 left-3  rounded-[4px] bg-[#DB4444]  w-[55px] h-[26px] " >
                                        <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">-35%</p>
                                    </div>
                                    <div className="absolute top-3 right-3 ">
                                        <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                                            <img className="py-[5px] px-[5px]" src="/icon-delete.svg" alt="failed" />
                                        </div>
                                    </div>
                                    <img className="px-10 py-[30px]" src="/hand-bag.svg" alt="failed" />
                                    <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                                        <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-4 space-y-2 items-center">
                                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">Gucci duffle bag</p>
                                <div className="flex gap-x-3">
                                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $960</p>
                                    <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$1160</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                                <div className="relative">
                                    <div className="absolute top-3 left-3  rounded-[4px] bg-[#DB4444]  w-[55px] h-[26px] " >
                                        <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">-35%</p>
                                    </div>
                                    <div className="absolute top-3 right-3 ">
                                        <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                                            <img className="py-[5px] px-[5px]" src="/icon-delete.svg" alt="failed" />
                                        </div>
                                    </div>
                                    <img className="px-10 py-[30px]" src="/wishlist-speaker.svg" alt="failed" />
                                    <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                                        <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-4 space-y-2 items-center">
                                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">RGB liquid CPU Cooler</p>
                                <div className="flex gap-x-3">
                                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $1960</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                                <div className="relative">
                                    <div className="absolute top-3 right-3 ">
                                        <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                                            <img className="py-[5px] px-[5px]" src="/icon-delete.svg" alt="failed" />
                                        </div>
                                    </div>
                                    <img className="px-10 py-[30px]" src="/black-gamepad.svg" alt="failed" />
                                    <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                                        <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-4 space-y-2 items-center">
                                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">GP11 Shooter USB Gamepad</p>
                                <div className="flex gap-x-3">
                                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $550</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                                <div className="relative">
                                    <div className="absolute top-3 right-3 ">
                                        <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                                            <img className="py-[5px] px-[5px]" src="/icon-delete.svg" alt="failed" />
                                        </div>
                                    </div>
                                    <img className="px-10 py-[30px]" src="/jacket-grey.svg" alt="failed" />
                                    <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                                        <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-4 space-y-2 items-center">
                                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">Quilted Satin Jacket duffle bag</p>
                                <div className="flex gap-x-3">
                                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $750</p>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* 2nd */}
                    <div className="mt-20">

                        <div className=" flex items-center justify-between">
                            <p className="title-mini-red font-normal text-black text-[20px] leading-[28px]" >Just For You</p>
                           < button className="border border-[#00000080] opacity-100">
                            <p className="font-medium py-4 px-[48px] ">See All</p>
                        </button>
                        </div>


                        <div className=" mt-[60px] flex gap-x-[30px]">
                            <div>
                                <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                                    <div className="relative"> <div className="absolute top-3 left-3  rounded-[4px] bg-[#DB4444]  w-[55px] h-[26px] " >
                                        <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">-35%</p>
                                    </div> <div className="absolute top-3 right-3 ">
                                            <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                                                <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                                            </div>
                                        </div>
                                        <img className="px-10 py-[30px]" src="/laptop.svg" alt="failed" />
                                        <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                                            <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2 items-center">
                                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">ASUS FHD Gaming Laptop</p>
                                    <div className="flex gap-x-3">
                                        <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $960</p>
                                        <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$1160</p>

                                    </div>
                                    <img src="/5-star-65.svg" alt="failed" />
                                </div>
                            </div>




                            <div>
                                <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                                    <div className="relative">

                                        <div className="absolute top-3 right-3 ">
                                            <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                                                <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                                            </div>
                                        </div>
                                        <img className="px-10 py-[30px]" src="/lcd.svg" alt="failed" />
                                        <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                                            <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2 items-center">
                                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">IPS LCD Gaming Monitor</p>
                                    <div className="flex gap-x-3">
                                        <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $1160</p>

                                    </div>
                                    <img src="/5-star-65.svg" alt="failed" />
                                </div>
                            </div>

                            {/* stop */}

                            <div>
                                <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                                    <div className="relative"> <div className="absolute top-3 left-3  rounded-[4px] bg-[#00FF66]  w-[55px] h-[26px] " >
                                        <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">NEW</p>
                                    </div> <div className="absolute top-3 right-3 ">
                                            <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                                                <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                                            </div>
                                        </div>
                                        <img className="px-10 py-[30px]" src="/gaming-pad.svg" alt="failed" />
                                        <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                                            <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2 items-center">
                                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">HAVIT HV-G92 Gamepad</p>
                                    <div className="flex gap-x-3">
                                        <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $560</p>
                                    </div>
                                    <img src="/5-star-65.svg" alt="failed" />
                                </div>
                            </div>



                            <div>
                                <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                                    <div className="relative">
                                        <div className="absolute top-3 right-3 ">
                                            <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                                                <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                                            </div>
                                        </div>
                                        <img className="px-10 py-[30px]" src="/keyboard.svg" alt="failed" />
                                        <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                                            <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2 items-center">
                                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">AK-900 Wired Keyboard</p>
                                    <div className="flex gap-x-3">
                                        <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $200</p>
                                    </div>
                                    <img src="/5-star-65.svg" alt="failed" />
                                </div>
                            </div>
                        </div>
                    </div>














































































                </div>

            </section>
        </main>
    )
}