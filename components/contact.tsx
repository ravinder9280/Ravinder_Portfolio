"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, LinkedinIcon } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          msg: formData.msg,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
  
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          subject: "",
          msg: "",
        });
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send the message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "ravinder92809@gmail.com",
      link: "mailto:ravinder92809@gmail.com",
    },
    {
      icon: <LinkedinIcon className="h-6 w-6 text-primary" />,
      title: "LinkedIn",
      value: "ravinder92809",
      link: "https://www.linkedin.com/in/ravinder92809/",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Haryana, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="msg"
                      placeholder="I'd like to discuss a project..."
                      rows={6}
                      value={formData.msg}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="mt-8">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/ravinder92809/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href="https://x.com/Ravinder387573"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href="https://github.com/ravinder9280"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
