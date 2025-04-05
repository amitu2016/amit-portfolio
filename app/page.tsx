'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

export default function Home() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const summaryRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const certsRef = useRef(null);

  const summaryInView = useInView(summaryRef, { once: true });
  const experienceInView = useInView(experienceRef, { once: true });
  const educationInView = useInView(educationRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });
  const certsInView = useInView(certsRef, { once: true });

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow container mx-auto p-6 max-w-4xl relative z-0">
        <motion.div ref={summaryRef} initial={{ opacity: 0, y: 50, rotateX: -15 }} animate={summaryInView ? { opacity: 1, y: 0, rotateX: 0 } : {}} transition={{ duration: 0.8 }} style={{ perspective: '1000px' }}>
          <Section title="Professional Summary">
            <p className="text-gray-300 leading-relaxed">
              Results-driven Technical Lead with 7+ years of experience designing, developing, and deploying cloud-native applications using microservices architecture. Proficient in Java, Spring Boot, and modernizing legacy systems into distributed microservices. Experienced in containerization using Docker and orchestration with Kubernetes. Skilled in implementing CI/CD pipelines, monitoring using ELK stack, and maintaining system observability. Strong leadership abilities with a track record of mentoring teams and delivering secure, scalable, and high-performance applications.
            </p>
          </Section>
        </motion.div>

        <motion.div ref={experienceRef} initial={{ opacity: 0, y: 50, rotateX: -15 }} animate={experienceInView ? { opacity: 1, y: 0, rotateX: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} style={{ perspective: '1000px' }}>
          <Section title="Professional Experience">
            <h3 className="text-lg font-semibold text-gray-200">Senior Project Engineer, CDAC, Mumbai (March 2018 - Present)</h3>
            <ul className="list-disc ml-5 text-gray-300 mt-2 space-y-2">
              <li>Designed and developed enterprise-grade applications using Java, Spring Boot, and RESTful microservices.</li>
              <li>Led modernization of monolithic systems to microservices architecture deployed on Kubernetes.</li>
              <li>Containerized applications using Docker and managed deployments on Kubernetes clusters.</li>
              <li>Implemented CI/CD pipelines using Jenkins, Git, and integrated DevOps practices for faster delivery.</li>
              <li>Developed secure APIs with OAuth 2.0 and JWT authentication; ensured seamless third-party integrations.</li>
              <li>Enhanced monitoring and logging using ELK stack (Elasticsearch, Logstash, Kibana).</li>
              <li>Mentored junior developers, conducted code reviews, and improved overall code quality.</li>
              <li>Resolved production incidents, performed root cause analysis, and improved system observability.</li>
            </ul>
          </Section>
        </motion.div>

        <motion.div ref={educationRef} initial={{ opacity: 0, y: 50, rotateX: -15 }} animate={educationInView ? { opacity: 1, y: 0, rotateX: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} style={{ perspective: '1000px' }}>
          <Section title="Education">
            <p className="text-gray-300">Bachelor of Engineering (B.E.), University of Pune (2012 - 2016) - Aggregate: 70%</p>
          </Section>
        </motion.div>

        <motion.div ref={skillsRef} initial={{ opacity: 0, y: 50, rotateX: -15 }} animate={skillsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} style={{ perspective: '1000px' }}>
          <Section title="Technical Skills">
            <button onClick={() => setIsSkillsOpen(!isSkillsOpen)} className="text-blue-400 font-semibold mb-4 hover:underline focus:outline-none">
              {isSkillsOpen ? 'Hide Skills' : 'Show Skills'}
            </button>
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: isSkillsOpen ? 'auto' : 0, opacity: isSkillsOpen ? 1 : 0 }} transition={{ duration: 0.5 }} className="overflow-hidden">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <li><strong>Languages:</strong> Java, C++, Shell Scripting</li>
                <li><strong>Frameworks/Tools:</strong> Spring Boot, Spring Cloud, Hibernate, JUnit</li>
                <li><strong>Microservices/APIs:</strong> RESTful APIs, Swagger, Feign Clients</li>
                <li><strong>DevOps/CI-CD:</strong> Git, Jenkins, Docker, Kubernetes</li>
                <li><strong>Cloud/Monitoring:</strong> AWS (EC2, S3, RDS), ELK Stack</li>
                <li><strong>Messaging:</strong> Kafka, RabbitMQ</li>
                <li><strong>Databases:</strong> PostgreSQL, MySQL</li>
                <li><strong>Frontend:</strong> ReactJS, jQuery</li>
                <li><strong>Security:</strong> OAuth 2.0, JWT, RBAC</li>
              </ul>
            </motion.div>
          </Section>
        </motion.div>

        <motion.div ref={certsRef} initial={{ opacity: 0, y: 50, rotateX: -15 }} animate={certsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}} transition={{ duration: 0.8, delay: 0.8 }} style={{ perspective: '1000px' }}>
          <Section title="Certifications">
            <p className="text-gray-300">Post Graduate Diploma in Advanced Computing - CDAC Mumbai</p>
          </Section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}