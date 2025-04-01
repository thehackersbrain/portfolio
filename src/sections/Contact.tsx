import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const ContactPage = () => {
  return (
    <div className="py-16 mx-3 pt-12 lg:py-24 lg:pt-20">
      <div className="container mx-auto">
        <div className="primary-gradient text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-10 md:text-left">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-24">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Ready to bring your next project to life? Let&#39;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
