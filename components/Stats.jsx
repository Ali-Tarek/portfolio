import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12">
      <div className="flex gap-4 items-center">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp
            start={1}
            end={3}
            duration={1}
            delay={2}
            className="block w-[35px]"
          />
          <div>+</div>
        </div>
        <span>
          Years <br /> Experience
        </span>
      </div>{" "}
      <div className="flex gap-4 items-center">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp
            start={10}
            end={20}
            duration={1}
            delay={2}
            className="block w-[60px]"
          />
          <div>+</div>
        </div>
        <span>
          Projects <br /> Completed
        </span>
      </div>
    </div>
  );
};

export default Stats;
