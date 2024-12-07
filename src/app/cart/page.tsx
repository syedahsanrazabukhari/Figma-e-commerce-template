export default function cart() {
    return (
        <main>
            <section className="mx-[135px]">
                <span className="flex gap-x-3 mt-[96px]">
                    <p className="opacity-50" > Home </p>
                    <p className="opacity-50">/</p>
                    <p> Cart </p>
                </span>

                <div className="mt-20 text-base space-y-10 ">


                    <div className="text-base  flex justify-between">
                        <p>Product</p>
                        <p className="pl-[115px]">Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-5 items-center">
                            <img src="/little-lcd.svg" alt="failed" />
                            <p> LCD Monitor</p>
                        </div>
                        <p>$560</p>
                        <img src="/slider-1.svg" alt="" />
                        <p className="pr-[14px]">$560</p>
                    </div>



                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-5 items-center">
                            <img src="/little-gamepad.svg" alt="failed" />
                            <p> LCD Monitor</p>
                        </div>
                        <p>$550</p>
                        <img src="/slider-2.svg" alt="" />
                        <p className="pr-[14px]">$550</p>
                    </div>



                    <div className="flex justify-between">
                        < button className="border border-[#00000080] opacity-100">
                            <p className="font-medium py-4 px-[48px] ">Return to Shop </p>
                        </button>
                        < button className="border border-[#00000080] opacity-100">
                            <p className="font-medium py-4 px-[48px] ">Update Cart</p>
                        </button>
                    </div>


                    <div className="mt-20 pb-[140px]">
                        <div className="flex gap-x-[171px]">
                            <div className="space-x-4">
                                <button className="rounded-[4px] border border-[#000000]  ">
                                    <p className="pl-6 py-4 pr-[164px] text-[#00000080]">Coupon Code</p>
                                </button>
                                <button className="bg-[#DB4444] rounded-[4px] ">
                                    <p className="font-medium text-white py-4 px-[48px]">Apply Coupon</p>
                                </button>
                            </div>
                            <div className="border border-black rounded py-[32px] px-[24px] w-[470px]">
                                <p className="font-medium text-[20px] leading-[20px]">Cart Total</p>
                                <div className="mt-[24px] space-y-4 ">
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
                                    <button className="bg-[#DB4444] rounded ml-[90px] ">
                                        <p className="text-white py-4 px-[48px]">Procees to checkout</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}