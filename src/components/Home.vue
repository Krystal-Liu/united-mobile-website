<template>
    <div id="home">
        <slide></slide>
        <div class="cases">
            <p class="title">优秀案例</p>
            <ul> 
                <router-link :to="{name: 'Unlayer'}" tag="li">
                    <div class="case-img">
                        <img src="https://image-1256648750.file.myqcloud.com/mobile/unlayerBack.dcf478e.png"/>
                    </div>
                    <div class="content">
                        <p class="cases-title">unlayer高性能负载接入平台</p>
                        <p class="case-content">unlayer高性能负载安全接入平台 整合数据中心资源，保证应用高可用</p>
                    </div>
                </router-link>
                <router-link :to="{name: 'Onetouch'}" tag="li">
                    <div class="case-img">
                        <img src="https://image-1256648750.file.myqcloud.com/mobile/oneTouchBack.5803613.png"/>
                    </div>
                    <div class="content">
                        <p class="cases-title">终端一键式解决方案</p>
                        <p class="case-content">一键式服务平台能实现对各类营业终端的统一资源监控、告警分析</p>
                    </div>
                </router-link>
            </ul>
        </div>
        <div class="partner">
            <p class="title">合作伙伴</p>
            <ul>
                <li>
                    <a target="_blank" href="http://www.chinatelecom.com.cn">
                        <div class="partner-img">
                            <img src="https://image-1256648750.file.myqcloud.com/mobile/telecom.ac39967.png"/>
                        </div>
                        <p class="partner-title">中国电信</p>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://www.cqkcy.com">
                        <div class="partner-img">
                            <img src="https://image-1256648750.file.myqcloud.com/mobile/kanceyuan.00cf48f.png"/>
                        </div>
                        <p class="partner-title">重庆市勘测院</p>
                    </a>
                </li>
                <li>
                   <a target="_blank" href="http://www.cqbntv.cn/">
                        <div class="partner-img">
                            <img src="https://image-1256648750.file.myqcloud.com/mobile/ctv.ca74375.png"/>
                        </div>
                        <p class="partner-title">重庆广电集团</p>
                    </a> 
                </li>
            </ul>
        </div>
        <div class="accompany">
            <p class="accom-title">公司概况</p>
            <router-link :to="{name: 'Introduce'}" tag="div">
                <img src="https://image-1256648750.file.myqcloud.com/mobile/accompany.987e918.png"/>
            </router-link>
            <div class="introduce">
                <p class="accompany-title">关于我们</p>
                <p class="accompany-content">重庆邮莱特科技有限公司成立于2015年10月，是以云计算、大数据、物联网
                    研发和服务为主的高科技创新公司，主要从事云计算平台、大数据智能网络平台、各类业务智能
                    系统、物联网及智能终端应用系统等研发与实施。</p>
            </div>
        </div>
        <div class="news">
            <p class="title">公司新闻</p>
            <ul> 
                <li v-for="(item,index) in items" @click="jumpDetails(item)">
                    <div class="news-img">
                        <img :src="item.img"/>
                    </div>
                    <div class="content">
                        <p class="news-content" v-html="item.markdown"></p>
                        <p class="content-list-li-time">{{changeTime(item.time)}}</p>
                    </div>
                </li>
            </ul>
            <router-link :to="{name: 'News'}">
                <p class="find-more">查看更多</p>
            </router-link>
        </div>
        <footers></footers>
    </div>
    
</template> 

