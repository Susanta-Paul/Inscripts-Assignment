import { IoIosAdd } from "react-icons/io";

export default function Footer(){
    return (
        <div className="absolute bottom-0 cursor-pointer">
            <div className="text-lg flex gap-7 px-12 items-center border-t border-gray-500 w-screen">
                <div className="bg-green-200 text-green-700 border-t-2 p-2 border-green-700"
                >All Orders</div>
                <div>Pending</div>
                <div>Reviewed</div>
                <div>Arrived</div>
                <div className="text-xl"><IoIosAdd /></div>
            </div>
        </div>
    )
}