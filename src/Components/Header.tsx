import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { PiGreaterThanThin } from "react-icons/pi";
import { VscLayoutSidebarRight } from "react-icons/vsc";

export default function Header(){
    return (
        <div>
            <div className="p-4 flex justify-between">
                <div className="flex gap-5 items-center">
                    <VscLayoutSidebarRight className="text-green-600 text-xl"/>
                    <div className="text-gray-500 flex gap-2 items-center">
                        Workspace
                        <PiGreaterThanThin />
                    </div>
                    <div className="text-gray-500 flex gap-2 items-center">
                        Folder 2
                        <PiGreaterThanThin />
                    </div>
                    <div className="font-bold flex gap-2 items-center">
                        Spreadsheet 3
                        <BsThreeDots className="text-gray-500" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center text-lg px-2 py-1 bg-gray-200">
                        <CiSearch className="bg-gray-200 text-xl h-[25px] "
                         />
                        <input  className="bg-gray-200 h-[25px] "
                         type="text" placeholder="Search within Sheet" />
                    </div>
                    <div className="flex items-center">
                        <FaRegBell className="text-xl" />
                    </div>
                    <div className="flex items-center gap-1">
                        <FaUserCircle className="text-xl" />
                        John Doe
                    </div>
                </div>
            </div>
        </div>
    )
}