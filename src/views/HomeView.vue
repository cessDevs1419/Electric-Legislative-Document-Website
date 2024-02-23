<script setup>
import TemplateContainer from '@/components/TemplateContainer.vue';
import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <nav class="navbar navbar-expand-xl bg-body-tertiary position-fixed w-100 p-0 " data-bs-theme="dark">
    <div class="nav-container container-fluid primary-bg py-4">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse py-2" id="navItems">
        <ul class="navbar-nav me-auto mb-2 text-white mb-lg-0 justify-content-center w-100">
          <li class="nav-item mx-1">
            <router-link  class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown mx-1">
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
          <li class="nav-item dropdown mx-1">
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
          <li class="nav-item dropdown mx-1">
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
  <TemplateContainer>
      <div class="hero"></div>
  </TemplateContainer>
</template>

<style scoped>

</style>