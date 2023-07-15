import Link from "next/link";
import daoLogo from "/public/daoLogo.png";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";

const Header = () => {
    return (
        <Wrapper>
            <header className="flex justify-between px-6 bg-red-500 py-4 sticky top-0 items-center">
            <div>
                {/* <h2 className="text-xl font-bold">Dao Panaverse</h2> */}
                <Image src={daoLogo} alt= "Panverse Dao Logo" className=" md-resize resize-x rounded-lg"></Image>
            </div>
            <ul className = "flex space-x-7  text-2xl font-semibold">
                <li>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/courses"}>
                    Courses
                    </Link>
                    
                </li>
                <li>
                    <Link href={"/blogs"}>
                        Blogs
                        </Link>
                </li>
            </ul>

            </header>
        </Wrapper>
    )
}
export default Header;