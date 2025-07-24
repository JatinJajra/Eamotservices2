import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { ref: leftRef, inView: leftInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // This would normally be an API call
      console.log("Form submitted:", data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -30 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Get In Touch</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Ready to get started with your energy management solution?
            </h2>
            
            <p className="text-gray-800 mb-8 max-w-lg">
              Contact us today for a consultation. Our team of experts is ready to help you optimize your energy usage and reduce costs.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-3 bg-primary-50 text-primary rounded-full">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-800">2nd Floor, 58/1, Paramahansa Yogananda Road, Opp. Arun CADD, Bengaluru, Karnataka 560038, India.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-3 bg-primary-50 text-primary rounded-full">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-800 mb-1">Call Us</h4>
                  <p className="text-gray-800"><a href="tel:08041663297" className="text-gray-800 hover:text-primary transition duration-300">080-41663297</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-3 bg-primary-50 text-primary rounded-full">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-800 mb-1">Email Address</h4>
                  <p className="text-gray-800"><a href="mailto:info@emotservices.com" className="text-gray-800 hover:text-primary transition duration-300">info@emotservices.com</a></p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {/* <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-primary-600 text-white flex items-center justify-center transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a> */}
              {/* <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-primary-600 text-white flex items-center justify-center transition duration-300">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-primary-600 text-white flex items-center justify-center transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-primary-600 text-white flex items-center justify-center transition duration-300">
                <i className="fab fa-instagram"></i>
              </a> */}
            </div>
          </motion.div>
          
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 30 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-gray-800">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</Label>
                    <Input 
                      id="name"
                      {...register("name")}
                      className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</Label>
                    <Input 
                      type="email" 
                      id="email"
                      {...register("email")}
                      className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</Label>
                  <Input 
                    id="subject"
                    {...register("subject")} 
                    className={`w-full ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</Label>
                  <Textarea 
                    id="message" 
                    rows={5}
                    {...register("message")}
                    className={`w-full resize-none ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
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
                  ) : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
