export default function login() {
    return (
        <main>
            <section className="mt-[60px] mb-[140px] flex gap-x-[129px] ">
                <div>
                    <img src="/sign-up-mobile.svg" alt="Image failed" />
                </div >
                <div className="py-[227px] ">
                    <div className="space-y-6">
                        <h2 className="font-medium leading-[30px]">Log in to Exclusive</h2>
                        <p className="text-[16px] leading-[24px] text-black">Enter your details below</p>
                    </div>
                    <div className="mt-[48px]">
                        <div className="flex flex-col gap-y-[40px]">
                            <input type="text" placeholder="Email or Phone Number" className="text-[rgb(0,0,0,.4)] pb-2 border-b border-[rgb(0,0,0,.4)] w-[370px]" />
                            <input type="text" placeholder="Password" className="text-[rgb(0,0,0,.4)] pb-2 border-b border-[rgb(0,0,0,.4)] w-[370px]" />
                        </div>
                        <div className="mt-10">
                            <div className="flex items-center justify-between">
                                <button className="bg-[#DB4444] rounded-[4px] ">
                                    <p className="font-medium text-base py-4 px-[48px] text-white">Log In</p>
                                </button>
                                <p className="text-[#DB4444]">Forget Password?</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}