<template>
  <div class="footer-container px-5">
    <div class="container-fluid">
      <div class="footer-info row py-5">
        <div class="col">
          <p class="company-header">
            SANGGUNIANG PANLUNGSOD NG <span>QUEZON PROVINCE</span>
          </p>
          <p class="info">
            Lorem ipsum dolor sit amet consectetur. Ornare id orci id eget sollicitudin in. Penatibus pellentesque interdum sed ut ultrices vel sit quis. Mi nunc bibendum cursus pharetra ut. 
          </p>
          <div class="socials">
            <i class="icon bi bi-facebook mr-2" style="font-size: 34px;"></i><i class="icon bi bi-instagram" style="font-size: 34px;"></i><i class="icon bi bi-twitter-x mr-2" style="font-size: 34px;"></i>
          </div>
        </div>
        <div class="col">
          <p class="footer-header">
            About Us
          </p>
          <ul class="about-links">
            <li>
              <a href="/">Vision, Mission, Quality Policy & Mandate</a>
            </li>
            <li>
              <a href="/">The 20th Sanggunian Panlungsod Members</a>
            </li>
            <li>
              <a href="">Organizational Structure</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <p class="footer-header">
            Hotlines
          </p>
          <p class="hotlines">
            CDRRMO: 552-3939 / 552-8861 (TO 62)
          </p>
          <p class="hotlines">
            AMBULANCE: 0943-461-4548
          </p>
          <p class="hotlines">
            FIRE DEPARTMENT: 552-1160
          </p>
          <p class="hotlines">
            PNP GENSAN: 0927-766-7822 
          </p>
        </div>
        <div class="col">
          <p class="footer-header">
            Locate Us
          </p>
          <p class="location">
            456C+WQC, Pres. Sergio Osmeña Avenue, General Santos City, South Cotabato
          </p>
          <a href="/" class="view-map">View Map</a>
        </div>
      </div>
    </div>
    <hr>
    <p class="copyright text-center py-2">
      Copyright © 2022 SANGGUNIANG PANLUNGSOD OF QUEZON. All Rights Reserved.
    </p>
    
  </div>
</template>

<script>
</script>

<style scoped>

.footer-container {
  background-color: var(--primary-color);
  color: var(--white-font);
  padding: 20px 0;
}

.footer-container a:hover{
  color: var(--secondary-color);
}

.company-header,
.footer-header {
  font-weight: 600;
  font-size: 18px;
}

.company-header span {
  color: var(--secondary-color);
  font-weight: 600;
}

.socials .icon{
  margin-right: 1rem;
}

.about-links {
  list-style-type: none; 
  padding-left: 0;
}

.view-map {
  color: var(--white-font);
  text-align: right;
}

.about-links a {
  text-decoration: none;
  color: var(--white-font);
}

.footer-header {
  font-size: 24px;
}

.hotlines {
  margin-bottom: 5px;
}

</style>
