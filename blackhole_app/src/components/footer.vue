<template>
    <div>
        <div class="footer">
            <img :src="home" alt="" class="logo" @click="jumphome"/>
            <img :src="blackhole" alt="" class="logo blackhole" @click="jumpblackhole"/>
            <img :src="my" alt="" class="logo" @click="jumpmy"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                home: "../../web/assets/img/home.png",
                blackhole: '../../web/assets/img/blackhole.png',
                my: "../../web/assets/img/head.png",
            }
        },
        methods:{
            jumphome() {
                if (this.where != 'home') {
                    this.$router.push('/')
                }
            },
            jumpblackhole() {
                if (this.where != 'blackhole') {
                    this.$router.push('/blackhole')
                }
            },
            jumpmy() {
                if (this.where != 'my') {
                    this.$router.push('/my')
                }
            }
        },
        created() {

        },
        props:{
            where:{
                default:'home'
            }
        }

    }
</script>

<style scoped>
    .footer {
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgba(200, 200, 200, 0.07);
        width: 100%;
        height: 100px;
        border-top: 0.5px solid rgba(0, 0, 0, 0.2);
        padding: 0 20px;
        z-index: 200;
    }

    .logo {
        width: 80px;
        height: 80px;
        margin-top: 10px;
    }


</style>