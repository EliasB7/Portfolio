import React, { useState, useRef, FormEvent } from "react";
import { Reveal } from "./reveal";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const MAX_MESSAGE_LENGTH = 500;
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const truncatedValue = value.slice(0, MAX_MESSAGE_LENGTH);

    setFormData({
      ...formData,
      [name]: truncatedValue,
    });
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (
      formData.from_name.trim() === "" ||
      formData.user_email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      window.alert("Por favor, completa todos los campos.");
      return;
    }

    if (!isValidEmail(formData.user_email)) {
      window.alert(
        "Por favor, ingresa una dirección de correo electrónico válida."
      );
      return;
    }

    if (formData.message.length > MAX_MESSAGE_LENGTH) {
      window.alert(
        `El mensaje no puede tener más de ${MAX_MESSAGE_LENGTH} caracteres.`
      );
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(
          "service_2knrx15",
          "template_rp28cjw",
          form.current,
          "LTz4EtfitbHZoTSg7"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessageSent(true);
            resetForm();
          },
          (error) => {
            window.alert(error.text);
          }
        );
    }
  };

  const isValidEmail = (email: string): boolean => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const resetForm = () => {
    setFormData({
      from_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <main
      className="w-full h-full p-8 flex flex-col items-center justify-center"
      id="contactame"
    >
      <Reveal>
        <h1 className="text-3xl font-bold text-white mb-8">
          NO DUDES EN CONTACTARME!
        </h1>
      </Reveal>

      {messageSent ? (
        <p className="text-green-500 mb-4">
          Tu mensaje se ha enviado con éxito, pronto tendrás respuesta.
        </p>
      ) : null}

      <form ref={form} onSubmit={sendEmail} className="w-full max-w-md">
        <Reveal>
          <div className="mb-4">
            <label
              htmlFor="from_name"
              className="block text-white-sm font-semibold mb-2"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-white-sm font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="text"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-white text-sm font-semibold mb-2"
            >
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={MAX_MESSAGE_LENGTH}
              className="shadow appearance-none border w-60 rounded w-full py-5 px-7 text-black leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
        </Reveal>
        <Reveal>
          <button
            type="submit"
            className="bg-amber-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </Reveal>
      </form>
    </main>
  );
};

export default ContactForm;
