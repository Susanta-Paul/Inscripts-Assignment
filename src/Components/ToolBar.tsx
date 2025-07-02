import { BsChevronDoubleRight } from "react-icons/bs";
import { PiEyeSlashLight } from "react-icons/pi";
import { LuArrowUpDown } from "react-icons/lu";
import { IoFilterOutline } from "react-icons/io5";
import { AiOutlineMergeCells } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { GoUpload } from "react-icons/go";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoIosGitBranch } from "react-icons/io";



export default function ToolBar(){
    return(
        <div className="flex justify-between border border-gray py-1 px-2">
            <div className="flex gap-4 text-lg">
                <div className="flex items-center gap-2">
                    Tool Bar
                    <BsChevronDoubleRight/>
                </div>
                <div className="flex items-center gap-2">
                    <PiEyeSlashLight/>
                    Hide Fields
                </div>
                <div className="flex items-center gap-2">
                    <LuArrowUpDown/>
                    Sort
                </div>
                <div className="flex items-center gap-2">
                    <IoFilterOutline/>
                    Filter
                </div>
                <div className="flex items-center gap-2">
                    <AiOutlineMergeCells/>
                    Cell View
                </div>
            </div>
            <div
            className="flex gap-4"
            >
                <div className="flex gap-2 px-4 py-1 cursor-pointer border border-gray-500 rounded-lg items-center">
                    <GoDownload/>
                    Import
                </div>
                <div className="flex gap-2 px-4 py-1 cursor-pointer border border-gray-500 rounded-lg items-center">
                    <GoUpload/>
                    Export
                </div>
                <div className="flex gap-2 px-4 py-1 cursor-pointer border border-gray-500 rounded-lg items-center">
                    <FaRegShareFromSquare/>
                    Share
                </div>
                <div className="bg-green-900 text-white flex gap-2 px-4 py-1 cursor-pointer border border-gray-500 rounded-lg items-center">
                    <IoIosGitBranch/>
                    New Action
                </div>
            </div>
        </div>
    )
}