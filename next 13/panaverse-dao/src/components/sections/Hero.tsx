import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import daoLogo from "/public/daoLogo.png";
import Button from "../shared/Button";

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1">
                        <h4 className = "text-teal-800 font-semibold text-xl">Inglorius bastards of this world by PIAIC </h4>
                        <h1 className="font-bold sm:text-6xl text-3xl">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="mt-5 text-sm text-slate-800 sm:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita modi voluptatem obcaecati vero deserunt voluptates iste beatae odit ipsam ad numquam animi sequi, molestiae recusandae. Sapiente dolore unde distinctio quas?</p>
                        <p  className="mt-2 text-sm text-slate-800 sm:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita modi voluptatem obcaecati vero deserunt voluptates iste beatae odit ipsam ad numquam animi sequi, molestiae recusandae. Sapiente dolore unde distinctio quas?</p>
                        <div className="pt-5">
                        <Button text={"Learn more"} />

                            {/* sm:640
                            md:768
                            lg:1038
                            xl:1280 */}

                            

                        </div>
                    </div>
                    <div className = "flex-1 md:">
                        <Image src={daoLogo} alt= "House of Cards Image"></Image>
                        
                    </div>
                </div>
            </Wrapper>
        </section>

    )
}
export default Hero;