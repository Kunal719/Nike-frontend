import { useState } from "react";
import Button from "../components/Button"
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const changeBigShoeImage = (shoe) => {
    setBigShoeImg(shoe);
  }
  return (
    <div id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      {/* Content Section */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-20">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" image={arrowRight} />

        <div className="flex flex-wrap justify-start items-center w-full mt-20 gap-16">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
                <p className="font-montserrat text-slate-gray leading-6">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Image Section  */}
      <div className="relative flex flex-col flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="nike shoe collection" width={610} height={500} className="object-contain relative" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => {
            return (
              <div key={shoe.thumbnail}>
                <ShoeCard imageURL={shoe} onChangeBigShoeImage={changeBigShoeImage} bigShoeImage={bigShoeImg} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Hero