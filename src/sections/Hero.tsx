import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { Button, ShoeCard } from "../components";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-6 leading-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Show now"} iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statItem, index) => (
            <div key={index + statItem.label}>
              <p className="text-4xl font-palanquin font-bold">
                {statItem.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statItem.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center">
        <img
          src={bigShoeImage}
          alt="Shoes"
          className="object-contain relative z-10"
          width={610}
          height={500}
        />
        <div className="flex sm:gap-6 gap-4 absolute bottom-[-5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgUrl={shoe}
              changeBigShoeImage={setBigShoeImage}
              bigShoeImage={bigShoeImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
