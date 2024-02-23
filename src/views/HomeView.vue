<script setup>
import TemplateContainer from '@/components/TemplateContainer.vue';
import LiveVideoComponent from '@/components/LiveVideoComponent.vue';
</script>

<template>
  <nav class="navbar navbar-expand-xl bg-body-tertiary position-fixed  w-100  p-0 " data-bs-theme="dark">
    <div class="nav-container container-fluid glow py-4">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse py-2 " id="navItems">
          <ul class="navbar-nav me-auto mb-2 text-white mb-lg-0 justify-content-center w-100">
            <li class="nav-item mx-1">
              <router-link  class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item dropdown mx-1 " data-bs-theme="light">
              <a class="nav-link dropdown-toggle text-white" class-active="active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <router-link class="text-white text-decoration-none" to="/about">About Us</router-link>
              </a>
              <ul class="dropdown-menu rounded-0 ">
                <li>
                  <router-link  class="dropdown-item my-2" to="/about/objectives">View, Mission, Quality Policy & Mandate</router-link>
                </li>
                <li>
                  <router-link  class="dropdown-item my-2" to="/about/citizen's-charter">Citizen's Charter - 2022 Edition</router-link>
                </li>
                <li>
                  <router-link  class="dropdown-item my-2" to="/about/organizational-structure">Organizational Structure</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown mx-1" data-bs-theme="light">
              <a class="nav-link dropdown-toggle text-white" class-active="active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <router-link class="text-white text-decoration-none" to="/officials">Municipality Officials</router-link>
              </a>
              <ul class="dropdown-menu rounded-0">
                <li>
                  <router-link  class="dropdown-item my-2" to="/officials/vice-governors">Vice Governor</router-link>
                </li>
                <li>
                  <router-link  class="dropdown-item my-2" to="/officials/board-members">Board Members</router-link>
                </li>
                <li>
                  <router-link  class="dropdown-item my-2" to="/officials/panlungsod-members">20th Sangguniang Panlungsod Members</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item mx-1">
              <router-link  class="nav-link text-white" to="/calendar-of-activities">Calendar Of Activities</router-link>
            </li>
            <li class="nav-item dropdown mx-1" data-bs-theme="light">
              <a class="nav-link dropdown-toggle text-white" class-active="active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <router-link class="text-white text-decoration-none" to="/legislative">Legislative</router-link>
              </a>
              <ul class="dropdown-menu rounded-0">
                <li>
                  <router-link  class="dropdown-item my-2" to="/legislative/elis">ELIS</router-link>
                </li>
                <li>
                  <router-link  class="dropdown-item my-2" to="/legislative/online-tracking">Online Tracking</router-link>
                </li>
                <li>
                  <router-link  class="dropdown-item my-2" to="/legislative/resolution/ordinance-esubmission">Resolution/Ordinance e-Submission</router-link>
                </li>
              </ul>	
            </li>
            <li class="nav-item mx-1">
              <router-link  class="nav-link text-white" to="/order-of-business">Order of Business</router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link  class="nav-link text-white" to="/municipalities">Municipalities</router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link  class="nav-link text-white" to="/contact-us">Contact Us</router-link>
            </li>
          </ul>
        </div>
    </div>
  </nav>
  <div class="hero w-100">
    
        <div class="nav-container  container-fluid d-flex align-items-center text-center justify-content-center">
          <div class="row justify-content-center">
              <!-- <i class="bi bi-4-circle" style="font-size: 15rem; vertical-align: middle; max-height: 20rem;"></i> -->
              <img class="company-logo mx-auto mb-2" src="../assets/images/circle.png" alt="" srcset="">
              <h1 class="company-header text-white fw-bold">
                THE SANGGUNIANG PANLUNGSOD OF QUEZON
              </h1>
              <h3 class="info text-white">
                Regular Session Livestreaming at 9:00am every Tuesday
              </h3>
            <div class="view-more-scroller">
              <h5 class="text-white">
                View More
              </h5>
              <i class="bi bi-arrow-down text-white" style="font-size: 4rem;"></i>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
  </div>

  <TemplateContainer class="">
    <div id="CardCarousel" class="carousel slide" data-bs-ride="carousel">

      <ol class="carousel-indicators">
        <li data-bs-target="#CardCarousel" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#CardCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#CardCarousel" data-bs-slide-to="2"></li>
      </ol>
      
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/hero.png" class="d-block w-100" alt="Slide 1">
        </div>

        <div class="carousel-item">
          <img src="../assets/images/hero.png" class="d-block w-100" alt="Slide 2">
        </div>

        <div class="carousel-item">
          <img src="../assets/images/hero.png" class="d-block w-100" alt="Slide 3">
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#CardCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#CardCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>

    </div>
  </TemplateContainer>
  
  <TemplateContainer>
    <div class="row g-3 my-3">
      <div class="col-lg-6">
        <LiveVideoComponent
          :pageLink="'https://www.facebook.com/QuezonGovPh'"
          :videoSrc="'src/assets/images/sample_vid.mp4'"
          >
          <template #heading>The 20th Sangguniang Panlungsod Members</template>
        </LiveVideoComponent>
      </div>
      <div class="col-lg-6">
        <LiveVideoComponent
          :pageLink="'https://www.facebook.com/QuezonGovPh'"
          :videoSrc="'src/assets/images/sample_vid.mp4'"
          >
          <template #heading>Facebook Livestream Link</template>
        </LiveVideoComponent>
      </div>
    </div>
  </TemplateContainer>

</template>

<style scoped>
  .glow{
    background-color: rgb(40, 107, 174, 50);
    backdrop-filter: blur(40px);
  }

  .hero {
    position: relative;
    padding-top: 7.5rem;
    background-image: linear-gradient(rgba(66, 103, 178, 0.8), rgba(66, 103, 178, 0.8)), url('../assets/images/Hero-Bg.png');
    background-size: cover;
    background-position: center;
  }

  .navbar{
    z-index: 3;
  }

  .company-logo,
  .company-header,
  .info,
  .view-more-scroller {
    position: relative;
    z-index: 1; /* Ensure the text is above the background image */
  }
  .info{
    padding-bottom: 10rem;
  }

  .company-logo {
    max-width: 15rem;
  }

  .nav-container{
      min-height: 100px;
      z-index: 99;
  }
    
  .router-link-active{
      color: var(--secondary-color) !important;
      font-weight: 700;
  }

  .carousel {
    margin-top: 8rem;
    margin-bottom: 5rem;
  }

  .carousel .carousel-inner img{
    max-height: 22rem;
  }

  .carousel-indicators {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  list-style: none;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--white-font);
  margin: 0 5px;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: var(--secondary-color); /* Active indicator color */
}

</style>