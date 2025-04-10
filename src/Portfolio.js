import React from "react";
import { Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white p-8"
      style={{ backgroundImage: "url('/krishna-bg.jpg')" }}
    >
      <div className="max-w-4xl mx-auto space-y-8 bg-black/60 p-6 rounded-2xl shadow-xl">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Mangarapu Raghu</h1>
          <p className="text-lg mt-2">AWS DevOps Engineer | CI/CD Expert | Cloud Infrastructure Specialist</p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/mangarapuraghu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md"
            >
              <Linkedin size={20} /> Connect on LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-md"
            >
              📄 Download Resume
            </a>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I’m a passionate DevOps Engineer with 4+ years of experience in building, deploying, and managing scalable AWS cloud infrastructure. Skilled in CI/CD pipelines, Docker, Kubernetes, and Infrastructure as Code (IaC) tools like Terraform and Ansible. My mission is to automate everything, ensure high availability, and enable seamless deployments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Cloud Platforms: AWS, GCP, Azure</li>
            <li>DevOps Tools: Jenkins, Docker, Kubernetes, Git, Nexus, SonarQube</li>
            <li>Infrastructure as Code: Terraform, Ansible, CloudFormation</li>
            <li>CI/CD Pipelines & Automation</li>
            <li>Monitoring: CloudWatch, CloudTrail</li>
            <li>Scripting: Bash, YAML</li>
            <li>Operating Systems: Linux, Windows</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
          <ul className="space-y-4">
            <li>
              <strong>DevOps Engineer – Applitech Solutions, Bangalore</strong><br />
              Designed and maintained CI/CD pipelines, AWS infrastructure, and Dockerized environments. Led multiple deployments for mission-critical applications.
            </li>
            <li>
              <strong>DevOps Engineer – GE Healthcare (via Applitech)</strong><br />
              Managed 300+ applications and 150+ servers globally. Automated deployments using Jenkins, Docker, and Ansible. Improved monitoring with CloudWatch.
            </li>
            <li>
              <strong>Cloud & DevOps Engineer – Essel Infra</strong><br />
              Delivered full-stack DevOps automation from Git to Production. Managed AWS services like EC2, VPC, IAM, CloudTrail, and S3 for 100+ servers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Featured Project</h2>
          <p>
            <strong>CI/CD Pipeline for Microservices with Docker on AWS:</strong> Implemented an end-to-end automated pipeline integrating GitHub, Jenkins, Maven, SonarQube, and Nexus. Dockerized services and deployed on EC2 with Slack notifications for real-time updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            📞 +91 9550600914<br />
            📧 <a href="mailto:mangarapuraghu@gmail.com" className="text-blue-300 underline">mangarapuraghu@gmail.com</a><br />
            🔗 <a
              href="https://www.linkedin.com/in/mangarapuraghu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >LinkedIn Profile</a>
          </p>
        </section>

        <footer className="text-center text-sm text-gray-300">
          Radhe Radhe ✨ | Designed with devotion by Mangarapu Raghu
        </footer>
      </div>
    </div>
  );
}
