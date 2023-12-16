import { footerItems } from "../../utils/constants";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 wrapper lg:grid-cols-3 gap-4 lg:gap-10 border-t">
        {footerItems.map((data, index) => (
          <div className="col-span-1 space-md" key={index}>
            <h2 className="font-bold">{data.title}</h2>
            <ul className="list-disc ml-6">
              {data.items.map((item, i) => (
                <li className="hover:underline cursor-pointer" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="bg-[#30393A] py-4 flex items-center gap-2 justify-center text-center text-white font-medium">
        <FaRegCopyright className="inline" /> 2024 Dreamed College. All rights
        reserved.{" "}
      </p>
    </>
  );
};

export default Footer;
