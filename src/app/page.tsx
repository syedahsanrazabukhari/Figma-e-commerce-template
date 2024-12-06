import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/*Hero Section */}
      <section className="px-[135px] flex gap-x-[45px]">
        <div className="space-y-6 pt-10 pr-4 border-r border-[#0000004d] w-[217px] shrink-0">
          <ul className="font-poppins space-y-6">
            <li className="flex justify-between items-center">
              <p className="font-poppins">Woman’s Fashion</p>
              <Image src="/side-forwardarrow.svg" alt="failed" width={24} height={24} />
            </li>
            <li className="flex justify-between items-center">
              <p className="font-poppins">Men’s Fashion</p>
              <Image src="/side-forwardarrow.svg" alt="failed" width={24} height={24} />
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li></li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>


        <div className="bg-black pt-[58px] pb-12 pl-16 mt-10 w-full bg-[right_center] bg-no-repeat space-y-5 text-white relative" style={{ backgroundImage: "url(/hero-slider.png)" }}>
          <div className="flex items-center gap-x-6">
            <Image src="/apple-logo.svg" alt="Apple Logo" width={40} height={49} />
            <p>iPhone 14 Series</p>
          </div>

          <h1 className="w-[294px] text-5xl leading-[60px] font-semibold">Up to 10% off Voucher</h1>

          <div className="flex items-center gap-x-6">
            <p className="underline underline-offset-8">Shop Now</p>
            <Image src="/left-arrow.svg" alt="Left arrow" width={24} height={24} />
          </div>

          <Image
            src="/hero-silder-navigation.svg"
            alt="Navigation buttons"
            width={110}
            height={14}
            className="absolute bottom-3 left-1/2 -translate-x-1/2"
          />
        </div>
      </section>


      {/*Flash sale*/}
      <section className="mt-[140px] mx-[135px] flex justify-between">
        <div>
          <div className="flex gap-x-4 items-center">
            <p className="title-mini-red">Today’s</p>
          </div>
          <div className="flex gap-x-[87px]">
            <h2 className=" mt-6 text-black font-inter font-semibold text-[36px] leading-[48px] tracking-[0.04em]"> Flash Sales</h2>
            <div className="flex gap-x-[17px] items-center">
              <div className="space-y-1 items-center ">
                <p className="text-black font-poppins font-medium text-[12px] mt-[10px] ml-[6px] leading-[18px] text">Days</p>
                <h4 className="font-inter font-bold text-[32px] leading-[30px] tracking-[0.04em] text-black">03</h4>
              </div>
              <div className="space-y-2 mt-[28px]">
                <div className="rounded-full  bg-[#E07575] w-1 h-1" />
                <div className="rounded-full  bg-[#E07575] w-1 h-1" />
              </div>
              <div className="space-y-1 items-center">
                <p className="text-black font-poppins font-medium text-[12px] mt-[10px] ml-[4px] leading-[18px] text">Hours</p>
                <h4 className="font-inter font-bold text-[32px] leading-[30px] tracking-[0.04em] ml-[2px] text-black">23</h4>
              </div>
              <div className="space-y-2 mt-[31px]">
                <div className="rounded-full  bg-[#E07575] w-1 h-1 " />
                <div className="rounded-full  bg-[#E07575] w-1 h-1" />
              </div>
              <div className="space-y-1 items-center">
                <p className="text-black font-poppins font-medium text-[12px] mt-[10px]  leading-[18px] text">Minutes</p>
                <h4 className="font-inter font-bold text-[32px] leading-[30px] tracking-[0.04em] ml-1 text-black">19</h4>
              </div>
              <div className="space-y-2 mt-[34px]">
                <div className="rounded-full  bg-[#E07575] w-1 h-1 " />
                <div className="rounded-full  bg-[#E07575] w-1 h-1" />
              </div>
              <div className="space-y-1 items-center">
                <p className="text-black font-poppins font-medium text-[12px] mt-[10px]  leading-[18px] text">Seconds</p>
                <h4 className="font-inter font-bold text-[32px] leading-[30px] tracking-[0.04em] ml-[2px] text-black">56</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 mt-14">
          <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full ">
            <img className="px-[15px] py-[15px]" src="/product-left-arrow.svg" alt=" failed" />
          </div>
          <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full ">
            <img className="px-[15px] py-[15px]" src="/product-right-arrow.svg" alt=" failed" />
          </div>
        </div>
      </section>


      {/* flash sale product items*/}
      <section>
        <div className="mt-10 ml-[135px]">
          <div className="flex gap-x-[30px] overflow-x-auto">
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 left-3  rounded-[4px] bg-[#DB4444]  w-[55px] h-[26px] " >
                    <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">-40%</p>
                  </div>
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/gaming-pad.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">HAVIT HV-G92 Gamepad</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $120</p>
                  <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$160</p>
                </div>
                <img src="/star-88.svg" alt="failed" />
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
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/keyboard.svg" alt="failed" />
                  <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                    <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                  </div>
                </div>

              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">AK-900 Wired Keyboard</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $960</p>
                  <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$1160</p>
                </div>
                <img src="/star-75.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 left-3  rounded-[4px] bg-[#DB4444]  w-[55px] h-[26px] " >
                    <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">-30%</p>
                  </div>
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/lcd.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">IPS LCD Gaming Monitor</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $370</p>
                  <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$400</p>
                </div>
                <img src="/star-99.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 left-3  rounded-[4px] bg-[#DB4444]  w-[55px] h-[26px] " >
                    <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">-25%</p>
                  </div>
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/chair.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">S-Series Comfort Chair </p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $375</p>
                  <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$400</p>
                </div>
                <img src="/half-star-99.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 left-3  rounded-[4px] bg-[#DB4444]  w-[55px] h-[26px] " >
                    <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">-25%</p>
                  </div>
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/chair.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">S-Series Comfort Chair </p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $375</p>
                  <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$400</p>
                </div>
                <img src="/half-star-99.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 left-3  rounded-[4px] bg-[#DB4444]  w-[55px] h-[26px] " >
                    <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">-25%</p>
                  </div>
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/chair.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">S-Series Comfort Chair </p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $375</p>
                  <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$400</p>
                </div>
                <img src="/half-star-99.svg" alt="failed" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* flash sale View All Button*/}
      <section className="text-center">
        <button className="bg-[#DB4444] rounded-[4px] py-4 px-[48px] my-[76px] mx-auto block ">
          <p className=" text-white font-poppins font-medium text-[16px] leading-[24px]">View All Products</p>
        </button>
      </section>

      {/* flash sale line*/}
      <div className=" mx-[135px] border-b border-[#0000004d]" />




      {/* Categories */}

      <section>
        <div className="mt-20 ml-[135px]">
          <div className="flex gap-x-4 items-center">
            <p className="title-mini-red">Categories</p>
          </div>
          <div className="flex justify-between">
            <h2 className="mt-[20px]">Browse By Category</h2>
            <div className="flex gap-x-2 mr-[135px] pt-[22px]">
              <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full ">
                <img className="px-[15px] py-[15px]" src="/product-left-arrow.svg" alt=" failed" />
              </div>
              <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full ">
                <img className="px-[15px] py-[15px]" src="/product-right-arrow.svg" alt=" failed" />
              </div>
            </div>
          </div>
          {/* items start */}
          <div className="mt-[60px] flex gap-x-[30px]">
            <div className=" w-[170px] h-[145px] rounded-[4px] border border-[#0000004d]">
              <div className="py-[25px] px-[55px] space-y-4">
                <img src="/Category-Phone.svg" alt="cell phone" />
                <p className="font-poppins font-normal text-[16px] leading-[24px]">Phones</p>
              </div>
            </div>
            <div className=" w-[170px] h-[145px] rounded-[4px] border border-[#0000004d]">
              <div className="py-[25px] px-[55px] space-y-4">
                <img src="/Category-Computer.svg" alt="cell phone" />
                <p className="font-poppins font-normal text-[16px] leading-[24px]">Computers</p>
              </div>
            </div>
            <div className=" w-[170px] h-[145px] rounded-[4px] border border-[#0000004d]">
              <div className="py-[25px] px-[55px] space-y-4">
                <img src="/Category-SmartWatch.svg" alt="cell phone" />
                <p className="font-poppins font-normal text-[16px] leading-[24px]">SmartWatch</p>
              </div>
            </div>
            <div className=" w-[170px] h-[145px] rounded-[4px] border border-[#0000004d]">
              <div className="py-[25px] px-[55px] space-y-4 bg-[#DB4444]">
                <img src="/Category-Camera.svg" alt="cell phone" />
                <p className="text-white font-poppins font-normal text-[16px] leading-[24px]">Camera</p>
              </div>
            </div>
            <div className=" w-[170px] h-[145px] rounded-[4px] border border-[#0000004d]">
              <div className="py-[25px] px-[55px] space-y-4">
                <img src="/Category-Headphone.svg" alt="cell phone" />
                <p className="font-poppins font-normal text-[16px] leading-[24px]">HeadPhones</p>
              </div>
            </div>
            <div className=" w-[170px] h-[145px] rounded-[4px] border border-[#0000004d]">
              <div className="py-[25px] px-[55px] space-y-4">
                <img src="/Category-Gamepad.svg" alt="cell phone" />
                <p className="font-poppins font-normal text-[16px] leading-[24px]">Gaming</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Categery line*/}
      <div className=" mt-[70px] mx-[135px] border-b border-[#0000004d]" />

      {/* best selling product */}
      <section>
        <div className="pt-20 pl-[135px]">
          <div className="flex gap-x-4 items-center">
            <p className="title-mini-red">This Month</p>
          </div>
          <div className="flex justify-between">
            <h2 className="mt-[20px]">Best Selling Products</h2>
            <button className="bg-[#DB4444] rounded-[4px]  mr-[135px] ">
              <p className=" text-white font-poppins py-[14px] px-[48px] font-medium text-[16px] leading-[24px]">View All</p>
            </button>
          </div>
          {/* best selling product pics */}

          <div className="mt-[60px] flex gap-x-[30px]">
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/pink-jacket.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">The north coat</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $260</p>
                  <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$360</p>
                </div>
                <img src="/star-65.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/hand-bag.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">Gucci duffle bag</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $960</p>
                  <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$1160</p>
                </div>
                <img src="/half-star-65.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/eco-system.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">RGB liquid CPU Cooler</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $160</p>
                  <p className="font-medium text-[16px] leading-[24px] line-through text-black opacity-50">$170</p>
                </div>
                <img src="/half-star-65.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[70px]" src="/bookshelf.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">Small BookSelf</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $360</p>
                </div>
                <img src="/star-65.svg" alt="failed" />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* VR image poster */}
      <section>
        <div className="mt-[140px] mx-[135px] ">
          <div className="w-[1170px] bg-black">
            <div className="flex gap-x-[27px]">
              <div className="py-[69px] pl-[56px] space-y-8">
                <p className="text-[#00FF66] font-poppins font-semibold text-[16px] leading-[20px]"> Categories</p>
                <h1 className="text-white font-inter font-semibold text-[48px] leading-[60px] tracking-[0.04em] w-[473px]">Enhance Your Music Experience</h1>
                <div className="flex gap-x-6">
                  <div className="rounded-full bg-white w-[62px] h-[62px] ">
                    <div className="px-[17px] py-[11px] space-y-.2">
                      <p className="font-poppins font-semibold text-[16px] pl-[6px] leading-[20px]">23</p>
                      <p className="font-poppins font-normal text-[11px] leading-[18px]">Hours</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-white w-[62px] h-[62px] ">
                    <div className="px-[17px] py-[11px] space-y-.2">
                      <p className="font-poppins font-semibold text-[16px] pl-[6px] leading-[20px]">05</p>
                      <p className="font-poppins font-normal text-[11px] leading-[18px]">Days</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-white w-[62px] h-[62px] ">
                    <div className="px-[10px] py-[11px] space-y-.2">
                      <p className="font-poppins font-semibold text-[16px] pl-[10px] leading-[20px]">59</p>
                      <p className="font-poppins font-normal text-[11px] leading-[18px]">Minutes</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-white w-[62px] h-[62px] ">
                    <div className="px-[10px] py-[11px] space-y-.2">
                      <p className="font-poppins font-semibold text-[16px] pl-[10px] leading-[20px]">35</p>
                      <p className="font-poppins font-normal text-[11px] leading-[18px] ">Seconds</p>
                    </div>
                  </div>
                </div>
                <button className="rounded-[4px] bg-[#00FF66]">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] py-[16px] px-[48px] text-white">Buy Now!</p>
                </button>
              </div>
              <img src="/music-speaker.svg" alt="failed" />
            </div>
          </div>
        </div>
      </section>






      {/* Explore our product */}
      <section>
        <div className="mt-[71px] ml-[135px]">
          <div className="flex gap-x-4 items-center">
            <p className="title-mini-red">Our Products</p>
          </div>
          <div className="flex justify-between">
            <h2 className="mt-[20px]">Explore Our Products</h2>
            <div className="flex gap-x-2 mr-[135px] pt-[22px]">
              <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full ">
                <img className="px-[15px] py-[15px]" src="/product-left-arrow.svg" alt=" failed" />
              </div>
              <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full ">
                <img className="px-[15px] py-[15px]" src="/product-right-arrow.svg" alt=" failed" />
              </div>
            </div>
          </div>

          {/* our products items start*/}
          <div className="mt-[60px]">
            <div className="flex gap-x-[30px]">
              <div>
                <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                  <div className="relative">
                    <div className="absolute top-3 right-3 ">
                      <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                        <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                      </div>
                      <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                        <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                      </div>
                    </div>
                    <img className="px-10 py-[40px]" src="/dog-food.svg" alt="failed" />
                  </div>
                </div>
                <div className="mt-4 space-y-2 items-center">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">Breed Dry Dog Food</p>
                  <div className="flex gap-x-3">
                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $100</p>
                    <img src="/3-35-star.svg" alt="failed" />
                  </div>
                </div>
              </div>
              <div>
                <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                  <div className="relative">
                    <div className="absolute top-3 right-3 ">
                      <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                        <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                      </div>
                      <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                        <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                      </div>
                    </div>
                    <img className="px-10 py-[30px]" src="/camera.svg" alt="failed" />
                    <div className="bg-black w-[270px] h-[41px] absolute top-[220px]">
                      <p className=" py-[9px] px-[87px] text-white">Add To Cart</p>
                    </div>
                  </div>

                </div>
                <div className="mt-6 space-y-2 items-center">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">CANON EOS DSLR Camera</p>
                  <div className="flex gap-x-3">
                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $360</p>
                    <img src="/4-star-95.svg" alt="failed" />
                  </div>
                </div>
              </div>
              <div>
                <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                  <div className="relative">
                    <div className="absolute top-3 right-3 ">
                      <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                        <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                      </div>
                      <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                        <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                      </div>
                    </div>
                    <img className="px-10 py-[40px]" src="/laptop.svg" alt="failed" />
                  </div>
                </div>
                <div className="mt-4 space-y-2 items-center">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">ASUS FHD Gaming Laptop</p>
                  <div className="flex gap-x-3">
                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $700</p>
                    <img src="/5-star-325.svg" alt="failed" />
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#F5F5F5] w-[270px] h-[250px] ">
                  <div className="relative">
                    <div className="absolute top-3 right-3 ">
                      <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                        <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                      </div>
                      <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                        <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                      </div>
                    </div>
                    <img className="px-10 py-[40px]" src="/skin-products.svg" alt="failed" />
                  </div>
                </div>
                <div className="mt-4 space-y-2 items-center">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">Curology Product Set </p>
                  <div className="flex gap-x-3">
                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $500</p>
                    <img src="/4-star-145.svg" alt="failed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second part */}
          <div className="flex gap-x-[30px] mt-[30px]">
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 left-3  rounded-[4px] bg-[#00FF66]  w-[55px] h-[26px] " >
                    <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">NEW</p>
                  </div>
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[40px]" src="/electric-car.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">Kids Electric Car</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $960</p>
                  <img src="/5-star-65.svg" alt="failed" />
                </div>
                <img src="/red-red.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[40px]" src="/shoes-football.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">Jr. Zoom Soccer Cleats</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $1160</p>
                  <img src="/5-star-35.svg" alt="failed" />
                </div>
                <img src="/yellow-red.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 left-3  rounded-[4px] bg-[#00FF66]  w-[55px] h-[26px] " >
                    <p className="font-poppins font-normal px-3  py-1 text-[12px] leading-[18px] text-white">NEW</p>
                  </div>
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[40px]" src="/black-gamepad.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">GP11 Shooter USB Gamepad</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $660</p>
                  <img src="/5-half-star-55.svg" alt="failed" />
                </div>
                <img src="/black-red.svg" alt="failed" />
              </div>
            </div>
            <div>
              <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                <div className="relative">
                  <div className="absolute top-3 right-3 ">
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-view-eye.svg" alt="failed" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[34px] h-[34px] rounded-full">
                      <img className="py-[5px] px-[5px]" src="/product-heart.svg" alt="failed" />
                    </div>
                  </div>
                  <img className="px-10 py-[40px]" src="/jacket-grey.svg" alt="failed" />
                </div>
              </div>
              <div className="mt-4 space-y-2 items-center">
                <p className="font-poppins font-medium text-[16px] leading-[24px] text-black">Quilted Satin Jacket</p>
                <div className="flex gap-x-3">
                  <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#DB4444]"> $660</p>
                  <img src="/5-half-star-55.svg" alt="failed" />
                </div>
                <img src="/green-red.svg" alt="failed" />
              </div>
            </div>
          </div>
        </div>
        {/* our products items end*/}
      </section>


      {/* Our Product View All Button*/}
      <section className="text-center">
        <button className="bg-[#DB4444] rounded-[4px] py-4 px-[48px] mt-[76px] mx-auto block ">
          <p className=" text-white font-poppins font-medium text-[16px] leading-[24px]">View All Products</p>
        </button>
      </section>





      {/* new arrival */}
      <section className="px-[135px] pt-[140px] space-y-[60px]">
        <div className="space-y-5">
          <p className="title-mini-red">Featured</p>
          <h2>New Arrival</h2>
        </div>


        <div className="grid grid-cols-2 gap-x-[30px]">
          <div className="h-[600px] flex flex-col justify-end gap-y-4 pb-8 pl-8 text-white bg-no-repeat bg-black bg-right-bottom" style={{ backgroundImage: "url(/arrival-ps5.png)" }}>
            <h4>PlayStation 5</h4>
            <p className="w-[242px] text-[#fafafa]">Black and White version of the PS5 coming out on sale.</p>
            <Link href="#" className="underline underline-offset-4">Shop Now</Link>
          </div>

          <div>
            <div className="h-[284px] flex flex-col justify-end gap-y-4 pb-6 pl-6 text-white bg-no-repeat bg-black bg-right-bottom" style={{ backgroundImage: "url(/arrival-women.png)" }}>
              <h4>Women’s Collections</h4>
              <p className="w-[242px] text-[#fafafa]">Featured woman collections that give you another vibe.</p>
              <Link href="#" className="underline underline-offset-4">Shop Now</Link>
            </div>
            <div className="grid grid-cols-2 gap-x-[30px] mt-8">
              <div className="h-[284px] flex flex-col justify-end gap-y-2 pb-6 pl-6 text-white bg-no-repeat bg-black bg-right-bottom" style={{ backgroundImage: "url(/arrival-speaker.png)" }}>
                <h4>Perfume</h4>
                <p className="w-[242px] text-[#fafafa]">GUCCI INTENSE OUD EDP</p>
                <Link href="#" className="underline underline-offset-4">Shop Now</Link>
              </div>
              <div className="h-[284px] flex flex-col justify-end gap-y-2 pb-6 pl-6 text-white bg-no-repeat bg-black bg-right-bottom" style={{ backgroundImage: "url(/arrival-perfume.png)" }}>
                <h4>Speakers</h4>
                <p className="w-[242px] text-[#fafafa]">Amazon wireless speakers</p>
                <Link href="#" className="underline underline-offset-4">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="my-[140px] ml-[248px] flex gap-x-[88px]">
        <div className="space-y-6">
          <img className="ml-[84px]" src="/fast-delivery.svg" alt="free delivery" />
          <div className="space-y-2">
            <p className=" text-[20px] font-semibold leading-5">FREE AND FAST DELIVERY</p>
            <p >Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="space-y-6">
          <img className="ml-[84px]" src="/24-7-service.svg" alt="24-7-service" />
          <div className="space-y-2">
            <p className=" text-[20px] font-semibold leading-5">24/7 CUSTOMER SERVICE</p>
            <p >Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="space-y-6">
          <img className="ml-[84px]" src="/money-back-guarntee.svg" alt="money-back-guarntee" />
          <div className="space-y-2">
            <p className=" text-[20px] font-semibold leading-5">MONEY BACK GUARANTEE</p>
            <p >We reurn money within 30 days</p>
          </div>
        </div>



      </section>

      

    </>
  );
}
