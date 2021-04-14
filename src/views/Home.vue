<template>
    <div id="content">
        <div class="home">
            <div class="home-content">
                Explore Homes
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style scoped>
.home {
    position: relative;
    Width: 100%;
    max-width:768px;
    height:400px;
    margin-bottom:40px;
    background-image: url("../assets/airbnb1.png");
    background-size: cover;
    background-position: top;
    border-radius: 20px;
    overflow: hidden;

}
/* #home-content{
    position: absolute;
    left: 20px;
    bottom: 20px;
    width: 210px;
    height: 50px;
    padding: 0 0 0 20px;
    background-color: #111;
    color: #efefef;
    font-size: 2em;
    cursor: pointer;
} */

i {
    font-size: 1.6rem;
}

#content .btn{
    position:absolute;
    top: 50%;
    left:70%;
    transform:translate(-50%, -50%);
}
#img{
    height: auto;
    width: 80%;
    height: 80%;

}
</style>