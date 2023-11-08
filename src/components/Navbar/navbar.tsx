import { Link } from "react-router-dom";
import Logo from "../../assets/images/breach-logo.png"

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-gray-50 h-20 mt-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="breach-logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </Link>
          <div className="flex items-center">
            <Link to="/" className="mr-6 px-6 py-3 rounded-lg border border-zinc-300 justify-center items-center gap-2 inline-flex text-neutral-900 text-base font-medium font-grotesk">Log in</Link>
            <Link to="/" className="font-inter px-6 py-3 bg-purple-600 rounded-lg justify-center items-center gap-2 inline-flex text-white text-base font-medium">Join Breach</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;