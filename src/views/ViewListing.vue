<template>
    <div id="listing">
        <section class="places">
            <Place 
                v-for="place in places"
                :key="place.id"
                :place="place"
            />
        </section>
    </div>
</template>

<script>
import Place from '../components/Place';
    export default {
        name: 'ViewListing',
        components: {
            Place
        },
        data() {
            return {
                places: [
                    {
                    name: 'Rosa apartment near beach',
                    location: 'Taghazout, Morocco',
                    propertyType: 'Entire apartment',
                    id: '1',
                    src: require('../assets/home01.png')
                    },
                    {
                    name: 'Private isolated forest',
                    location: 'Florence, Ontario ',
                    propertyType: 'Entire apartment',
                    id: '2',
                    src: require('../assets/home02.png')
                    },
                    {
                    name: 'Mountainside retreat',
                    location: 'Topanga, California',
                    propertyType: 'Entire apartment',
                    id: '3',
                    src: require('../assets/home03.png')
                    },
                ]
            }
        }
    }
</script>

<style scoped>
*{
    box-sizing: border-box;
}

body {
    font-family: 'montseratt', sans-serif;
}

listing {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}

.places {
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
}
</style>