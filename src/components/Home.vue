<template>
    <div id="home">
        <slide></slide>
        <div class="cases">
            <p class="title">优秀案例</p>
            <ul> 
                <router-link :to="{name: 'Unlayer'}" tag="li">
                    <div class="case-img">
                        <img src="../assets/images/unlayerBack.png"/>
                    </div>
                    <div class="content">
                        <p class="cases-title">unlayer高性能负载接入平台</p>
                        <p class="case-content">unlayer高性能负载安全接入平台 整合数据中心资源，保证应用高可用</p>
                    </div>
                </router-link>
                <router-link :to="{name: 'Onetouch'}" tag="li">
                    <div class="case-img">
                        <img src="../assets/images/oneTouchBack.png"/>
                    </div>
                    <div class="content">
                        <p class="cases-title">终端一键式解决方案</p>
                        <p class="case-content">一键式服务平台能实现对各类营业终端的统一资源监控、告警分析</p>
                    </div>
                </router-link>
            </ul>
        </div>
        <div class="partner">
            <p class="title">合作对象</p>
            <ul>
                <li>
                    <a target="_blank" href="http://www.chinatelecom.com.cn">
                        <div class="partner-img">
                            <img src="../assets/images/telecom.png"/>
                        </div>
                        <p class="partner-title">中国电信</p>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://www.cqkcy.com">
                        <div class="partner-img">
                            <img src="../assets/images/kanceyuan.png"/>
                        </div>
                        <p class="partner-title">重庆市勘测院</p>
                    </a>
                </li>
                <li>
                   <a target="_blank" href="http://www.cqbntv.cn/">
                        <div class="partner-img">
                            <img src="../assets/images/ctv.png"/>
                        </div>
                        <p class="partner-title">重庆广电集团</p>
                    </a> 
                </li>
            </ul>
        </div>
        <div class="accompany">
            <p class="accom-title">公司概况</p>
            <router-link :to="{name: 'Introduce'}" tag="div">
                <img src="../assets/images/accompany.png"/>
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
                <router-link :to="{name: 'News'}" tag="li">
                    <div class="news-img">
                        <img src="../assets/images/notice.png"/>
                    </div>
                    <div class="content">
                        <p class="news-title">新闻一</p>
                        <p class="news-content">unlayer高性能负载安全接入平台整合数据中心资源，保证应用
                            高可用</p>
                    </div>
                </router-link>
                <router-link :to="{name: 'News'}" tag="li">
                    <div class="news-img">
                        <img src="../assets/images/news.png"/>
                    </div>
                    <div class="content">
                        <p class="news-title">新闻二</p>
                        <p class="news-content">一键式服务平台能实现对各类营业终端的统一资源监控等功能</p>
                    </div>
                </router-link>
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
export default {
    name: 'home',
    components: {
        Footers, Slide
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
            .cases-title {
                margin: 0;
                font-size: 40px;
                font-weight: bold;
            }
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
            .news-title {
                margin: 0;
                font-size: 42px;
                font-weight: bold;
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
