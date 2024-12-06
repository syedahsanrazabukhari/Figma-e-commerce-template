import Image from "next/image";

export default function Header() {
  return (
    <>


      {/*Header*/}
      <div className="h-[48px] bg-[#000000] py-3 pl-[445px] pr-[136px]">
        <div className="flex gap-x-[231px]">
          <div className="flex gap-2">
            <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA]" > Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <span className="text-[#FAFAFA] font-poppins font-semibold text-[14px] leading-[24px] text-center underline decoration-solid underline-offset-0">ShopNow</span>
          </div>
          <div className="flex gap-x-[5px]">
            <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA] ">English</p>
            <img src="/header-dropdown.svg" alt="header dropdown " />
          </div>

        </div>
      </div>



    </>
  );
}
