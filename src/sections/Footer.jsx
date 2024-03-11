import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="max-container">
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col max-lg:items-start">
        <div className="flex flex-col justify-start items-start">
          <a href="/">
            <img src={footerLogo} alt="Nike" width={150} height={46} />
          </a>
          <p className="text-base mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => {
              return (<div key={icon.alt} className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => {
            return (
              <div key={section}>
                <h4 className="text-white text-2xl font-montserrat">{section.title}</h4>
                <ul>
                  {section.links.map((link) => {
                    return (
                      <li key={section.title} className="text-white-400 mt-8 leading-[5px] font-montserrat  hover:text-gray-500">
                        <a href={link.link}>{link.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-between mt-32 max-sm:flex-col max-sm:items-center">
        <div className="flex gap-2 cursor-pointer">
          <img src={copyrightSign} alt="copyright" />
          <p className="font-montserrat text-white-400 ">Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat text-white-400 cursor-pointer">Terms & Conditions</p>
      </div>

    </div>
  );
};

export default Footer;
