<template>
    <div id="navigation">
        <ul>
            <li><router-link to="/">Airbnb</router-link></li>
            <li><router-link to="/viewListing">View Listing</router-link></li>
            <li><router-link to="/postListing">Post Listing</router-link></li>
            <li><router-link to="/profile">Profile</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
            <li><router-link to="/signin">Sign In</router-link></li> 
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
    }
</script>

<style scoped>

</style>