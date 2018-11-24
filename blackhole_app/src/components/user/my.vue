<template>
    <div>
        <header headmsg="我的"/>
        <text @click="chooseLogin">登陆/注册</text>
        <transition name="fade">
            <div v-if="chooselogin" class="shadow" @click="chooseLogin">
                <div class="chooselogin" @click.stop>
                    <div>
                        <input type="text" placeholder="请输入账号" class="logininput" v-model="username">
                    </div>
                    <div>
                        <input type="password" placeholder="请输入密码" class="logininput" v-model="password">
                    </div>
                    <div>
                        <button @click="login">确认登陆</button>
                    </div>
                </div>
            </div>
        </transition>
        <footer where="my"/>
    </div>
</template>

<script>
    var stream = weex.requireModule('stream');
    export default {
        name: "",
        data() {
            return {
                chooselogin: false,
                username: null,
                password: null,
            }
        },
        methods: {
            login() {
                if (this.username != null && this.password != null) {
                    stream.fetch({
                        method: 'GET',
                        url: 'http://127.0.0.1:8000/api/user/login?username='+ this.username +'&password='+ this.password +'',
                        type: 'text',
                    }, function (resp) {
                        console.log(resp.data)
                    })
                } else {
                    alert('账号或密码为空')
                }
            },
            chooseLogin() {
                this.chooselogin = !this.chooselogin
            },
        }
    }
</script>

<style scoped>
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

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    .chooselogin {
        height: 25%;
        width: 80%;
        position: fixed;
        top: 30%;
        left: 10%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        padding-top: 5%;
        border-radius: 10px;
        background-color: white;
    }

    .logininput {

    }
</style>