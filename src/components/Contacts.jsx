import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Container from "./Container";
import { IoIosPaperPlane } from "react-icons/io";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contacts = () => {
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
          toast.success("Your Message Sent Successfylly!");
          reset();
        },
        (error) => {
          toast.success("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  const slideInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 bg-gray-200" id="contact">
      <Container>
        <div className="">
          <div className="text-center mb-12">
            <motion.h4 
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-600 text-md md:text-xl font-semibold uppercase pt-8">
              Contact Me
            </motion.h4>
            <motion.h2 
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-5xl font-bold text-gray-800 mt-2">
              Let’s Start A New Project
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div 
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-6">
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
            </motion.div>

            <motion.div 
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg">
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
                      type="text"
                      placeholder="Your Email / Phone"
                      {...register("user_email", {
                        required: "Email or phone is required",
                        validate: (value) => {
                          const emailRegex = /^\S+@\S+\.\S+$/;
                          const phoneRegex = /^[0-9]{10,14}$/;

                          return (
                            emailRegex.test(value) ||
                            phoneRegex.test(value) ||
                            "Enter a valid email or phone number"
                          );
                        }
                      })}
                      className={`w-full px-4 py-3 border-2 rounded-md transition duration-300 ${errors.user_email ? "border-red-500" : "border-gray-300 focus:border-indigo-600"
                        }`}
                    />

                    {errors.user_email && (
                      <p className="text-sm text-red-500 mt-1">{errors.user_email.message}</p>
                    )}
                  </div>
                </div>
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
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold cursor-pointer hover:scale-102"
                >
                  <IoIosPaperPlane className="inline-block text-xl mr-2" /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
