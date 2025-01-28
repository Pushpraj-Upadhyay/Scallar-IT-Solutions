const Header = () => {
    return (
        <header className="px-12 py-3 bg-primary text-white shadow-md shadow-violet-800 common-padding-margin">
            <nav className="flex justify-between font-extrabold items-center header">
                <div className="text-4xl">Scallar</div>
                <div className="flex justify-between text-lg">
                    <a href="">Home</a>
                    <a href="" className="ml-5">Services</a>
                    <a href="" className="ml-5">About</a>
                    <a href="" className="ml-5">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;