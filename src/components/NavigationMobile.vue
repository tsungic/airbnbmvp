<template>
    <div id="navigation-mobile">
        <ul>
            <li><router-link to="/">Airbnb</router-link></li>
            <li><router-link to="/viewListing">View Listing</router-link></li>
            <li><router-link to="/postListing">Post Listing</router-link></li>
            <li><router-link to="/profile">Profile</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
            <li><router-link to="/signin">Sign In</router-link></li> 
        </ul>
        <div class="social-media">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
    }
</script>

<style scoped>
#navigation-mobile {
    padding:20px 0 0 0;
}

ul {
    list-style: none;
    width: 200px;
    padding-left:40px;
}

li{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
    }

.social-media {
    position: absolute;
    left: 40px;
    bottom: 20px;
}

i {
    margin: 0 20px 0 0;
    font-size: 2rem;
    }

</style>