<script>
import Footers from './common/Footers.vue'
import Slide from './common/Slide.vue'
import {getNewsList} from '../api.js'
import marked from 'marked'
export default {
    name: 'home',
    data() {
        return {
            items: []
        }
    },
    components: {
        Footers, Slide
    },
    methods: {
        getList () {
            let params = 1;  //取新闻列表的第一页的两条数据
            getNewsList(params).then(res =>{
                // console.log(res)
                let arr = res.list.slice(0,2)
                for (let i=0; i<arr.length;i++) {
                    arr[i].markdown = this.breakWords(arr[i].markdown);
                }
                this.items = arr;
            })
        },
        breakWords(markdown) {
            // match返回的是一个数组
            let html = marked(markdown).match(/<p[^>]*>(?:(?!<\/p>)[\s\S])*<\/p>/)[0];
            let result = html.slice(0,45) + '...' + '</p>';
            return result
        },
        jumpDetails(item) {
            this.$router.push({
                path: '/news/details',
                query: {
                    nid: item.nid
                }
            })
        },
        changeTime(timestamp) {
            let date = new Date(timestamp);
            let year = date.getFullYear();
            let month = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
            let day = date.getDate();
            return year + '/' + month + '/'+day
        }
    },
    mounted() {
        this.getList();
    }
}
</script>
 
<style lang="scss" scoped>
    #home {
        img {
            width: 100%;
        } 
    }
    .title {
            width: 28.695%;
            height: 78px;
            margin-top: 6%;
            color: white;
            font-size: 44px;
            line-height: 78px;
            background-color: black;
            text-align: center;
        }
    .cases {
        width: 85.185%;
        margin: 0 auto;
        overflow: hidden;
        ul li {
            float: left;
            padding-top: 8%;
        }
        li:nth-child(2) {
            padding-top: 5%;
        }
        .case-img {
            float: left;
            width: 39.13%;
            cursor: pointer;
            img {
                width: 100%;
            }
        }
        .content {
            float: right;
            width: 56%;
            cursor: pointer;
            .case-content {
                font-size: 40px;
                text-align: justify;
            }
        }
    }
    .partner {
        width: 85.185%;
        margin: 0 auto;
        overflow: hidden;
        .partner-img {
            img {
                width: 100%;
            }
        }
        .partner-title {
            font-size: 32px;
        }
        .partner-english {
            font-size: 36px;
        }
        ul li {
            float: left;
            position: relative;
            width: 30.108%;
            margin-top: 8%;
            cursor: pointer;
            box-shadow: 0px 10px 10px 0px 
		    rgba(81, 88, 94, 0.3);
            p {
                position: absolute;
                text-align: center;
                margin-top: -34%;
                height: 90px;
                color: black;
                width: 100%;
                line-height: 90px;
                background-color: #187cda;
            }
        }
        li:nth-child(2) {
            margin-left: 5%;
        }
        li:nth-child(3) {
            float: right;
        }
    }
    .accompany {
        overflow: hidden;
        .accom-title {
            width: 24.444%;
            height: 78px;
            margin-top: 6%;
            margin-left: 7.5%;
            color: white;
            font-size: 42px;
            line-height: 78px;
            background-color: black;
            text-align: center;
        }
        img {
            margin-top: 5%;
            cursor: pointer;
        }
        .introduce {
            width: 85.185%;
            margin: 0 auto;
            p {
                padding-top: 3%;
            }
            .accompany-title {
                font-size: 42px;
                font-weight: bold;
            }
            .accompany-content {
                font-size: 40px;
                text-align: justify;
            }
        }
    }
    .news {
        width: 85.185%;
        margin: 0 auto;
        overflow: hidden;
        padding-bottom: 6%;
        ul li {
            position: relative;
            float: left;
            margin-top: 8%;
        }
        .news-img {
            width: 41.13%;
            float: left;
            img {
                width: 100%;
            }
        }
        .content {
            float: right;
            width: 54%;
            padding-right: 3%;
            cursor: pointer;
            .content-list-li-time {
                position: absolute;
                bottom: 0;
                right: 0;
                font-size: 32px;
            }
            .news-content {
                font-size: 40px;
                text-align: justify;
            }
        }
        .find-more {
            float: right;
            margin-top: 4%;
            width: 23%;
            color: white;
            cursor: pointer;
            height: 70px;
            font-size: 38px;
            line-height: 70px;
            background-color: #187cda;
            text-align: center;
        }
    }

</style>
