import CoverParticles from "@/components/particles";
import Title from "../title";

const Contact = () => {
  const title = "Contact";
  const sub =
    "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible";
  return (
    <section className="py-[4rem] home-background" id="Contact">
      <CoverParticles />
      <div className="max-w-[120rem] m-auto w-[92%] sm:w-[60%]">
        <Title title={title} sub={sub} />
        <div className="shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] bg-white p-[2rem] sm:p-[4rem] mt-[6rem] max-w-[80rem] text-right w-[95%] rounded-[5px] mx-auto">
          <form className="m-0 p-0">
            <div className="mb-[2rem]">
              <label
                htmlFor="name"
                className="m-0 p-0 text-[#666] text-[1rem] tracking-[1px] font-bold mb-[1rem] block text-left"
              >
                Name
              </label>
              <input
                className="text-fontItems p-[1rem] w-full border border-[#ebebeb] text-[1rem] tracking-[0px] bg-[#f0f0f0] rounded-[5px] font-semibold"
                required
                type="text"
                placeholder="Enter your name"
                name="name"
              />
            </div>
            <div className="mb-[2rem]">
              <label
                htmlFor="email"
                className="m-0 p-0 text-[#666] text-[1rem] tracking-[1px] font-bold mb-[1rem] block text-left"
              >
                Email
              </label>
              <input
                className="text-fontItems p-[1rem] w-full border border-[#ebebeb] text-[1rem] tracking-[0px] bg-[#f0f0f0] rounded-[5px] font-semibold"
                required
                type="email"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className="mb-[2rem]">
              <label
                htmlFor="message"
                className="m-0 p-0 text-[#666] text-[1rem] tracking-[1px] font-bold mb-[1rem] block text-left"
              >
                Message
              </label>
              <textarea
                required
                className="text-fontItems p-[1rem] w-full border border-[#ebebeb] text-[1rem] tracking-[0px] bg-[#f0f0f0] rounded-[5px] font-semibold"
                cols={30}
                rows={10}
                placeholder="Enter your message"
                name="message"
              ></textarea>
            </div>
            <button className="w-full sm:w-[30%] p-[1rem_2rem] text-[1rem] bg-primary text-white uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
