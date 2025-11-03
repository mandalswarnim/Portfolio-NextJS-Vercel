import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Swarnim Mandal",
  description: "AI solutions, software development, and consulting services",
};

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Building responsive, cross-device compatible web applications with modern frameworks.",
      features: [
        "React & CSS Responsive UIs",
        "RESTful API Development",
        "Django Backend Integration",
        "CI/CD Pipeline Deployment",
      ],
      icon: "💻",
    },
    {
      title: "Machine Learning & AI",
      description: "Developing intelligent systems using neural networks and deep learning frameworks.",
      features: [
        "Neural Network Development",
        "Audio & Music Processing",
        "Predictive Modeling",
        "TensorFlow & PyTorch Implementation",
      ],
      icon: "🤖",
    },
    {
      title: "Data Analysis & Processing",
      description: "Extracting insights from complex datasets using statistical analysis and automation.",
      features: [
        "Automated Data Extraction",
        "Statistical Analysis",
        "Predictive Models",
        "Database Management",
      ],
      icon: "📊",
    },
    {
      title: "Mobile App Development",
      description: "Creating intuitive mobile experiences with Flutter and cross-platform solutions.",
      features: [
        "Flutter Development",
        "UI/UX Design",
        "Node.js Backend",
        "Cross-Platform Apps",
      ],
      icon: "📱",
    },
  ];

  const projects = [
    {
      title: "Generating Guitar Tablatures with Neural Networks",
      category: "Machine Learning",
      description: "Automated prediction of optimal guitar tablatures for input melodies using LSTM and Feed-forward Neural Networks with musical intention and fretting difficulty estimation",
      tech: ["Python", "TensorFlow", "Keras"],
      link: "#",
    },
    {
      title: "Heart Disease Prediction for COVID-19 Patients",
      category: "Machine Learning",
      description: "Logistic regression model predicting heart disease likelihood in COVID-19 affected individuals based on clinical and demographic factors",
      tech: ["Python", "Scikit-Learn", "Seaborn", "Matplotlib"],
      link: "#",
    },
    {
      title: "Music Genre Classification",
      category: "Deep Learning",
      description: "CNN model classifying audio files into 10 genres using MFCC features, achieving 79% accuracy on the GTZAN dataset",
      tech: ["Python", "PyTorch", "Librosa"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-background to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive software solutions from AI development to full-stack applications
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">A selection of projects I&apos;ve worked on</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-gray-800 hover:border-primary transition-all"
              >
                <div className="text-sm text-primary font-semibold mb-3">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">My Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
                { step: "02", title: "Planning", desc: "Creating a roadmap and strategy" },
                { step: "03", title: "Development", desc: "Building with best practices" },
                { step: "04", title: "Delivery", desc: "Testing, deployment, and support" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how I can help bring your ideas to life
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
