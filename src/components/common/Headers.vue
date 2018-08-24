<template>
    <div class="headers">
        <div class="headers-top">
            <div class="picture">
                <router-link  :to="{name: 'Home'}">
                    <img src="../../assets/images/logo.png"/>
                </router-link>
            </div>
            <div class="menu" @click="show">
                <img src="../../assets/images/menu.png"/>
            </div>
        </div>
        <div class="menu-hide" v-show="menuShow">
            <ul class="menu-left">   
                <hr>
                <router-link :to="{name: 'Home'}" tag="li">
                    <p @click="show">首页</p>
                </router-link>
                <router-link :to="{name: 'Introduce'}" tag="li">
                    <p @click="show">公司介绍</p>
                </router-link>
                <router-link :to="{}" tag="li" class="sCase">
                    <p @click="showCase">案例展示</p>
                </router-link>
                <router-link :to="{name: 'News'}" tag="li">
                    <p @click="show">公司新闻</p>
                </router-link>
                <router-link :to="{name: 'Notice'}" tag="li">
                    <p @click="show">公告</p>
                </router-link>            
            </ul>
            <ul class="menu-right" v-show="caseShow" @click="show">
                <hr>
                <router-link :to="{name: 'Unlayer'}" tag="li">
                    <p>高效安全接入平台</p>
                </router-link>
                <router-link :to="{}" tag="li">
                    <p>PaaS</p>
                </router-link>
                <router-link :to="{name: 'Layer'}" tag="li">
                    <p>合作分成业务解决方案</p>
                </router-link>
                <router-link :to="{name: 'Government'}" tag="li">
                    <p>政企项目管理解决方案</p>
                </router-link>
                <router-link :to="{name: 'Canal'}" tag="li">
                    <p>渠道支撑解决方案</p>
                </router-link>
                <router-link :to="{name: 'Onetouch'}" tag="li">
                    <p>智能终端一键式解决方案</p>
                </router-link>
            </ul>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'headers',
    data () {
        return {
            menuShow: false,
            caseShow: false
        }
    },
    methods: {
        show () {
            this.menuShow = !this.menuShow
        },
        showCase () {
            this.caseShow = !this.caseShow
        }
    }
}
</script>

<style lang="scss" scoped>
.headers-top {
    width: 85.09%;
    height: 160px;
    margin: 0 auto;
    .picture {
        margin-top: 75px;
        float: left;
        width: 29.706%;
        img {
            width: 100%;
        }
    }
    .menu {
        margin-top: 75px;
        float: right;
        cursor: pointer;
        width: 7.834%;
        img {
            width: 100%;
        }
    }    
}
.menu-hide {
    position: absolute;  
    z-index: 999;
    width: 100%;
    p {
        margin: 0;
        padding-left: 15%;
        height: 98px;
        font-size: 38px;
        line-height: 98px;
        background-color: white;
        cursor: pointer;
    }
    hr {
        margin: 0;
        padding: 0;
    }
    .menu-left {
        float: left;
        width: 36%;
        box-shadow: 0px 12px 38px 0px rgba(81, 88, 94, 0.19);
    }
    .menu-right {
        float: right;
        width: 49%;
        box-shadow: 0px 12px 38px 0px rgba(81, 88, 94, 0.19);
    }
}

</style>
