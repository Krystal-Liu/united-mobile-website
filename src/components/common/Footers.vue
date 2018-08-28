<template>
    <div class="footers">
        <div class="words-logo">
            <div class="words">
                <p>电话：023-62876467</p>
                <p>邮箱：business@un-net.com</p>
                <p>地址：重庆市南岸区南山街道崇文路28号37栋</p>
                <div class="logo">
                    <img src="../../assets/images/logo3.png"/>
                </div>
            </div>
        </div>
        <p class="copy">Copyright © 2017重庆邮莱特科技有限公司 版权所有  <span class="badge ignore"></span> 渝ICP备16009389号-1</p>
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
        // overflow: hidden;
        width: 85.18%;
        margin: 0 auto;
        .words {
            // float: left;
            position: relative;
            // margin-top: -10%;
            p {
                margin-top: 3%;
            }
            .logo {
                position: absolute;
                width: 28.518%;
                top: 0;
                right: 0;
                // padding-top: 2%;
                img {
                    width:100%;
                }
            }
        }
        
    }
    .copy {
        margin-left: 3%;
        margin-top: 10%;
        .ignore {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-image: url('../../assets/images/badge.png');
            background-size: 100%;
        }
    }
    
</style>
