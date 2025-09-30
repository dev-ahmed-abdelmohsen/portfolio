import Image from "next/image";
import { Metadata } from "next";
import {
  FaRocket,
  FaSyncAlt,
  FaCode,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Case Study: Business Management Platform",
  description:
    "A detailed case study of building a business management platform from MVP to a fully deployed system using a robust DevOps workflow with Terraform and Ansible.",
};

const BusinessSystemCaseStudy = () => {
  return (
    <div className="bg-slate-50 text-gray-700 font-sans">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/task-app.jpg"
            alt="Business Management Platform Background"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 via-slate-900/70 to-blue-900/60"></div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-repeat"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <p className="text-teal-400 font-semibold mb-2">
            Full-Stack & DevOps Case Study
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Business Management Platform
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Transforming a startup's vision into a live, automated, and scalable
            system from the ground up.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 lg:p-12">
        {/* Project Overview Section */}
        <section className="mb-20 bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">
                The Challenge
              </h2>
              <p>
                A new startup in the Arab market needed a digital solution to
                manage their core business operations. The client was
                non-technical and required a system to track expenses, revenue,
                and maintenance inventory. The initial request was for a Minimum
                Viable Product (MVP) with a clear roadmap for future feature
                additions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-bold text-slate-600">Client</h4>
                <p>Arabic Startup (Non-Technical)</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-bold text-slate-600">Core Need</h4>
                <p>MVP for Business Operations (Finance & Inventory)</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-bold text-slate-600">Key Goal</h4>
                <p>Build a scalable system with a fast, iterative workflow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps in Action Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              DevOps in Action: The Automation Engine
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-slate-600">
              The cornerstone of this project was a robust DevOps strategy,
              enabling rapid development and reliable deployments right from the
              start.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
              <FaCode className="text-4xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Code & Build</h3>
              <p>Automated builds triggered on every push to the repository.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
              <FaSyncAlt className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">CI/CD Pipeline</h3>
              <p>
                Using GitHub Actions for continuous integration and deployment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
              <FaServer className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Infrastructure (IaC)</h3>
              <p>
                Provisioned cloud resources on AWS using{" "}
                <strong>Terraform</strong>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
              <FaRocket className="text-4xl text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Configuration</h3>
              <p>
                Managed server configuration and software setup with{" "}
                <strong>Ansible</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* System Screenshots Gallery */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Inside the System
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/projects/task-app.jpg"
                alt="Dashboard view"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <p className="text-white font-bold">Dashboard</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/projects/inventory.jpg"
                alt="Inventory Management"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <p className="text-white font-bold">Inventory Management</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/projects/expense.png"
                alt="Expense Tracking"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <p className="text-white font-bold">Expense Tracking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Design Showcase */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-800">
            Fully Responsive Design
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-slate-600 mb-12">
            A seamless experience across all devices, from mobile to desktop.
          </p>
          <div className="relative flex justify-center items-center h-96">
            {/* Desktop */}
            <div className="relative z-10 w-3/4 max-w-3xl h-80 rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/projects/task-app.jpg"
                alt="Desktop view"
                fill
                className="object-cover"
              />
            </div>
            {/* Mobile */}
            <div className="absolute z-20 -bottom-10 -right-5 w-32 h-56 bg-white p-2 rounded-xl shadow-2xl border-4 border-slate-700">
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/projects/responsive.png"
                  alt="Mobile view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Full-Stack Development",
              "SQL Database",
              "DevOps",
              "CI/CD",
              "Terraform",
              "Ansible",
              "Docker",
              "AWS",
              "Responsive Design",
              "Next.js",
              "Node.js",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Outcomes */}
        <section className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-slate-200">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Project Outcomes
          </h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Successful MVP Launch</h4>
                <p>
                  Delivered a functional MVP that met the client's core
                  requirements, enabling them to start operations immediately.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">
                  Efficient Development Workflow
                </h4>
                <p>
                  The CI/CD pipeline significantly reduced deployment time and
                  allowed for quick iteration on new features.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Live & Active System</h4>
                <p>
                  The platform is now live, serving real users and providing
                  critical business insights.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Client Empowerment</h4>
                <p>
                  The automated system empowered a non-technical client to
                  manage their business effectively through a digital solution.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default BusinessSystemCaseStudy;
