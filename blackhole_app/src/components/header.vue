<template>
    <div>
        <div class="header" >
            <img :src="headimg" alt="" class="logo circle"/>
            <text class="headmsg">{{headmsg}}</text>
            <img :src="add" alt="" class="logo" @click="chooseAdd"/>
        </div>
        <transition name="fade">
            <div class="shadow" v-if="chooseadd" @click="chooseAdd">
                <div class="chooseadd" @click.stop>
                    <div>
                        <img :src="articleimg" alt="" class="chooselogo"/>
                        <text class="textcenter">文章</text>
                    </div>
                    <div>
                        <img :src="blackhole" alt="" class="chooselogo"/>
                        <text class="textcenter">黑洞</text>
                    </div>
                </div>
            </div>
        </transition>
        <div v-for="qqq in qqqs">
            <text>水果：{{qqq.name}}</text>
            <text>价格：{{qqq.price}}</text>
        </div>
        <div class="margin"></div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                headimg: "../../web/assets/img/woman.jpg",
                blackhole: '../../web/assets/img/blackhole.png',
                add: "../../web/assets/img/add.png",
                chooseadd: false,
                articleimg:"../../web/assets/img/article.png",
                qqqs: [
                    {
                        name:'苹果',
                        price:2
                    },
                    {
                        name:'香蕉',
                        price:4
                    },
                    {
                        name:'菠萝',
                        price:10
                    }
                ]
            }
        },
        methods: {
            chooseAdd() {
                this.chooseadd = !this.chooseadd
            },
        },
        props: {
            headmsg:{
                default:'首页'
            }
        },
        created() {
            console.log(6666)
        }
    }
</script>

<style scoped>
    .headmsg {
        line-height: 100px;
        font-size: 39px;
        color: rgba(0, 0, 0, 0.6);
    }

    .margin {
        margin-top: 100px;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgba(200, 200, 200, 0.07);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
        padding: 0 20px;
        z-index: 200;
    }

    .logo {
        width: 80px;
        height: 80px;
        margin-top: 10px;
    }

    .circle {
        border: 1px solid black;
        border-radius: 100%;
    }

    .chooseadd {
        height: 15%;
        width: 60%;
        position: fixed;
        top: 20%;
        left: 20%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-top: 5%;
        border-radius: 10px;
        background-color: white;
    }

    .chooselogo {
        width: 80px;
        height: 80px;
    }

    .textcenter {
        text-align: center;
    }

    .shadow {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 100;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>