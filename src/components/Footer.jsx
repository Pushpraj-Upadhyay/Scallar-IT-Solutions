const Footer = () => {
    return (
        <footer className="px-12 py-1 bg-gray-950 text-white common-padding-margin">
            <div className="w-full py-2">
                <p className="text-2xl font-bold py-1">Scallar</p>
                <p>We specialize in a range of innovative solutions tailored to meet the unique needs of our clients. From small startups to large enterprises, we partner with businesses to drive efficiency.</p>
            </div>
            <div className="flex justify-between flex-wrap">
                <div className="py-2">
                    <p className="text-2xl font-bold py-1">Short Links</p>
                    <ul className="">
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Our Services</li>
                        <li>Our Projects</li>
                        <li>Latest Blogs</li>
                    </ul>
                </div>
                <div className="py-2">
                    <p className="text-2xl font-bold py-1">Help Links</p>
                    <ul className="">
                        <li>Terms of use</li>
                        <li>Privacy Policy</li>
                        <li>Help</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="py-2">
                    <p className="text-2xl font-bold py-1">Contact Us</p>
                    <p>164 - saral jullena new friends colony delhi 110025</p>
                    <p>+918449820270</p>
                    <p>Info@scallar.in</p>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center flex-wrap py-2">
                <div>Scallar, All rights reserved.</div>
                <div>Designed by Scallar, Distributed by Scallar</div>
            </div>
        </footer>
    )
}

export default Footer;