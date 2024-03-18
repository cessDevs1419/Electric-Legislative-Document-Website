<template>
    <nav class="navbar navbar-expand-xl bg-body-tertiary  p-0 " data-bs-theme="dark">
        <div class="nav-container container-fluid primary-bg py-4">
          	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle navigation">
            	<span class="navbar-toggler-icon"></span>
          	</button>
          	<div class="collapse navbar-collapse py-2" id="navItems">
				<ul class="navbar-nav me-auto mb-2 text-white mb-lg-0 justify-content-center w-100">
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
					<li class="nav-item dropdown-center mx-1" data-bs-theme="light">
						<a class="nav-link dropdown-toggle text-white" class-active="active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Settings
						</a>
						<ul class="dropdown-menu rounded-0">
							<!-- <li class="">
								<router-link  class="dropdown-item my-2 d-flex align-items-center " to="/reset-password">
									 <i class="bi bi-arrow-repeat me-3"></i> 
									 <p class="m-0">
										Change Password
									 </p>
								</router-link>
							</li> -->
							<li class="d-flex align-items-center cursor-pointer" @click="logout">
								<p  class="dropdown-item my-2 d-flex align-items-center " to="/reset-password">
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
		methods: {
			async logout() {
                try {

                    await PublicUserApiService.logout().then(items => {
						router.push('/login');
                    })
                    .catch(error => {
                        console.log(error)
                    });

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