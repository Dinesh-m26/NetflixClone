const PageSix = () => {
    return (
        <div>
            <div className="lg:px-44 pb-14 px-6">
                <div>
                    <p className="font-black text-[32px] lg:text-5xl text-center text-white mt-14">Frequently Asked Questions</p>
                    <div className="mt-7">
                        <ul className="text-white mr-auto ">
                            {[
                                "What is Netflix?",
                                "How much does Netflix cost?",
                                "Where can I watch?",
                                "How do I cancel?",
                                "What can I watch on Netflix?",
                                "Is Netflix good for kids?",
                            ].map((question, index) => (
                                <li key={index} className= "hover:bg-[#393939] p-5 md:p-7 mb-2 bg-[#2d2d2d] text-lg md:text-2xl font-medium">
                                    <button className="flex w-full">
                                        <span>{question}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="PlusStandard" aria-hidden="true" className="ml-auto">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p className="text-xl font-normal text-white mt-10 text-center">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className=" mx-auto mt-4 flex-col md:flex-row flex justify-center ">
            <input placeholder="Email address" className="bg-[#232323]/50 md:pl-2 mx-10 p-3 md:mx-0 md:p-0 lg:p-4 lg:pr-40 md:mr-2 border border-gray-400  rounded  text-white" />
            <a className="bg-red-600 font-semibold text-white text-xl mx-auto md:ml-0 md:text-2xl rounded  md:px-6 p-3  md:mx-0 mt-3 md:mt-0 ">Get Started {'>'}  </a>
          </div>
            </div>
            <div className="h-2 bg-[#232323]"></div>
        </div>
    );
};

export default PageSix;
