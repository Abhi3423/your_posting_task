import profile from "../public/profile.png"
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex justify-between shadow-lg rounded-b-xl p-6">
            <div className="flex gap-2 font-bold text-xl text-blue-400">
                <p className="text-blue-600">Duty</p>
                <p className="text-blue-400">Central</p>
            </div>
            <div>
                <Image src={profile} alt="" />
            </div>
        </div>
    );
}

export default Navbar;