"use client";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScaleIn from "@/components/animations/ScaleIn";
import { motion } from "framer-motion";

export default function Home() {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "4", label: "Professional Roles" },
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
  ];

  const services = [
    {
      title: "Full-Stack Development",
      description: "Building responsive UIs with React & CSS, developing RESTful APIs, and optimizing databases with Django and Node.js.",
      icon: "💻",
    },
    {
      title: "Machine Learning & AI",
      description: "Developing neural networks for music generation, disease prediction models, and audio classification using TensorFlow, PyTorch, and Keras.",
      icon: "🤖",
    },
    {
      title: "Data Analysis",
      description: "Extracting insights from data using statistical analysis, predictive modeling, and automated data processing tools.",
      icon: "📊",
    },
  ];

  const testimonials = [
    {
      name: "Adrian Mihail",
      role: "Professional Colleague",
      content: "Swarnim is an exceptional professional who brings genuine passion and dedication to everything he undertakes. His commitment to excellence and ability to inspire and uplift his team members makes him an invaluable asset to any project. He consistently demonstrates a remarkable focus on the present while maintaining a forward-thinking approach to his work.",
    },
    {
      name: "Sudip (Former Student)",
      role: "Academic Success Story",
      content: "After facing significant academic challenges and failing my 12th-grade exams twice, I had almost lost hope. Swarnim's patient tutoring and dedication transformed my educational journey. Under his mentorship, I not only passed but gained confidence in both Nepali and Chemistry. His teaching approach made complex subjects accessible and helped me achieve what seemed impossible.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-amber-950/40 via-stone-900/50 to-slate-900/40 overflow-hidden backdrop-blur-sm">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-amber-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-600/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 text-center z-10">
          <FadeIn delay={0.2}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent bg-300% animate-gradient drop-shadow-lg"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Swarnim Mandal
            </motion.h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
              MSc Software Engineering Student | Full-Stack Developer | Data Analyst
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg text-stone-300 mb-12 max-w-2xl mx-auto drop-shadow-md">
              Currently pursuing Software Engineering at University of West London. Experienced in building responsive web applications, machine learning models, and data-driven solutions.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-amber-900/40 hover:shadow-xl hover:shadow-amber-900/60 backdrop-blur-sm"
                >
                  Get In Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="border-2 border-amber-500 text-amber-200 hover:bg-amber-600/30 hover:text-amber-100 px-8 py-3 rounded-lg text-lg font-semibold transition-all backdrop-blur-md"
                >
                  Discover More
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-stone-900/60 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-900/30 to-stone-900/40 backdrop-blur-md border border-amber-700/30 hover:border-amber-500/50 transition-all shadow-lg"
                >
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-stone-300">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
                What I Do
              </h2>
              <p className="text-stone-300 text-lg max-w-2xl mx-auto drop-shadow-md">
                Specialized in creating innovative solutions that drive business growth and efficiency
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-900/20 to-stone-900/30 p-8 rounded-2xl border border-amber-700/30 hover:border-amber-500/60 transition-all backdrop-blur-md h-full group shadow-lg"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl mb-6 drop-shadow-lg"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-200 group-hover:text-amber-300 transition-colors drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="text-stone-300 leading-relaxed">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-amber-900/40 hover:shadow-xl hover:shadow-amber-900/60 backdrop-blur-sm"
                >
                  View All Services
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-stone-900/60 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
                Client Testimonials
              </h2>
              <p className="text-stone-300 text-lg drop-shadow-md">What people say about working with me</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-900/20 to-stone-900/30 p-8 rounded-2xl border border-amber-700/30 hover:border-amber-500/60 transition-all backdrop-blur-md h-full shadow-lg"
                >
                  <div className="text-amber-400 text-4xl mb-4">&ldquo;</div>
                  <p className="text-stone-200 mb-6 italic">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold text-amber-300">{testimonial.name}</div>
                    <div className="text-stone-400 text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScaleIn>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-amber-900/30 via-amber-800/30 to-amber-900/30 rounded-2xl p-12 text-center border border-amber-600/40 backdrop-blur-md relative overflow-hidden shadow-2xl"
            >
              {/* Animated background */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
              />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-100 drop-shadow-lg">
                  Ready to Start Your Next Project?
                </h2>
                <p className="text-stone-200 mb-8 text-lg max-w-2xl mx-auto drop-shadow-md">
                  Let&apos;s work together to bring your ideas to life with innovative technology solutions
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-amber-900/50 hover:shadow-xl hover:shadow-amber-900/70"
                  >
                    Contact Me Today
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
