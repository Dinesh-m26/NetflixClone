

const FirstPage = () => {
  return (
    <div>
      
      <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg')] h-[98vh] bg-center ">
        <div className="absolute top-0 bottom-0 left-0 right-0   bg-gradient-to-b from-black/90 via-black/30 to-black/90 ">
          <div className="px-4 lg:px-44 pt-5 flex ">
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png" alt="img" className="my-auto mr-auto w-24 h-7 md:w-36 md:h-10 " />
            <select className="bg-transparent px-3 text-white border border-gray-500 ml-auto mr-2 md:mr-5" >
              <option className="bg-transparent p-2 text-black" value="option1">English</option>
              <option className="bg-transparent p-2 text-black" value="option2">हिंदी</option>
            </select>
            <a className="bg-red-600 rounded text-white p-1 px-4 my-auto">Signin</a>
          </div>

          <div className="px-4 md:px-0 flex flex-col text-center my-auto text-white mt-16 md:mt-56">
            <h1 className="font-bold text-[32px] md:text-5xl md:font-black">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-xl font-normal my-auto py-5 px-5 md:px-0">Watch anywhere. Cancel anytime.</p>
            <p className="text-xl font-normal my-auto px-5 md:px-0">Ready to watch? Enter your email to create or restart your membership</p>
          </div>
          <div className=" mx-auto mt-4 flex-col md:flex-row flex justify-center ">
            <input placeholder="Email address" className="bg-[#232323]/50 md:pl-2 mx-10 p-3 md:mx-0 md:p-0 lg:p-4 lg:pr-40 md:mr-2 border border-gray-400  rounded  text-white" />
            <a className="bg-red-600 font-semibold text-white text-xl mx-auto md:ml-0 md:text-2xl rounded  md:px-6 p-3  md:mx-0 mt-3 md:mt-0 ">Get Started {'>'}  </a>
          </div>
        </div>
      </div>
      <div className="h-2 bg-[#232323] "></div>
    </div>

  )
}

export default FirstPage
