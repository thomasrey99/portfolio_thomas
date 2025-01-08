"use client";
import emailjs from "@emailjs/browser";
import Title from "../title";
import { useEffect, useState, useMemo } from "react";
import MessageNotification from "@/components/alerts/alert";
import { validations } from "@/utils/validations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    fromEmail: "",
    message: "",
  });

  const [errorValidation, setErrorValidation] = useState({
    name: "",
    fromEmail: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const isSubmitDisabled = useMemo(() => {
    return (
      Object.values(errorValidation).some((err) => err) ||
      Object.values(formData).some((field) => !field)
    );
  }, [errorValidation, formData]);
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isSubmitDisabled) {
      setError("Por favor, completa todos los campos");
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formData,
        { publicKey: process.env.NEXT_PUBLIC_USER_ID }
      );
      setSuccess("Mensaje enviado con éxito");
      setFormData({ name: "", fromEmail: "", message: "" });
    } catch (err) {
      setError(
        "Error al enviar el mensaje, si persiste, envie su mensaje a thomas_rey1999@outlook.com"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setErrorValidation(validations(formData));
  }, [formData]);

  const title = "Contact me";
  const sub =
    "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible";

  return (
    <section className="py-[6rem] home-background relative" id="Contact">
      {success && (
        <MessageNotification
          type={"success"}
          title={`Mensaje enviado con éxito, pronto me pondré en contacto contigo ${formData.name}`}
          setStatus={setSuccess}
        />
      )}
      {error && (
        <MessageNotification
          type={"error"}
          title={`Error al enviar el mensaje. Si persiste, envíame tu mensaje a Thomas_rey1999@outlook.com`}
          setStatus={setError}
        />
      )}
      <div className="max-w-[120rem] m-auto w-[92%] mt-[2rem] sm:mt-[4rem] sm:w-[60%]">
        <Title title={title} sub={sub} />
        <div className="shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] bg-white p-[2rem] sm:p-[4rem] mt-[6rem] max-w-[80rem] text-right w-[95%] rounded-[5px] mx-auto">
          <form className="m-0 p-0" onSubmit={sendEmail}>
            <div className="mb-[2rem]">
              <label
                htmlFor="name"
                className="m-0 p-0 text-[#666] text-[0.8rem] sm:text-[1rem] tracking-[1px] font-bold mb-[1rem] block text-left"
              >
                Name
              </label>
              <input
                className="text-fontItems p-[1rem] w-full border border-[#ebebeb] text-[1rem] tracking-[0px] bg-[#f0f0f0] rounded-[5px] font-semibold"
                required
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
              {errorValidation.name && (
                <p className="text-red-500">{errorValidation.name}</p>
              )}
            </div>
            <div className="mb-[2rem]">
              <label
                htmlFor="fromEmail"
                className="m-0 p-0 text-[#666] text-[0.8rem] sm:text-[1rem] tracking-[1px] font-bold mb-[1rem] block text-left"
              >
                Email
              </label>
              <input
                className="text-fontItems p-[1rem] w-full border border-[#ebebeb] text-[1rem] tracking-[0px] bg-[#f0f0f0] rounded-[5px] font-semibold"
                required
                type="email"
                placeholder="Enter your email"
                name="fromEmail"
                onChange={handleChange}
                value={formData.fromEmail}
              />
              {errorValidation.fromEmail && (
                <p className="text-red-500">{errorValidation.fromEmail}</p>
              )}
            </div>
            <div className="mb-[2rem]">
              <label
                htmlFor="message"
                className="m-0 p-0 text-[#666] text-[0.8rem] sm:text-[1rem] tracking-[1px] font-bold mb-[1rem] block text-left"
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
                onChange={handleChange}
                value={formData.message}
              ></textarea>
              {errorValidation.message && (
                <p className="text-red-500">{errorValidation.message}</p>
              )}
            </div>
            <button
              disabled={isSubmitDisabled}
              className={`w-full sm:w-[30%] p-[1rem_2rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform duration-300 ${
                isSubmitDisabled
                  ? "bg-[#f0f0f0] text-fontItems cursor-not-allowed"
                  : "bg-primary text-white"
              }`}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
