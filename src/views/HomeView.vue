<script setup>
  import TemplateContainer from '@/components/TemplateContainer.vue';
  import LiveVideoComponent from '@/components/LiveVideoComponent.vue';
  import SidebarListComponentVue from '@/components/SidebarListComponent.vue';
  import PaginationListComponentVue from '@/components/PaginationListComponent.vue';
  import sample_news_img from '@/assets/images/sample_news_img.jpg';
  import sample_vid from '@/assets/images/sample_vid.mp4';
  import OrderofBusinessApiService from '@/services/OrderofBusinessApiService';
  import PublicUserApiService from '@/services/PublicUserApiService';
  import router from '@/router';
  import NewsApiService from '@/services/NewsApiService';
</script>
<script>

  export default {
    components: {
      PaginationListComponentVue
    },
    data() {
      return {
        isScrolled: false,
        authToken: PublicUserApiService.getAuthToken(),
        OrderOfBusiness: [],
        News: [],
        user: {},
        name: ''
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
      },
      viewMore() {
        const carouselSection = document.getElementById('carousel');
        if (carouselSection) {
          carouselSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
      fetchData(){
        OrderofBusinessApiService.fetchOrderOfBusiness().then(item => {
          this.OrderOfBusiness = []
          this.OrderOfBusiness.push(...item);
        })
        .catch(error => {
          console.error('', error);
        });

				if(PublicUserApiService.getAuthToken()){
						PublicUserApiService.getAuthUser().then(items => {
							this.user = items
							this.name = this.capitalizeFirstLetter(items.full_name)
						}).catch(error => {
							console.log(error)
						})
				}

        NewsApiService.fetch().then(item => {
          this.News = []
          this.News.push(...item);
        })
        .catch(error => {
          console.error('', error);
        });
      }, 

      async logout() {
        try {

          await PublicUserApiService.logout();
					
					localStorage.removeItem('authToken');
        	localStorage.removeItem('authTime');
					router.push('/login');

          } catch (error) {
          console.error('logout failed:', error);
          }
      },

			capitalizeFirstLetter(string) {
				return string.replace(/\b\w/g, function(char) {
					return char.toUpperCase();
				});
			}

    },
    created() {
      this.fetchData(); 
    }
  };
</script>

<template >
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
            <li class="nav-item mx-1"   v-if="authToken" >
              <button class="border-0 btn btn-sidebar secondary-bg d-flex justify-content-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i class="bi bi-person-fill me-2"></i>
                <p class="text-truncate m-0">
                  {{ name }}
                </p>
              </button>
            </li>
          </ul>
        </div>
    </div>
  </nav>
	<div class="offcanvas-sm-wd offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
		<div class="offcanvas-header text-center mx-auto mt-3 mb-0 pb-0 pt-5 ">
			<h5 class="text-center" >{{ name }}</h5>
		</div>
		<div class="position-relative offcanvas-body h-100 mt-0 py-0 px-4 mx-2">
			<hr class="divider">
			<ul class="w-100 rounded-0 px-0"> 
				<li class="d-flex align-items-center cursor-pointer" data-bs-dismiss="offcanvas" aria-label="Close">
					<router-link class="dropdown-item my-2 d-flex align-items-center " to="/setup/profile-setup">
						<i class="bi bi-gear me-3"></i>
						<p class="m-0">
							Profile Setup
						</p>
					</router-link>
				</li>
				<li class="d-flex align-items-center cursor-pointer" data-bs-dismiss="offcanvas" aria-label="Close">
					<router-link  class="dropdown-item my-2 d-flex align-items-center " to="/setup/change-password">
						<i class="bi bi-lock me-3"></i>
							<p class="m-0">
								Password Reset
							</p>
					</router-link>
				</li>
			</ul>
      <div class="position-absolute log-out mb-3 bottom-0 d-flex align-items-center cursor-pointer" @click="logout" data-bs-dismiss="offcanvas" aria-label="Close">
					<p  class="dropdown-item my-2 d-flex align-items-center " >
						<i class="bi bi-box-arrow-left me-3"></i>
						<p class="m-0">
							Logout
						</p>
					</p>
			</div>
		</div>
	</div>
  <!-- Hero Section -->
  <div class="hero w-100 ">
        <div class="nav-container container-fluid d-flex align-items-center text-center justify-content-center">
          <div class="row w-100 m-auto h-100 align-item-center justify-content-center"  >
              <!-- <i class="bi bi-4-circle" style="font-size: 15rem; vertical-align: middle; max-height: 20rem;"></i> -->
              <img class="company-logo mx-auto mb-2" src="../assets/images/circle.png" alt="" srcset="">
              <h1 class="company-header text-white fw-bold">
                THE SANGGUNIANG PANLUNGSOD OF QUEZON
              </h1>
              <h3 class="info text-white">
                Regular Session Livestreaming at 9:00am every Tuesday
              </h3>
            <a class="view-more-scroller cursor-pointer text-decoration-none" @click="viewMore">
              <h5 class="text-white ">
                View More
              </h5>
              <i class="bi bi-arrow-down text-white" style="font-size: 4rem;"></i>
            </a>
          </div>
        </div>
        <div class="overlay"></div>
  </div>

  <div class="nav-spacer w-100 border" id="carousel" >
      <!-- Content goes here -->
  </div>

  <!-- Carousel -->
  <TemplateContainer>

  <div id="CardCarousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators px-2 px-md-0 w-100 position-relative mb-4 justify-content-start m-auto">
          <li data-bs-target="#CardCarousel" data-bs-slide-to="0" class="active ms-0"></li>
          <li data-bs-target="#CardCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#CardCarousel" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner px-2 px-md-0">
      <div class="carousel-item active">
        <div class="row">
          <div class="col-lg-6 ">
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
              <router-link class="nav-link tertiary-font text-primary fw-semibold m-0 text-decoration-none mb" to="/order-of-business">Learn More</router-link>
              <div class="underline"></div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../assets/images/hero.png" class="d-block w-100" alt="Slide 1">
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row">
          <div class="col-lg-6">
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
              <router-link class="nav-link tertiary-font text-primary fw-semibold m-0 text-decoration-none mb" to="/order-of-business">Learn More</router-link>
              <div class="underline"></div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../assets/images/hero.png" class="d-block w-100" alt="Slide 2">
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row">
          <div class="col-lg-6">
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
              <router-link class="nav-link tertiary-font text-primary fw-semibold m-0 text-decoration-none mb" to="/order-of-business">Learn More</router-link>
              <div class="underline"></div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../assets/images/hero.png" class="d-block w-100" alt="Slide 3">
          </div>
        </div>
      </div>
    </div>

  </div>
</TemplateContainer>

  
  <!-- Videos / Link -->
  <TemplateContainer>
    <div class="row w-100 m-auto g-3 my-3">
      <div class="col-lg-6">
        <LiveVideoComponent
          :pageLink="'https://www.facebook.com/QuezonGovPh'"
          :videoSrc="sample_vid"
          >
          <template #heading>The 20th Sangguniang Panlungsod Members</template>
        </LiveVideoComponent>
      </div>
      <div class="col-lg-6">
        <LiveVideoComponent
          :pageLink="'https://www.facebook.com/QuezonGovPh'"
          :videoSrc="sample_vid"
          >
          <template #heading>Facebook Livestream Link</template>
        </LiveVideoComponent>
      </div>
    </div>
  </TemplateContainer>

  <!-- News -->
  <TemplateContainer class="mb-5">
    <div class="row w-100 m-auto g-3 my-3">
      <div class="col-lg-7">
        <PaginationListComponentVue 
          title="Recent Order of Business"
          :items="OrderOfBusiness" 
          :itemsPerPage="4"
          :listType="'orderList'"
        >

        </PaginationListComponentVue>

        <div class="my-5"></div>

        <PaginationListComponentVue 
          title="Latest News"
          :items="News" 
          :itemsPerPage="4"
          :listType="'newsList'"
        >

        </PaginationListComponentVue>
      </div>
      <div class="col-lg-5">
          <!-- Sidebar -->
          <SidebarListComponentVue
            :listType="'calendar'"
          >
              <template #heading>Calendar of Events</template>
          </SidebarListComponentVue>
          
          <SidebarListComponentVue
            :listType="'membersList'"
          >
              <template #heading>The 20th SP Members Facebook Page</template>
          </SidebarListComponentVue>

          <SidebarListComponentVue
            :listType="'hotlineList'"
          >
              <template #heading>Quezon Province Hotlines</template>
      
          </SidebarListComponentVue>

      </div>
    </div>
  </TemplateContainer>

</template>



<style scoped>
	.secondary-bg{
		background-color: var(--secondary-color) !important;;
	}
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
    height: 100vh;
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
    /* left: 40%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center; */
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

@media screen and (max-height: 760px) {
    .view-more-scroller{
      margin-top: -5rem;
    }
}

@media screen and (max-height: 812px) {
  .hero {
    height: 100%;
  }
}

</style>