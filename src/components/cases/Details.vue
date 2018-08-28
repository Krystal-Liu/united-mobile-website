<template>
    <section>
        <div id="article" ref="content"></div>
        <div class="back" @click="backForward"><i class="iconfont el-icon-ali-fanhui"></i></div>
    </section>
</template>

<script>
import {getNewsDetail, getNoticeDetail} from '../../api.js'
import marked from "marked"
import '../../assets/icon/iconfont.css'
export default {
    data() {
        return {
            aid: 0,
            nid: 0
        }   
    },
    methods: {
        backForward() {
            if (this.aid != '' && this.aid != null) {
                this.$router.push({
                    name: 'Notice'
                })
            } else if (this.nid != '' && this.nid != null){
                this.$router.push({
                    name: 'News'
                })
            }
        }
    },
    mounted() {
        this.aid = this.$route.query.aid;
        this.nid = this.$route.query.nid;
        if (this.aid != '' && this.aid != null) {
            let params = this.aid;
            getNoticeDetail(params).then(res => {
                console.log(res.markdown)
                document.getElementById("article").innerHTML = marked(res.markdown);
            })
        } else if (this.nid != '' && this.nid != null){
            let params = this.nid;
            getNewsDetail(params).then(res => {
                document.getElementById("article").innerHTML = marked(res.markdown);
            })
        }
    }
}
</script>
<style lang='scss'>
    section{
        position: relative;
        #article {
            width: 75%;
            margin: 10% auto;
            text-align: justify;
            h1 {
                font-size: 44px;
            }
            h2 {
                font-size: 38px;
            }
            p {
                font-size: 38px;
                text-indent: 2em;
                margin-top: 6%;
            }
        }
        img {
            width:100%;
            margin: 4% -9%;
        }
    }
    .back {
        position: absolute;
        right: 13%;
        top: 0;
        i {
            cursor: pointer;
        }
    }

</style>
