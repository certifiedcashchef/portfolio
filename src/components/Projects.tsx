export default function Projects() {
  return (
    <>
      <p className="font-semibold text-center text-xl mb-8">
        Practical <span className="font-bold text-[#8a51fb] ">projects</span>{" "}
        and applications <br /> using the previously mentioned{" "}
        <span className="font-bold text-[#8a51fb] ">technologies</span>
      </p>

      <div
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        <div className="bg-[#8a51fb]/10  flex flex-col items-center justify-center w-[10rem] h-[8rem] p-4 gap-2 rounded-xl">
          <h3 className="font-black text-2xl leading-[1.2rem] text-center text-gray-700 bg-gradient-to-r from-[#8502ff] via-[#6302ff] to-[#ff8102] text-transparent bg-clip-text">
            NIKE <br /> STORE
          </h3>
          <p className="font-bold text-[0.57rem]">
            <a href="https://nike-ecommerce-clone.vercel.app/">LIVE DEMO</a>
            {" // "}{" "}
            <a href="https://github.com/certifiedcashchef/nike-ecommerce-clone">
              SOURCE CODE
            </a>
          </p>
        </div>

        <div className="bg-[#8a51fb]/10  flex flex-col items-center justify-center w-[10rem] h-[8rem] p-4 gap-2 rounded-xl">
          <h3 className="font-black text-2xl leading-[1.2rem] text-center text-gray-700 bg-gradient-to-r from-[#8502ff] via-[#6302ff] to-[#ff8102] text-transparent bg-clip-text">
            PERSONAL <br /> PORTFOLIO
          </h3>
          <p className="font-bold text-[0.57rem]">
            <a href="https://ehab-m.vercel.app/ultra">LIVE DEMO</a>
            {" // "}{" "}
            <a href="https://github.com/certifiedcashchef/">SOURCE CODE</a>
          </p>
        </div>

        <div className="bg-[#8a51fb]/10  flex flex-col items-center justify-center w-[10rem] h-[8rem] p-4 gap-2 rounded-xl">
          <h3 className="font-black text-2xl leading-[1.2rem] text-center text-gray-700 bg-gradient-to-r from-[#8502ff] via-[#6302ff] to-[#ff8102] text-transparent bg-clip-text">
            PLAN A2Z
          </h3>
          <p className="font-bold text-[0.57rem]">
            <a href="https://plan-a2z.vercel.app/">LIVE DEMO</a>
            {" // "}{" "}
            <a href="https://github.com/certifiedcashchef/plan-a2z">
              SOURCE CODE
            </a>
          </p>
        </div>

        <div className="bg-[#8a51fb]/10  flex flex-col items-center justify-center w-[10rem] h-[8rem] p-4 gap-2 rounded-xl">
          <h3 className="font-black text-2xl leading-[1.2rem] text-center text-gray-700 bg-gradient-to-r from-[#8502ff] via-[#6302ff] to-[#ff8102] text-transparent bg-clip-text">
            FRMZ
          </h3>
          <p className="font-bold text-[0.57rem]">
            <a href="https://frmz.vercel.app/">LIVE DEMO</a>
            {" // "}{" "}
            <a href="https://github.com/certifiedcashchef/frmz">SOURCE CODE</a>
          </p>
        </div>
      </div>
    </>
  );
}
