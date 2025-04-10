import React from "react";
import { Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
<div className="min-h-screen bg-[url('../public/krishna-bg.jpg')] bg-cover bg-center text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8 bg-black/60 p-6 rounded-2xl shadow-xl">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Mangarapu Raghu</h1>
          <p className="text-lg mt-2">AWS DevOps Engineer | CI/CD Expert | Cloud Infrastructure Specialist</p>
          <div className="mt-4 flex justify-center">
            <a
              href="https://www.linkedin.com/in/mangarapuraghu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md"
            >
              <Linkedin size={20} /> Connect on LinkedIn
            </a>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I’m a passionate DevOps Engineer with 4+ years of experience in building, deploying, and managing scalable AWS cloud infrastructure...
          </p>
        </section>

        {/* Other sections... */}
        
        <footer className="text-center text-sm text-gray-300">
          Radhe Radhe ✨ | Designed with devotion by Mangarapu Raghu
        </footer>
      </div>
    </div>
  );
}
