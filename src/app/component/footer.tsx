export default function Footer() {
    return (
        <footer className=" bg-black text-white">
            <div className="px-[135px] pt-[80px] flex  gap-x-[87px]">
                {/* 1st */}
                <div>
                    <div className="space-y-6">
                        <h4>Exclusive</h4>
                        <p className="font-medium text-xl">Subscribe</p>
                        <p>Get 10% off your first order</p>
                    </div>
                    <div className="bg-transparent w-[217px] mt-4 flex relative  border-white border-[1.5px] text-white placeholder-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white">
                        <input
                            type="text" placeholder="Enter your email" className="bg-[#000000] " />
                        <img className="absolute right-3" src="/footer-icon-send.svg" alt="failed" />
                    </div>
                </div>
                {/* 1st end */}



                <div className="space-y-6" >
                    <p className="font-medium text-xl"> Support</p>
                    <div className="space-y-4">
                        <p className="w-[175px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                </div>




                <div className="space-y-6">
                    <p className="font-medium text-xl"> Support</p>
                    <div className="space-y-4">
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                </div>



                <div className="space-y-6">
                    <p className="font-medium text-xl"> Quick Link</p>
                    <div className="space-y-4">
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                </div>






                <div className="space-y-6">
                    <p className="font-medium text-xl"> Quick Link</p>
                    <div>
                        <p className="font-medium text-[12px] leading-[18px] opacity-70">Save $3 with App New User Only</p>
                        <div className="flex gap-x-2 mt-2">
                            <img src="/footer-Qr-code.svg" alt="QR Code" />
                            <img src="/footer-play-app-store.svg" alt="App stotre link" />
                        </div>
                    </div>
                    <img src="/footer-logos.svg" alt="failedc:\Users\Administrator\Downloads\footer-copyright-logo.svg" />
                </div>






















            </div>

            <div className=" border-t border-[rgb(255,255,255,0.4)] mt-[60px] ">
                <div className="flex gap-x-1 opacity-40 mt-4 justify-center" >
                    <p className="w-5 h-5 ">©</p>
                    <p className="text-white text-[16px] leading-[24px] text-center"> Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </footer>
    )
}