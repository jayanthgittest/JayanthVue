<template>
    <div class="about">
      <q-page-container>
        <div class="navbar">
          <q-btn flat dense to="/jayanth" color="white" label="Home" />
          <q-btn flat dense to="/jayanth/about" color="white" label="About" />
          <q-btn flat dense to="/jayanth/skills" color="white" label="SKillset" />
        </div>
  
        <q-page>
          <div class="q-pa-md timeline">
            <div class="timeline-item">
              <div class="year">2002</div>
              <div class="event">
                <h2>Birth and Early Life</h2>
                <p>Born on February 10th, 2002, in Chennai, India. Raised in the vibrant city of Bengaluru.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="year">School Days</div>
              <div class="event">
                <h2>Schooling at Athena Public School</h2>
                <p>Attended Athena Public School, where I laid the foundation for my academic journey.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="year">College Years</div>
              <div class="event">
                <h2>College at National College Jayanagar</h2>
                <p>Completed my PUC at National College Jayanagar, Bengaluru.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="year">Family</div>
              <div class="event">
                <h2>Family and Support</h2>
                <p>My family includes my mother, Dhanalaxmi, and my father, Senthil Kumar. They have always been my pillars of strength and encouragement.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="year">Leadership and Achievements</div>
              <div class="event">
                <h2>Leadership and Extracurricular Activities</h2>
                <p>Throughout my academic journey, I actively participated in various co-curricular activities, showcasing great leadership skills. I led my team to victory in events like March past and other activities, even though I stayed away from sports.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="year">Current Status</div>
              <div class="event">
                <h2>Present Day</h2>
                <p>Today, I am a passionate Software Engineer working at LTIMindtree, committed to creating innovative and impactful software solutions.</p>
              </div>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }
  
  .nav-link {
    color: white !important;
    text-decoration: none;
  }
  
  .timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
}

.timeline-item {
  display: flex;
  width: 90%;
  max-width: 800px;
  margin: 20px 0;
}

.year {
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px; /* Add right margin to separate the year from the line */
}

.event {
  flex: 1; /* Make the event content take up the remaining space */
  padding: 20px;
  border-left: 2px solid #3498db;
  background-color: #f0f0f0; /* Add a background color to separate it from the line */
  border-radius: 5px; /* Round the edges for a better visual effect */
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
  