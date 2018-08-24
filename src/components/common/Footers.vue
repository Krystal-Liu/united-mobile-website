<template>
    <div class="footers">
        <div class="words-logo">
            <div class="logo">
                <img src="../../assets/images/logo3.png"/>
            </div>
            <div class="words">
                <p>电话：023-62876467</p>
                <p>邮箱：business@un-net.com</p>
                <p>地址：重庆市南岸区南山街道崇文路28号37栋2单元4-1号</p>
            </div>
        </div>
        <p class="copy">Copyright © 2017重庆邮莱特科技有限公司 版权所有 渝ICP备16009389号-1</p>
    </div>
</template>

<script>
export default {
    name: 'footers',
}
</script>

<style lang="scss" scoped>
    .footers {
        padding-bottom: 5%;
        background-color: black;
    }
    .hideFooter {
        display: none;
    }
    p {
        color: white;
        font-size: 30px;
    }
    .words-logo {
        padding-top: 60px;
        overflow: hidden;
        width: 85.18%;
        margin: 0 auto;
        .words {
            float: left;
            margin-top: -10%;
            p {
                margin-top: 3%;
            }
        }
        .logo {
            float: right;
            width: 28.518%;
            padding-top: 2%;
            img {
                width:100%;
            }
        }
    }
    .copy {
        margin-left: 3%;
        margin-top: 10%;
    }
</style>
