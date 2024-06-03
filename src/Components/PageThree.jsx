

const PageThree = () => {
    return (
        <div>
            <div className="flex lg:flex-row flex-col-reverse py-20 px-6 lg:px-44  ">

                <div className="lg:w-1/2 mx-auto relative">
                    
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="img" />
                        <div className="flex absolute left-[6%] md:left-[22%] lg:left-[22%] bottom-[4%] lg:bottom-[7%] h-[30%] w-[90%] md:h-[16%] md:w-[55%] lg:h-[24%] lg:w-[55%] border-2 border-[rgba(128,128,128,0.7)] rounded-xl  bg-black">
                            <img className="ml-3 justify-around" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="stranger things" />
                            <div className="ml-5 flex flex-col my-auto text-white">
                                <p className="text-sm lg:text-base font-medium">Stranger Things</p>
                                <p className="text-xs lg:text-sm text-[#0071eb] font-normal">Downloading...</p>
                            </div>
                            <img className="h-[50%] w-[50p%] mr-2 my-auto ml-auto" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="downloading" />
                        </div>
                    

                </div>
                <div className="lg:w-1/2 text-center text-white my-auto">
                    <p className="font-black text-[32px] lg:text-5xl">Download your shows to watch offline</p>
                    <p className="font-normal text-[19.2px] lg:text-2xl mt-4" >Save your favourites easily and always have <br className="hidden lg:block" /> something to watch.</p>
                </div>

            </div> <div className="h-2 bg-[#232323] ">
            </div>
        </div>

    )
}

export default PageThree
