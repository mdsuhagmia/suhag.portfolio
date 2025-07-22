import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Container from "./Container";

const Contact = () => {
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_ok11iot",       // তোমার Service ID
        "template_8vllzxh",      // তোমার Template ID
        formRef.current,
        "84GBe8hGYvnLDThhZ"     // তোমার Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="py-20 bg-gray-100" id="contact">
      <Container>
        <div className="">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h4 className="text-indigo-600 text-md md:text-xl font-semibold uppercase">
              Contact Me
            </h4>
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mt-2">
              Let’s Start A New Project
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Contact Info */}
            <div className="space-y-6 md:space-y-6">
              <div className="flex items-center space-x-6">
                <FaMapMarkerAlt className="text-indigo-600 text-3xl md:text-4xl" />
                <div>
                  <h3 className="text-[20px] md:text-2xl font-semibold">Location</h3>
                  <p className="text-gray-700 text-[16px] md:text-lg">
                    Jamalpur, Mymensingh, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <FaPhoneAlt className="text-indigo-600 text-3xl md:text-4xl" />
                <div>
                  <h3 className="text-2xl font-semibold">Phone</h3>
                  <p className="text-gray-700 text-[16px] md:text-lg">+880 1731 378743</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <FaEnvelope className="text-indigo-600 text-3xl md:text-4xl" />
                <div>
                  <h3 className="text-2xl font-semibold">Email</h3>
                  <p className="text-gray-700 text-[16px] md:text-lg">
                    mdshohagmia53200@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name & Email */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("user_name", { required: true })}
                      className={`w-full px-4 py-3 border-2 rounded-md transition duration-300 ${errors.user_name
                          ? "border-red-500"
                          : "border-gray-300 focus:border-indigo-600"
                        }`}
                    />
                    {errors.user_name && (
                      <p className="text-sm text-red-500 mt-1">Name is required</p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("user_email", { required: true })}
                      className={`w-full px-4 py-3 border-2 rounded-md transition duration-300 ${errors.user_email
                          ? "border-red-500"
                          : "border-gray-300 focus:border-indigo-600"
                        }`}
                    />
                    {errors.user_email && (
                      <p className="text-sm text-red-500 mt-1">
                        Valid email is required
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Start Writing Message Here"
                    rows="5"
                    {...register("message", { required: true })}
                    className={`w-full px-4 py-3 border-2 rounded-md transition duration-300 ${errors.message
                        ? "border-red-500"
                        : "border-gray-300 focus:border-indigo-600"
                      }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">Message is required</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300 font-semibold"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
