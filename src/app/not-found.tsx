
'use client'

export default function Custom404() {
    return (
        <main>
            <section className="mx-[135px] bg-white">
                <span className="flex gap-x-3 mt-[96px]">
                    <p className="opacity-50" > Home </p>
                    <p className="opacity-50">/</p>
                    <p> 404 Error </p>
                </span>
                <div className="mt-[140px] mx-[305px] space-y-10">
                    <h1 className="font-medium text-[110px] whitespace-nowrap leading-[115px] text-black">404 Not Found</h1>
                    <p className="text-center pl-32">Your visited page not found. You may go home page.</p>
                </div>
                <button className="mt-20 mx-[450px] mb-[140px] bg-[#DB4444] rounded">
                    <p className="font-medium py-4 px-[48px] text-white ">Back to home page</p>
                </button>
            </section>
        </main>
    )
}




