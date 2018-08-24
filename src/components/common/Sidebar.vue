<template>
    <div class="sidebar">
        <div class="bar">
            <div class="wechat" v-show="barShow" id="barshow">
                <div class="show-we"></div>
            </div>
            <div class="phone" v-show="barShow" id="barshow">
                <div class="show-phone">023-62876467</div>
            </div>
            <div id="back" @click="scrollWindow" v-show="back"></div>
            <div class="shrinkBack" @click="change" v-show="barShow">
                <div class="shrinkShow" @click="hide"></div>
            </div>
            <div class="shrinkBackHide" v-show="shrinkHide && shrinkBackHide" @click="changeShow">
                <div class="shrinkHide"></div>
            </div>
        </div>
    </div>
</template> 
<script>
export default {
    name: 'sidebar',
    data () {
        return {
            back: false,
            barShow: true,
            shrinkHide: false,
            shrinkBackHide: false
        }
    },
    mounted () {
        window.addEventListener('scroll',this.scrollToTop)
    },
    methods: {
        hide: function () {
            this.barShow = !this.barShow
        },
        change: function () {
            this.shrinkHide = !this.shrinkHide,
            this.shrinkBackHide = !this.shrinkBackHide
        },
        changeShow: function () {
            this.shrinkHide = !this.shrinkHide,
            this.shrinkBackHide = !this.shrinkBackHide,
            this.barShow = !this.barShow
        },
        scrollToTop (el) {
            let topBtn = document.getElementById('back');
            let scrollTop = window.clientHeight || document.documentElement.scrollTop 
            || document.body.scrollTop;
            let browserHight = window.outerHeight;
            var content = document.getElementById('content');
            if (scrollTop > browserHight) {
                topBtn.style.display = 'block';
            } else {
                topBtn.style.display = 'none';
            }
        },
        scrollWindow: function () {
            window.scrollTo(0,0)
        }
    },
    destroyed() {
        window.removeEventListener('scroll',this.scrollToTop);
    }
}
</script>
<style scoped>
    .bar {
        position: fixed;
        z-index: 100;
        top: 230px;
        right: 0;
        width: 80px;
        background-color: white;
        cursor: pointer;
        box-shadow: -6.5px 11.3px 29.4px 5.6px 
		rgba(94, 85, 81, 0.2);
    }
    .wechat{
        height: 80px;
        background: url('../../assets/images/we.png') no-repeat;
        background-size: 40px 35px;
        background-position: center;
        border-bottom: 1px solid grey;
    }
    .wechat:hover {
        background: url('../../assets/images/weon.png') no-repeat;
        background-size: 40px 35px;
        background-position: center;
        background-color: black;
    }
    .phone {
        height: 80px;
        background: url('../../assets/images/phone.png') no-repeat;
        background-size: 35px 35px;
        background-position: center;
        border-bottom: 1px solid grey;
    }
    .phone:hover {
        background: url('../../assets/images/phoneon.png') no-repeat;
        background-size: 35px 35px;
        background-position: center;
        background-color: black;
    }
    #back {
        height: 80px;
        background: url('../../assets/images/backpc.png') no-repeat;
        background-size: 35px 35px;
        background-position: center;
        border-bottom: 1px solid grey;
    }
    #back:hover {
        background: url('../../assets/images/backPcOn.png') no-repeat;
        background-size: 35px 35px;
        background-position: center;
        background-color: black;
    }
    .shrinkShow{
        height: 80px;
        width: 80px;
        background: url('../../assets/images/shrink.png') no-repeat;
        background-size: 30px 30px;
        background-position: center;
        margin: 0 auto;
    }
    .shrinkBack:hover{
        background-color: black;
    }
    .shrinkBack:hover .shrinkShow {
        background: url('../../assets/images/shrinkon.png') no-repeat;
        background-size: 30px 30px;
        background-position: center;
    }
    .shrinkHide{
        height: 30px;
        width: 30px;
        background: url('../../assets/images/shrink.png') no-repeat;
        background-size: 30px 30px;
        background-position: center;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);		/* IE 9 */
        -webkit-transform: rotate(45deg);	/* Safari and Chrome */
        -o-transform: rotate(45deg);		/* Opera */
        -moz-transform: rotate(45deg);
    }
    .shrinkBackHide{
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shrinkBackHide:hover {
        background-color: black;
    }
    .shrinkBackHide:hover .shrinkHide{
        background: url('../../assets/images/shrinkon.png') no-repeat;
        background-size: 30px 30px;
        background-position: center;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);		/* IE 9 */
        -webkit-transform: rotate(45deg);	/* Safari and Chrome */
        -o-transform: rotate(45deg);		/* Opera */
        -moz-transform: rotate(45deg);
    }
    /* 浮框图片 */
    .show-we{
        position: fixed;
        top: 230px;
        right: 90px;
        height: 140px;
        width: 140px;
        background: url('../../assets/images/wechat.jpg') no-repeat;
        background-size: 140px 140px;
        background-position: center;
        display: none;
    }
    .wechat:hover .show-we{
        display: block;
    }
    .show-phone{
        position: fixed;
        right: 90px;
        top: 312px;
        height: 80px;
        width: 180px;
        color: white;
        font-size: 24px;
        text-align: center;
        line-height: 80px;
        background-color: rgb(24,124,218);
        display: none;
    }
    .phone:hover .show-phone{
        display: block;
    } 
</style>
