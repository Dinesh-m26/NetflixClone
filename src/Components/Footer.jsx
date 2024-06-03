const Footer = () => {
    return (
        <div>
            <div className="px-6 lg:px-44 pb-14">
                <div className="mt-10 text-[rgba(255,255,255,0.7)]">
                    <p className="text-base font-normal">Questions? Call <span className="underline"> 000-800-919-1694</span> </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 mt-4">
                        <div >
                            <ul>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">FAQ</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Investor Relations</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Privacy</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Speed Test</a></li>
                            </ul>
                        </div>
                        <div >
                            <ul>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Help Centre</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Jobs</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Cookie Preferences</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Legal Notices</a></li>
                            </ul>
                        </div>
                        <div >
                            <ul>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Account</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Ways to Watch</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Corporate Information</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Only on Netflix</a></li>
                            </ul>
                        </div>
                        <div >
                            <ul>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Media Centre</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Terms of Use</a></li>
                                <li className="mb-2"><a className="text-base font-normal underline" href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <select className=" mt-4 bg-transparent px-5 text-white border border-white ml-auto mr-4">
                        <option className="bg-transparent p-2 text-black" value="option1">English</option>
                        <option className="bg-transparent p-2 text-black" value="option2">हिंदी</option>
                    </select>
                    <p className="text-base font-normal mt-4">Netflix India</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
