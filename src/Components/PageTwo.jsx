const PageTwo = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row py-14 md:py-20 px-6 lg:px-44">
                <div className="text-white my-auto lg:w-1/2 ">
                    <h1 className="text-[32px] text-center lg:text-left lg:text-5xl font-bold md:font-black">Enjoy on your TV</h1>
                    <p className="text-center lg:text-left text-lg lg:text-2xl font-normal mt-4 md:mt-0 md:pt-7">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="lg:w-1/2 relative flex justify-center mt-10 md:mt-0">
                    <img className="relative z-10 w-[100%] max-w-lg" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                    <video className="absolute top-[20%] md:w-[51%] w-[80%] lg:w-[65%]" autoPlay playsInline muted loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="h-2 bg-[#232323]"></div>
        </div>
    );
};

export default PageTwo;
