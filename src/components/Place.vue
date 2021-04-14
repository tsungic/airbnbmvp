<template>
    <div class ="place">
        <div class="place-inner">
            <div class="place-text-wrap">
                <h2 class="name">{{ place.name}}</h2>
            </div>
            <div class="place-image-wrap">
                <img :src="place.src" class="image" />
            </div>
            <div class="place-detail">
                <h2>{{ place.location}}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="submit">
            <button @click="getPlace()">View</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'place',
        props: ['place'],
        data (){
            return {
                form:{
                    reservationid:"",
                    message:"",
                    room:null,
                    email:''
                },
                rooms:[
                    {text:"Select One", value:null},
                    "Single",
                    "Double",
                    "Famiily",
                    "Deluxe"
                ],
                color:"",
                title:"",
                show:false,
                reservation: {
                    id:"",
                    name:"",
                    email:"",
                    day:"",
                    price:"",
                }
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
*{ 
    margin:0;
}
.place {
    flex: 1 1 33.333%;
    width: 100%;
    padding: 25px;
}

.place-inner {
    position: relative;
    padding: 25px;
    box-shadow: 0px 0px 5px;
}

.place-image-wrap .image {
    width: 100;
}
</style>