<template>
    <nav class="navbar navbar-expand-xl bg-body-tertiary  p-0 " data-bs-theme="dark">
        <div class="nav-container container-fluid primary-bg py-4">
          	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle navigation">
            	<span class="navbar-toggler-icon"></span>
          	</button>
          	<div class="collapse navbar-collapse d-flex justify-content-between py-2" id="navItems">
				<ul class="navbar-nav me-auto w-100 mb-2 text-white mb-lg-0 justify-content-center ">
					<li class="nav-item mx-1">
						<router-link  class="nav-link text-white" to="/">Home</router-link>
					</li>
					<li class="nav-item dropdown mx-1 " data-bs-theme="light">
						<a class="nav-link dropdown-toggle text-white" class-active="active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<router-link class="text-white text-decoration-none" to="/about">About Us</router-link>
						</a>
						<ul class="dropdown-menu rounded-0">
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
						<ul class="dropdown-menu rounded-0 ">
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
					<li class="nav-item dropdown-center mx-1" data-bs-theme="light"  v-if="authToken" >
						<div class="d-flex align-items-center" class-active="active" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
							<img class="rounded-circle h-100 w-100" src="" alt="" >
							<a class="nav-link dropdown-toggle text-white"  >
								Jeric Manalo
							</a>
						</div>
						<ul class="dropdown-menu rounded-0">
							<li class="d-flex align-items-center cursor-pointer">
								<router-link class="dropdown-item my-2 d-flex align-items-center " to="/setup/profile-setup">
									<i class="bi bi-gear me-3"></i>
									<p class="m-0">
										Profile Setup
									</p>
								</router-link>
							</li>
							<li class="d-flex align-items-center cursor-pointer">
								<router-link  class="dropdown-item my-2 d-flex align-items-center " to="/setup/change-password">
									<i class="bi bi-arrow-repeat me-3"></i>
									<p class="m-0">
										Password Reset
									</p>
								</router-link>
							</li>
							<li class="d-flex align-items-center cursor-pointer" @click="logout">
								<p  class="dropdown-item my-2 d-flex align-items-center " >
									<i class="bi bi-box-arrow-left me-3"></i>
									<p class="m-0">
										Logout
									</p>
								</p>
							</li>
						</ul>	
					</li>
				</ul>
        	</div>
        </div>
    </nav>
</template>

<script>
    import PublicUserApiService from '@/services/PublicUserApiService';
    import router from '@/router';

	export default {
		data () {
			return {
				authToken: PublicUserApiService.getAuthToken()
			}
		},
		methods: {
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
		},

	}
</script>
<style scoped>
	.nav-container{
		min-height: 100px;
	}
	.router-link-active{
		color: var(--secondary-color) !important;
		font-weight: 700;
	}

</style>