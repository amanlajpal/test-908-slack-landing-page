import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="flex gap-6 items-center">
        <div className="w-2/4">
          <h1 className="text-6xl leading-none font-bold mb-8">
            Slack is where the future works
          </h1>
          <h2 className="text-lg font-semi-bold mb-8">
            Transform the way you work with one place for <br/> everyone and
            everything you need to get stuff done.
          </h2>
          <div className="flex gap-4">
            <button className="bg-[#4d154a] text-white px-6 py-4 rounded-md font-semi-bold">
              TRY FOR FREE
            </button>
            <button className="bg-[#2d85f0] text-white pl-1.5 pr-6 py-1.5 rounded-md font-semi-bold">
              <div className="flex gap-2 items-center">
                <div className="bg-white h-[45px] w-[45px] flex items-center justify-center rounded-[2px]">
                  <Image
                    src={"/google-icon.png"}
                    alt="Google Icon"
                    width={18}
                    height={13}
                  />
                </div>
                <span>SIGN UP WITH GOOGLE</span>
              </div>
            </button>
          </div>
        </div>
        <div className="w-2/4">
          <Image
            src={"/hero-image.png"}
            alt="Slack Hero Image"
            width={600}
            height={500}
          />
        </div>
      </section>
    </>
  );
}
