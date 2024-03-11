import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

const Nav = () => {
    return (
        <div className="padding-x py-10 absolute w-full z-20">
            <div className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Nike Logo" height={29} width={140} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map(item => {
                        return <li key={item.label}>
                            <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
                        </li>
                    })}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="Sidebar" width={25} height={25} />
                </div>
            </div>
        </div>
    )
}

export default Nav