import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "auto",
        }}
      >
        <h2>Education</h2>
        <div>
          <h3>University of Texas at Austin</h3>
          <p>
            Master of Science in Software Engineering
            <br />
            Expected Graduation: May 2026
          </p>
          <ul>
            <li>ECE 382V - Systems Programming: Advanced POSIX API implementation, concurrency patterns, operating system design, x86 architecture, shell programming</li>
            <li>ECE 382N - Distributed Systems: Implementation of distributed algorithms, fault tolerance mechanisms, synchronization protocols, consensus algorithms, map-reduce frameworks</li>
          </ul>
          <p>
            Bachelor of Science in Biomedical Engineering
            <br />
            Graduated: May 2021
          </p>
          <ul>
            <li>ECE 461L - Software Engineering and Design Lab: Database design, agile methodologies, requirements engineering, microservices architecture, API development</li>
            <li>ECE 445M - Embedded and Real-Time Systems: Real-Time operating systems, ARM Cortex-M programming, digital/analog signal processing, SPI protocols, PCB design</li>
            <li>ECE 445L - Embedded System Design Lab: Hardware/software integration, IoT development, interface programming</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
