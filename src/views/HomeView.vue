<script setup>
import TemplateContainer from '@/components/TemplateContainer.vue';
import LiveVideoComponent from '@/components/LiveVideoComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import SidebarListComponentVue from '@/components/SidebarListComponent.vue';
import PaginationListComponentVue from '@/components/PaginationListComponent.vue';
</script>


<template>
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-xl position-fixed  w-100  p-0 " data-bs-theme="dark">
    <div class="navbar-container container-fluid py-4 " :class="{ 'primary-bg': isScrolled }">
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
                  <router-link  class="dropdown-item my-2" to="/legislative/resolution/ordinance-esubmission/sign-in">Resolution/Ordinance e-Submission</router-link>
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

  <!-- Hero Section -->
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
            <a class="view-more-scroller" href="#carousel">
              <h5 class="text-white">
                View More
              </h5>
              <i class="bi bi-arrow-down text-white" style="font-size: 4rem;"></i>
            </a>
          </div>
        </div>
        <div class="overlay"></div>
  </div>

  <!-- Carousel -->
  <TemplateContainer id="carousel">
    <div id="CardCarousel" class="carousel slide" data-bs-ride="carousel">

      <div class="slide-indicator">
        <ol class="carousel-indicators">
          <li data-bs-target="#CardCarousel" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#CardCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#CardCarousel" data-bs-slide-to="2"></li>
        </ol>
      </div>
      
      <div class="carousel-inner" >
        <div class="carousel-item active" data-bs-interval="5000">
          <div class="row">
            <div class="col">
              <h6>
                What's Happening
              </h6>
              <h4>
                Lorem ipsum dolor sit amet consectetur. Rhoncus velit imperdiet ut congue commodo a dui sit massa.
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.
              </p>

              <div class="card-footer px-0 bg-transparent">
                <router-link  class="nav-link tertiary-font text-primary fw-semibold m-0 text-decoration-none mb" to="/order-of-business">Learn More</router-link>
                <div class="underline"></div>
              </div>
            </div>
            <div class="col">
              <img src="../assets/images/hero.png" class="d-block w-100" alt="Slide 1">
            </div>
          </div>
        </div>

        <div class="carousel-item active" data-bs-interval="2000">
          <div class="row">
            <div class="col">
              <h6>
                What's Happening
              </h6>
              <h4>
                Lorem ipsum dolor sit amet consectetur. Rhoncus velit imperdiet ut congue commodo a dui sit massa.
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.
              </p>

              <div class="card-footer px-0 bg-transparent">
                <router-link  class="nav-link tertiary-font text-primary fw-semibold m-0 text-decoration-none mb" to="/order-of-business">Learn More</router-link>
                <div class="underline"></div>
              </div>
            </div>
            <div class="col">
              <img src="../assets/images/hero.png" class="d-block w-100" alt="Slide 1">
            </div>
          </div>
        </div>

        <div class="carousel-item active" data-bs-interval="2000">
          <div class="row">
            <div class="col">
              <h6>
                What's Happening
              </h6>
              <h4>
                Lorem ipsum dolor sit amet consectetur. Rhoncus velit imperdiet ut congue commodo a dui sit massa.
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.
              </p>

              <div class="card-footer px-0 bg-transparent">
                <router-link  class="nav-link tertiary-font text-primary fw-semibold m-0 text-decoration-none mb" to="/order-of-business">Learn More</router-link>
                <div class="underline"></div>
              </div>
            </div>
            <div class="col">
              <img src="../assets/images/hero.png" class="d-block w-100" alt="Slide 1">
            </div>
          </div>
        </div>
      </div>

    </div>
  </TemplateContainer>
  
  <!-- Videos / Link -->
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

  <!-- News -->
  <TemplateContainer>
	<div class="row g-3 my-3">
		<div class="col-lg-7">
			<PaginationListComponentVue 
				title="Recent Order of Business"
				:items="items" 
				:itemsPerPage="4"
				:listType="'orderList'"
			>

			</PaginationListComponentVue>
			<div class="my-5"></div>
			<PaginationListComponentVue 
				title="Latest News"
				:items="items" 
				:itemsPerPage="4"
				:listType="'newsList'"
			>

			</PaginationListComponentVue>
		</div>
		<div class="col-lg-5">
        <!-- Sidebar -->
        <SidebarListComponentVue
          :items="names"
          :listType="'calendar'"
        >
            <template #heading>Calendar of Events</template>
        </SidebarListComponentVue>
        
        <SidebarListComponentVue
          :items="names"
          :listType="'membersList'"
        >
            <template #heading>The 20th SP Members Facebook Page</template>
    
        </SidebarListComponentVue>

        <SidebarListComponentVue
          :items="names"
          :listType="'hotlineList'"
        >
            <template #heading>Quezon Province Hotlines</template>
    
        </SidebarListComponentVue>

        <SidebarListComponentVue
        
            :listType="'municipalityList'"
        >
              <template #heading> Municipalities of Quezon</template>

        </SidebarListComponentVue>
		</div>
	</div>
  </TemplateContainer>

</template>

<script>

  export default {
    components: {
      PaginationListComponentVue
    },
    data() {
      return {
      isScrolled: false,
      items: [
                  {
                  title: 'Order Business – 69th Regular Session of the 20th Sangguniang Panlungsod of Quezon Province',
                  description: 'Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                  date: 'February 15, 2024',
                  link: 'http://example.com',
                  linkTitle: 'Sample 1'
                  },
                  {
                  title: 'Another Dynamic Item2',
                  description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                  date: 'February 20, 2024',
                  link: 'http://example.com/another',
                  linkTitle: 'Sample 2'
                  },
                  {
                  title: 'Another Dynamic Item3',
                  description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                  date: 'February 20, 2024',
                  link: 'http://example.com/another',
                  linkTitle: 'Sample 2'
                  },
                  {
                  title: 'Another Dynamic Item4',
                  description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                  date: 'February 20, 2024',
                  link: 'http://example.com/another',
                  linkTitle: 'Sample 2'
                  },
                  {
                  title: 'Another Dynamic Item5',
                  description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                  date: 'February 20, 2024',
                  link: 'http://example.com/another',
                  linkTitle: 'Sample 2'
                  },
                  {
                  title: 'Another Dynamic Item6',
                  description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                  date: 'February 20, 2024',
                  link: 'http://example.com/another',
                  linkTitle: 'Sample 2'
                  },
                  {
                  title: 'Another Dynamic Item8',
                  description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                  date: 'February 20, 2024',
                  link: 'http://example.com/another',
                  linkTitle: 'Sample 2'
                  }
                  // Add more items as needed
              ],
      names: [
        {
          memberName: 'Jerome',
          link: 'http://example.com/another'
        },
        {
          memberName: 'Jerome1',
          link: 'http://example.com/another'
        },
        {
          memberName: 'Jerome2',
          link: 'http://example.com/another'
        },
        {
          memberName: 'Jerome3',
          link: 'http://example.com/another'
        }
      ],
      
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {

        this.isScrolled = window.scrollY > 10; 
      }
    }
  };
</script>

<style scoped>

.navbar-container {
  transition: .3s ease-in-out;
}
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
    left: 40%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    list-style: none;
  }

.carousel-indicators li {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--gray-divider);
  margin: 0 5px;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: var(--secondary-color); /* Active indicator color */
}

.underline{
        max-width: 5.8em;
        border-bottom: 2px solid var(--primary-color);
}

@media screen and (max-width: 1199px){
  .navbar-container{
    background-color: var(--primary-color);
  }
}
</style>