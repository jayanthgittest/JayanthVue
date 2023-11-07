<template>
    <div class="skills">
      <div class="navbar">
        <!-- Navigation Links with white text -->
        <q-btn flat dense to="/jayanth" color="white" label="Home" />
        <q-btn flat dense to="/jayanth/about" color="white" label="About" />
        <q-btn flat dense to="/jayanth/skills" color="white" label="Skillset" />
      </div>
  
      <q-page>
      <div class="q-pa-md skill-container">
        <!-- Python -->
        <div class="skill-item">
          <q-card>
            <q-img
              src="../assets/python-skill.png"
              alt="Python"
            />
            <q-card-section>
              <h2>Python</h2>
              <p>Python is becoming a personal favorite after going through hard C and C++. I'm proficient in Python and use it for various applications.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Java -->
        <div class="skill-item">
          <q-card>
            <q-img
              src="../assets/java-skill.png"
              alt="Java"
            />
            <q-card-section>
              <h2>Java</h2>
              <p>Java is widely used in the industry, and I've learned it. While not a fan, I have a good understanding of Java and its applications.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Docker -->
        <div class="skill-item">
          <q-card>
            <q-img
              src="../assets/docker-skill.png"
              alt="Docker"
            />
            <q-card-section>
              <h2>Docker</h2>
              <p>Interested in Docker technology and its containerization capabilities. Proficient in Docker for application deployment and management.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Kubernetes -->
        <div class="skill-item">
          <q-card>
            <q-img
              src="../assets/kubernetes-skill.png"
              alt="Kubernetes"
            />
            <q-card-section>
              <h2>Kubernetes</h2>
              <p>Another exciting technology. I have experience in deploying, managing, and scaling applications with Kubernetes.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Linux -->
        <div class="skill-item">
          <q-card>
            <q-img
              src="../assets/linux-skill.png"
              alt="Linux"
            />
            <q-card-section>
              <h2>Linux</h2>
              <p>Proficient in Linux operating systems and open-source technologies. Comfortable with command-line interfaces and server administration.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Windows -->
        <div class="skill-item">
          <q-card>
            <q-img
              src="../assets/windows-skill.png"
              alt="Windows"
            />
            <q-card-section>
              <h2>Windows</h2>
              <p>Skilled in Windows environments and system administration. Proficient in managing Windows-based servers and workstations.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Git -->
        <div class="skill-item">
          <q-card>
            <q-img
              src="../assets/git-skill.png"
              alt="Git"
            />
            <q-card-section>
              <h2>Git</h2>
              <p>Experienced with version control using Git. Proficient in collaborating on software projects with Git repositories.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- HTML & CSS -->
        <div class="skill-item">
          <q-card>
            <q-img
              src="../assets/HTML-skill.png"
              alt="HTML & CSS"
            />
            <q-card-section>
              <h2>HTML & CSS</h2>
              <p>Proficient in front-end web development with HTML and CSS. Skilled in creating responsive and visually appealing web interfaces.</p>
            </q-card-section>
          </q-card>
          </div>
  
          <!-- Add similar containers for Docker, Kubernetes, Linux, Windows, Git, HTML & CSS -->
        </div>
      </q-page>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MySkills',
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }
  
  .skill-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px;
  }
  
  .skill-item {
    width: 300px;
    margin: 20px;
  }
  
  h2 {
    font-size: 20px;
    margin: 10px 0;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  </style>
  