import Timeline from "../components/Timeline/Timeline";

function About() {
  const skills = [
    "HTML, CSS, JavaScript",
    "React",
    "Django & Django REST Framework",
    "SQL & Databases",
    "Git & GitHub",
  ];

  return (
    <main className="about-page">
      <section>
        <h1>About Me</h1>

        <p>
          I am a Full Stack Developer with a strong interest in building
          scalable, user-focused web applications.
        </p>
      </section>

      <section>
        <h2>Education</h2>

        <Timeline
          items={[
            {
              year: "2024",
              title: "10th Grade Completion",
              description: "Completed 10th grade with a focus on science subjects",
            },
            {
              year: "2024",
              title: "12th Grade Completion",
              description: "Completed 12th grade ",
            },
            {
              year: "2024",
              title: "Bachelor's Degree",
              description: "Degree in Electronic and Telecommunication Engineering",
            },
            {
              year: "2024",
              title: "Web Development Training",
              description: "React, Django, and REST APIs",
            },
          ]}
        />
      </section>


      <section>
        <h2>Skills</h2>

        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

    </main>
  );
}

export default About;
