<script setup>
</script>

<template>
<div class="profile-card-container">
    <div class="profile-card">
        <img src="@/assets/avatar.jpg" alt="Avatar" class="profile-card--img">
        <div class="profile-card--content">
            <h1>Anh T. Tra</h1>
            <h2>I am a full-stack AI Engineer</h2>
            <div class="profile-card--social-links">
                <a href="https://www.linkedin.com/in/anhttra" target="_blank" class="profile-card--social-link">
                    <img class="img-icon" src="@/assets/clinkedin.svg" alt="LinkedIn">
                </a>
                <a href="https://www.facebook.com/trunganh0111" target="_blank" class="profile-card--social-link">
                    <img class="img-icon" src="@/assets/cfacebook.svg" alt="Facebook">
                </a>
                <a href="https://github.com/anhttra" target="_blank" class="profile-card--social-link">
                    <img class="img-icon" src="@/assets/cgithub.svg" alt="Github">
                </a>
            </div>
        </div>
    </div>
    
</div>
</template>

<style>
.img-icon {
    filter: invert(85%) sepia(89%) saturate(44%) hue-rotate(22deg) brightness(110%) contrast(73%);
}

.profile-card-container{
    /* display: flex; */
    /* background-color: aqua; */
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    font-family: monospace;
}
.profile-card{
    margin: 2rem auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
}
.profile-card--img {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
}
.profile-card--content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}
.profile-card--content h1 {
    margin: 0;
    font-weight: normal;
    font-size: 1.5rem;
}
.profile-card--content h2 {
    margin: 0;
    font-weight: normal;
    font-size: 1.2rem;
    margin: 0 auto;
    max-width: 400px;
}
.profile-card--social-links {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.profile-card--social-link img {
    width: 3rem;
    height: 3rem;
}


@media (max-width: 700px) {
  .profile-card {
    flex-direction: column;
    align-items: center;
  }
  .profile-card--content {
    align-items: center;
  }
  .profile-card--content h1 {
    font-size: 1.2rem;
  }
  .profile-card--content h2 {
    font-size: 1rem;
  }
}
</style>