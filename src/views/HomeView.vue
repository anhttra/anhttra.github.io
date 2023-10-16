<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import ProfileCard from '../components/cards/ProfileCard.vue'
import TimelineCard from '../components/cards/TimelineCard.vue'
import SimpleBanner from '../components/banners/SimpleBanner.vue'

</script>

<template>
  <main>
    <div class="homepage-banner">
      <simple-banner></simple-banner>
    </div>

    <div class="homepage-container">
      <ProfileCard></ProfileCard>
      <hr>
      <div class="timecard-container">
        <TimelineCard startDate="09/20" endDate="06/23" iconSrc="/dsoft-logo.svg">
          I was the Head of THOR Lab at D-Soft JSC. I had developed core AI modules, especially Image Processing 
          and Video Analysis using Deep Learning for the company's products and customer's projects. 
          I had designed architectures of CV & NLP systems using the latest AI/DL technologies. 
          I had managed a R&D Lab (~ 20 mem. including AI engineers and interns).
        </TimelineCard>
        <TimelineCard startDate="08/19" endDate="08/20" iconSrc="/dsoft-logo.svg">
          I was the R&D Group Leader (AI Division) at D-Soft JSC. 
          My main role was Senior Research AI Engineer and Technical Project Manager.
          I had developed and improved performances of Person Detection, Person Tracking, Face Recognition, Age/Gender Estimation models. 
          I had also designed and implemented back-ends for AI systems.
        </TimelineCard>
        <TimelineCard startDate="01/19" endDate="06/19" iconSrc="/hitachi-logo.png">
          I was a Senior Consultant (SC2) at Hitachi Consulting Vietnam (now Hitachi Vantara VN). 
          I had led the AI RD team which focuses on designing and consulting Digital Transformation solutions.
          My team had applied state-of-the-art ML/DL algorithms of Image/Video Analysis and Natural Language Processing.
          I had also worked in Data Insight, Cloud Computing and Edge Computing.
        </TimelineCard>
        <TimelineCard startDate="11/17" endDate="12/18" iconSrc="/hitachi-logo.png">
          I was a Seninor Consultant (SC1) at Hitachi Consulting Vietnam (now Hitachi Vantara VN).
          I have worked in DL based Gait Recognition, Recommender System, Image Analysis projects.
          My role was to propose ML/DL technical solutions for Smart Agriculture, Predictive Maintenance, and Video Object Detection.
        </TimelineCard>
        <TimelineCard startDate="08/13" endDate="02/18" iconSrc="/ntu-logo.webp">
          I was PhD. Student at Interdisciplinary Graduate School, Nanyang Technological University, Singapore.
          I was belong to Rapid-Rich Object Search Laboratory (RoseLab). 
          I had completed Computer Sciences courses with focus on learning Digital Image Signal Processing.
          I had performed four years of studies and published one research paper, before exiting program.
        </TimelineCard>
        <TimelineCard startDate="06/12" endDate="02/13" iconSrc="/acronic-logo.jpeg">
          I was a Hardware Engineer at Acronics System Inc. 
          I had designed FPGA IP Cores using Verilog HDL on Altera/Xilinx devices and 
          programmed embedded system algorithms using C/C++ on Microchip MCUs.
        </TimelineCard>
        <TimelineCard startDate="08/07" endDate="06/12" iconSrc="/bkdn-logo.png">
          I got my bachelor degree of Telecommunication (with Computer Science Minor) at Faculty of Electronic and Telecommunication,
          Danang University of Technology, Vietnam. My GPA is 3.47/4.00.
        </TimelineCard>
      </div>
  </div>
    <!-- <TheWelcome /> -->
    <!-- Vertical timeline -->
  </main>
</template>

<style>
main {
  width: 100%;
}

.homepage-container{
  padding: 0 3rem;
}

hr {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

@media (min-width: 1020px) {
  .timecard-container {
    max-width: 980px;
    margin: 16px auto;
  }
}

@media(max-width: 900px) {
  .homepage-banner {
    display: none;
  }
}

@media(max-width: 500px) {
  .homepage-container {
    padding: 0 5px;
  }
}

.timecard-container {
  max-width: 1020px;
  margin: 32px auto;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
