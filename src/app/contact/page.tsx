export default function Error() {
    return (
        <main>
            <section className="mx-[135px] bg-white">
                <span className="flex gap-x-3 mt-[96px]">
                    <p className="opacity-50" > Home </p>
                    <p className="opacity-50">/</p>
                    <p> Contact</p>
                </span>
            </section>


            <section className="mt-[80px] pl-[135px] mb-[140px]">
                <div className="flex gap-x-[30px]">
                    <div className="shadow-[0_1px_13px_#0000000d] w-[340px]">
                        <div className="flex gap-x-4 items-center">
                            <img src="/phone-icon.svg" alt="Image Failed" />
                            <p className="font-medium">Call To Us</p>
                        </div>
                        <div className="space-y-4 mt-6">
                            <p>We are available 24/7, 7 days a week.</p>
                            <p>Phone: +8801611112222</p>
                        </div>
                        <div className=" mt-8 w-[270px] border border-[#00000080]" />
                        <div className="flex gap-x-4 mt-8 items-center">
                            <img src="/icons-mail.svg" alt="Image Failed" />
                            <p className="font-medium">Write To Us</p>
                        </div>
                        <div className="space-y-4 mt-6 w-[250px]">
                            <p>Fill out our form and we will contact you within 24 hours.</p>
                            <p>Emails: customer@exclusive.com</p>
                            <p>Emails: support@exclusive.com</p>
                        </div>
                    </div>

                    <div>
                        <div className="bg-[#FFFFFF] shadow-[0_1px_13px_#0000000d]">
                            <div className="space-y-8 py-10 px-8">
                                <div className="flex gap-x-4">
                                    <div className="bg-[#F5F5F5] rounded w-[235px] ">
                                        <p className="text-[#00000080] py-[13px] pl-4">Your Name *</p>
                                    </div>
                                    <div className="bg-[#F5F5F5] rounded w-[235px] ">
                                        <p className="text-[#00000080] py-[13px] pl-4">Your Email *</p>
                                    </div>
                                    <div className="bg-[#F5F5F5] rounded w-[235px] ">
                                        <p className="text-[#00000080] py-[13px] pl-4">Your Phone *</p>
                                    </div>
                                </div>
                                <div className="bg-[#F5F5F5] rounded w-[737px] h-[207px] ">
                                    <p className="text-[#00000080] py-[13px] pl-4">Your Massage</p>
                                </div>
                                <div className="bg-[#DB4444] ml-auto rounded w-[215px] ">
                                    <button className="py-4 px-[48px] text-white"> Send Massage</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}