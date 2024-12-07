export default function cart() {
    return (
        <main>
            <section className="mx-[135px]">
                <span className="flex gap-x-3 mt-[96px]">
                    <p className="opacity-50" > Home </p>
                    <p className="opacity-50">/</p>
                    <p className="opacity-50">My Account</p>
                    <p className="opacity-50">/</p>
                    <p className="opacity-50">Product</p>
                    <p className="opacity-50">/</p>
                    <p className="opacity-50">View Cart</p>
                    <p className="opacity-50">/</p>
                    <p>CheckOut</p>
                </span>

                <p className="font-medium text-[36px] leading-[30px] mt-[80px]">Billing Details</p>
                <div className="flex gap-x-[173px]">
                    <div className="space-y-8">
                        <div className="mt-12 ">
                            <p className="opacity-40 text-black">First Name*</p>
                            <p className="w-[470px] h-[50px] rounded bg-[#F5F5F5]"></p>
                        </div>
                        <div>
                            <p className="opacity-40 text-black">Company Name</p>
                            <p className="w-[470px] h-[50px] rounded bg-[#F5F5F5]"></p>
                        </div>
                        <div >
                            <p className="opacity-40 text-black">Street Address*</p>
                            <p className="w-[470px] h-[50px] rounded bg-[#F5F5F5]"></p>
                        </div>
                        <div>
                            <p className="opacity-40 text-black">Apartment, floor, etc. (optional)</p>
                            <p className="w-[470px] h-[50px] rounded bg-[#F5F5F5]"></p>
                        </div>
                        <div>
                            <p className="opacity-40 text-black">Town/City*</p>
                            <p className="w-[470px] h-[50px] rounded bg-[#F5F5F5]"></p>
                        </div>
                        <div>
                            <p className="opacity-40 text-black">Phone Number*</p>
                            <p className="w-[470px] h-[50px] rounded bg-[#F5F5F5]"></p>
                        </div>
                        <div>
                            <p className="opacity-40 text-black">Email Address*</p>
                            <p className="w-[470px] h-[50px] rounded bg-[#F5F5F5]"></p>
                        </div>
                        <div className="flex gap-x-4 mt-[24px] pb-[140px]">
                            <img src="/icon-checkbox.svg" alt="failed" />
                            <p className="">Save this information for faster check-out next time</p>
                        </div>
                    </div>


                    <div className="pr-[240px] space-y-8">
                        <div className="flex mt-14 gap-x-4 items-center">
                            <img src="/little-gamepad.svg" alt="Image Failed" />
                            <span className="flex gap-x-[145px] items-center">
                                <p className="whitespace-nowrap ">LCD Monitor</p>
                                <p>$650</p>
                            </span>
                        </div>
                        <div className="flex gap-x-4 items-center">
                            <img src="/little-lcd.svg" alt="Image Failed" />
                            <span className="flex gap-x-[145px] items-center">
                                <p className="whitespace-nowrap ">H1 Gamepad</p>
                                <p>$1100</p>
                            </span>
                        </div>
                        <div className="space-y-8 w-[360px]">
                            <div className="flex justify-between border-b pb-4 border-[#00000066] ">
                                <p>Subtotal:</p>
                                <p>$1750</p>
                            </div>
                            <div className="flex justify-between border-b pb-4 border-[#00000066]">
                                <p>Shipping:</p>
                                <p>Free</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Total:</p>
                                <p>$1750</p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <img src="/whole.svg" alt="failed" />
                                    <img src="/payment-refrences.svg" alt="Image Failed" />
                                </div>
                                <div className="flex gap-x-4 mt-8">
                                    <img src="/black-whole.svg" alt="Image-Failed" />
                                    <p>Cash on delivery</p>
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <button className="rounded-[4px] border border-[#000000]  ">
                                    <p className="pl-6 py-4 pr-[164px] whitespace-nowrap text-[#00000080]">Coupon Code</p>
                                </button>
                                <button className="bg-[#DB4444]  w-[204px] rounded-[4px] ">
                                    <p className="font-medium text-white whitespace-nowrap py-4 px-[48px]">Apply Coupon</p>
                                </button>
                            </div>
                            <button className="bg-[#DB4444] rounded-[4px] ">
                                    <p className="font-medium text-white  py-4 px-[48px]">Place Order</p>
                                </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}