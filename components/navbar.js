import profile from "../public/profile.png"
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex justify-between shadow-lg rounded-b-xl p-6">
            <div className="flex items-center gap-2 font-bold text-xl text-blue-400">
                <p className="text-blue-600">Duty</p>
                <p className="text-blue-400">Central</p>
            </div>
            <div>
                <Image width={40} height={40} src={profile} alt="" />
            </div>
        </div>
    );
}

export default Navbar;