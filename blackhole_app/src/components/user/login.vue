<template>
    <div class="logindiv">
        <div v-if="loginindex =='1'">
            <div>
                <input type="text" placeholder="请输入账号">
            </div>
            <div>
                <input type="password" placeholder="请输入密码">
            </div>
            <div>
                <button>确认登陆</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                loginindex:1,
            }
        },

    }
</script>

<style scoped>
.logindiv {
    padding-top: 40%;
}

</style>