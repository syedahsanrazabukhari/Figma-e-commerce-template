export default function signup() {
    return (
        <main>
            <section className="mt-[60px] mb-[140px] flex gap-x-[129px] ">
                <div>
                    <img src="/sign-up-mobile.svg" alt="Image failed" />
                </div >
                <div className="py-[125px] ">
                    <div className="space-y-6">
                        <h2 className="font-medium leading-[30px]">Create an account</h2>
                        <p className="text-[16px] leading-[24px] text-black">Enter your details below</p>
                    </div>
                    <div className="mt-[48px]">
                        <div className="flex flex-col gap-y-[40px]">
                            <input type="text" placeholder="Name" className="text-[rgb(0,0,0,.4)] pb-2 border-b border-[rgb(0,0,0,.4)] w-[370px]" />
                            <input type="text" placeholder="Email or Phone Number" className="text-[rgb(0,0,0,.4)] pb-2 border-b border-[rgb(0,0,0,.4)] w-[370px]" />
                            <input type="text" placeholder="Password" className="text-[rgb(0,0,0,.4)] pb-2 border-b border-[rgb(0,0,0,.4)] w-[370px]" />
                        </div>
                        <div className="mt-10">
                            <button className="bg-[#DB4444] rounded-[4px] ">
                                <p className="font-medium text-base py-4 px-[122px] text-white">Create Account</p>
                            </button>
                            <button className="rounded-[4px] mt-4 border border-[#00000066]   ">
                                <div className="flex gap-x-4 py-4 px-[86px]">
                                <img src="Icon-Google.svg" alt="Image failed" />
                                <p>Sign up with Google</p>
                                </div>
                            </button>
                            <div className="flex gap-x-4 mt-[32px] mx-[61px]">
                                <p className="text-base text-[#000000b3]">Already have account?</p>
                                <p className="border-b border-[#000000b3] w-[47px] text-[#000000b3] font-medium text-base"> Log in</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}