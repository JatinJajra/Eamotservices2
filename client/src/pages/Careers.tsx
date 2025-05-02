import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface JobListing {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const jobListings: JobListing[] = [
  {
    id: 1,
    title: "Service Technician - Diesel Generators",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    department: "Field Services",
    description: "We are looking for an experienced Service Technician to join our team to provide maintenance and repair services for diesel generators.",
    responsibilities: [
      "Perform routine maintenance on diesel generators according to manufacturer specifications",
      "Diagnose and repair generator faults and malfunctions",
      "Install new generators and commission systems",
      "Document service activities and maintain accurate service records",
      "Respond to emergency service calls as needed"
    ],
    requirements: [
      "3+ years experience with diesel generator maintenance and repair",
      "Technical certification or diploma in mechanical or electrical engineering",
      "Knowledge of electrical systems and generator components",
      "Valid driver's license and ability to travel to client sites",
      "Strong problem-solving skills and customer service orientation"
    ]
  },
  {
    id: 2,
    title: "IoT Solutions Engineer",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    department: "Technology",
    description: "We are seeking an IoT Solutions Engineer to help develop and implement our energy management IoT solutions for clients.",
    responsibilities: [
      "Design and implement IoT-based monitoring solutions for energy systems",
      "Configure sensors, gateways, and connectivity solutions",
      "Develop custom dashboards and reporting systems",
      "Work with clients to understand their energy monitoring needs",
      "Collaborate with the service team for installation and maintenance of IoT systems"
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Electronics Engineering, or related field",
      "Experience with IoT platforms and device integration",
      "Knowledge of sensors, data acquisition, and wireless connectivity protocols",
      "Programming skills in Python, JavaScript, or similar languages",
      "Understanding of energy management systems and power generation equipment"
    ]
  },
  {
    id: 3,
    title: "Business Development Manager",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    department: "Sales",
    description: "We are looking for a Business Development Manager to drive growth by identifying new clients and expanding our service offerings to existing clients.",
    responsibilities: [
      "Identify and pursue new business opportunities in the energy management sector",
      "Build and maintain relationships with key clients and industry stakeholders",
      "Develop proposals and pitch energy management solutions to potential clients",
      "Work with the technical team to understand client needs and create tailored solutions",
      "Meet or exceed sales targets and business development goals"
    ],
    requirements: [
      "5+ years of sales or business development experience, preferably in energy sector",
      "Proven track record of meeting sales targets and growing client base",
      "Knowledge of energy management, power systems, or related fields",
      "Excellent communication and negotiation skills",
      "Bachelor's degree in Business, Engineering, or related field"
    ]
  }
];

export default function CareersPage() {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverletter: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleJobApply = (job: JobListing) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedJob) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Application Submitted",
        description: `Thank you for applying to the ${selectedJob.title} position. We will review your application and contact you soon.`,
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        coverletter: ""
      });
      
      setSelectedJob(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <img src="https://www.eamot.com/assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
                Join Our <span className="text-accent">Team</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Discover exciting career opportunities at EAMOT and be part of our mission to revolutionize energy management through innovative solutions.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <img src="https://www.eamot.com/assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
          </div>
        </section>
        
        {/* Application Form - Shown when a job is selected */}
        {selectedJob && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <Button 
                    variant="ghost" 
                    className="mb-6 text-primary hover:text-primary-800"
                    onClick={() => setSelectedJob(null)}
                  >
                    <i className="fas fa-arrow-left mr-2"></i> Back to job listings
                  </Button>
                  
                  <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-2 text-gray-800">
                    Apply for: {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-2 text-primary"></i> {selectedJob.location}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-briefcase mr-2 text-primary"></i> {selectedJob.type}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-users mr-2 text-primary"></i> {selectedJob.department}
                    </span>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="coverletter" className="block text-gray-700 font-medium mb-2">Cover Letter*</label>
                    <textarea
                      id="coverletter"
                      name="coverletter"
                      value={formData.coverletter}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Resume/CV*</label>
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500">PDF, DOC, or DOCX (MAX. 5MB)</p>
                        </div>
                        <input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" />
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-poppins font-medium py-6 h-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Submitting Application...
                      </>
                    ) : "Submit Application"}
                  </Button>
                </form>
              </div>
            </div>
          </section>
        )}
        
        {/* Job Listings - Hidden when application form is shown */}
        {!selectedJob && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
                  <span className="font-semibold">Explore Opportunities</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
                  Current <span className="text-primary">Job Openings</span>
                </h2>
                
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Join our team of passionate professionals working to transform the energy management industry with innovative solutions and exceptional service.
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto space-y-8">
                {jobListings.map((job) => (
                  <motion.div 
                    key={job.id} 
                    className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-primary-200 transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2 md:mb-0">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full">{job.type}</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{job.department}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <i className="fas fa-map-marker-alt mr-2 text-primary"></i> {job.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {job.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium"
                      onClick={() => handleJobApply(job)}
                    >
                      Apply Now
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Why Join Us Section - Hidden when application form is shown */}
        {!selectedJob && (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
                  <span className="font-semibold">Our Culture</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
                  Why Join <span className="text-primary">EAMOT</span>
                </h2>
                
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Discover the benefits of building your career with us and why our team members love working at EAMOT.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                    <i className="fas fa-lightbulb text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Innovation Focus</h3>
                  <p className="text-gray-600">
                    Work at the forefront of energy management technology, developing and implementing innovative solutions that make a real difference for our clients and the environment.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                    <i className="fas fa-chart-line text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Career Growth</h3>
                  <p className="text-gray-600">
                    Enjoy abundant opportunities for professional development, skill enhancement, and career advancement in a rapidly growing industry and company.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                    <i className="fas fa-users text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Collaborative Culture</h3>
                  <p className="text-gray-600">
                    Be part of a supportive team environment where collaboration is encouraged, diverse perspectives are valued, and everyone contributes to our shared success.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
                Don't See the Right Position?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="mailto:careers@emotservices.com">Send Your Resume</a>
              </Button>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}