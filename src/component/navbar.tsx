export default function Navbar() {
    return (
        <>

            {/* Navbar */}
            <nav>
                <div className="px-[135px] pt-10 pb-4 flex gap-x-[148px]"  >
                    <div className="flex flex-row gap-x-[190px]">
                        <h2 className="font-inter font-bold text-[24px] leading-[24px] tracking-[0.03em] text-black">Exclusive</h2>
                        <ul className="flex gap-x-[48px]">
                            <li className="font-poppins font-normal text-[16px] leading-[24px] text-center text-black border-[#505050] border-b">Home</li>
                            <li className="font-poppins font-normal text-[16px] leading-[24px] text-center text-black">Contact</li>
                            <li className="font-poppins font-normal text-[16px] leading-[24px] text-center text-black">About</li>
                            <li className="font-poppins font-normal text-[16px] leading-[24px] text-center text-black w-100% shrink-0">Sign Up</li>
                        </ul>
                    </div>
                    <div className="flex gap-x-6">
                        <div className="py-[7px] px-3 flex gap-x-[34px] w-[243px] bg-[#F5F5F5]">
                            <input type="text" placeholder="What are you looking for?" className="font-poppins font-normal text-[12px] leading-[18px] text-[Text2] bg-[#F5F5F5]" />
                            <img src="/nav-search-icon.svg" alt="failef" />
                        </div>
                        <div className="flex gap-x-4">
                            <img src="/nav-Wishlist.svg" alt="failed" />
                            <img src="/nav-cart.svg" alt="failed" />
                        </div>
                    </div>
                </div>
                <img src="/nav-line.svg" alt="failed" />
            </nav>

        </>
    )
}