

const PageFour = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row py-20 px-6 lg:px-44  ">
                <div className="lg:w-1/2 text-center lg:text-left text-white my-auto">
                    <p className="text-[32px] text-center lg:text-left font-black lg:text-5xl">Watch everywhere
                    </p>
                    <p className=" text-center lg:text-left font-normal text-lg lg:text-2xl mt-4" >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="lg:w-1/2 relative">
                    <img className="relative z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="loading" />
                    <video className="absolute w-[65%] top-[11%] left-[16%]" autoPlay playsInline muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" /></video>

                </div>
            </div>
            <div className="h-2 bg-[#232323] ">
            </div>
        </div>
    )
}

export default PageFour
