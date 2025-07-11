// components/ContactModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "../../sections/ContactSection";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { ref: leftRef, inView: leftInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: rightRef, inView: rightInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    subject: z
      .string()
      .min(2, { message: "Subject must be at least 2 characters" }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters" }),
  });

  type ContactFormData = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // This would normally be an API call
      console.log("Form submitted:", data);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast({
        title: "Message Sent",
        description: "Thanks for contacting us. We'll get back to you soon!",
      });

      // Reset form
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

//    const onSubmit = async (data: ContactFormData) => {
//   setIsSubmitting(true);

//   try {
//     const result = await emailjs.send(
//       "service_gsqe139",
//       "template_6kb6f3k",
//       {
//         from_name: data.name,
//         from_email: data.email,
//         subject: data.subject,
//         message: data.message,
//       },
//       "TqpABKAmgxfYRL7Jl"
//     );

//     toast({
//       title: "Message Sent",
//       description: "Thanks for contacting us. We'll get back to you soon!",
//     });

//     reset();
//   } catch (error) {
//     console.error("EmailJS Error:", error);
//     toast({
//       title: "Error",
//       description: "There was a problem sending your message. Please try again.",
//       variant: "destructive",
//     });
//   } finally {
//     setIsSubmitting(false);
//   }
// };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
     <motion.div
  className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={onClose}
/>

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full overflow-auto max-h-[90vh]">
              <div className="flex justify-end p-4">
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-800 text-xl"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-montserrat mb-6 text-gray-800">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className={`w-full ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        {...register("email")}
                        className={`w-full ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      className={`w-full ${
                        errors.subject ? "border-red-500" : ""
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <Label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className={`w-full resize-none ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-poppins font-medium py-6 h-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
