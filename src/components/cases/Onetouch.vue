<template>
    <div id="one-touch">
        <div id="banner-background">
            <div id="banner-box">
                <div id="banner-left-word">
                    <p class="ignore">终端一键式解决方案</p>
                </div>
                <div id="banner-img-box">
                    <img src="https://image-1256648750.file.myqcloud.com/mobile/banner.fa873dd.png" alt="">
                </div>
            </div>
        </div>
        <div id="platform-introduction">
            <p class="platform-title ignore">平台简介</p>
            <div id="platform-introduction-content">
                <p class="ignore">“强化IT支撑能力,提高一线员工工作效率”</p>
                <p class="ignore">一键式服务平台能实现对各类营业终端的统一资源监控、告警分析; 实现统一的软件分发与插件更新等功能;具有前端营业受理环境的自动检测、自动修复、后端前置等功能;能实现代理商与企业之间的横向、纵向的有效沟通;实现营业终端的远程维护及专家协同指导;规范和构建营业受理终端学习交流平台,包括实现业务提醒、操作手册分发、在线培训等。</p>
            </div>
        </div>
        <div id="platform-architecture">
            <p class="platform-title ignore">平台架构</p>
            <div id="user">
                <img src="../../assets/images/one-touch/user.png" alt="">
                <p class="ignore">用户层</p>
                <ul>
                    <li class="ignore">普通pc营业终端</li>
                    <li class="ignore">终端服务器</li>
                    <li class="ignore">地方管理员</li>
                    <li class="ignore">高级管理员</li>
                </ul>
            </div>
            <div id="data-apply">
                <div id="data">
                    <img src="../../assets/images/one-touch/data.png" alt="">
                    <p class="ignore">数据存储层</p>
                    <ul>
                        <li class="ignore">云存储／分布式数据库</li>
                    </ul>
                </div>
                <div id="apply">
                    <img src="../../assets/images/one-touch/application.png" alt="">
                    <p class="ignore">应用支撑层</p>
                    <ul>
                        <li class="ignore">安全扫描，资源监控，软件／插件管理，远程维护，通信管理，用户管理，界面管理，日志管理</li>
                    </ul>
                </div>
            </div>
            <div id="show">
                <img src="../../assets/images/one-touch/show.png" alt="">
                <p class="ignore">展现层</p>
                <ul>
                    <li class="ignore">服务器端：远程维护，新闻管理，监控管理，安全策略，事物管理，软件管理，用户管理，培训管理</li>
                    <li class="ignore">客户端：即使通信，个性化应用管理，插件扫描，邮件系统，操作录像，一键检测／修复／保障，专家坐席，培训学习，通知提醒</li>
                </ul>
            </div>
            <div id="technology-img"> 
                <img src="../../assets/images/one-touch/technology.png" alt="">
            </div>
        </div>
        <div id="platform-advantage">
            <p class="platform-title ignore">平台优势</p>
            <div class="platform-advantage-content ingore">
                <p>一键式服务平台提供IT服务集约化管理，提供统一的，快速有效的日常工作终端维护手段，实现营业终端设备的统一监控及安全管理，规范营业前台操作，建立友好便捷的支撑渠道。</p>
                <ul>
                    <li>1、提升企业运营效率及盈利能力。</li>
                    <li>2、增强企业竞争力</li>
                    <li>3、提升企业内涵 </li>
                    <li>4、强化和集约管理,同时切实为基层一线做好营销和服务支撑</li>
                </ul>
                <ul id="content-list-sec">
                    <li>采用了分布式文件系统,保证了平台的可扩展性</li>
                    <li>采用了Thrift服务框架,保证了平台的稳定性及可靠性 </li>
                    <li>集监控与维护于一体,用户无需出现场即可完成维护工作,提高了维护效率,为终端提供有力支撑</li>
                    <li>使用便捷,集成了电信应用系统链接,提供了统一的入又</li>
                    <li>提供了分层的支撑服务,满足多数终端运行环境需求</li>
                    <li>便捷的平台工具为代理商及企业间建立了有效的沟通渠道</li>
                </ul>
                <p id="p-last">已在四川电信，重庆电信，新疆电信，沈阳电信广泛使用</p>
            </div>
        </div>
        <footers></footers>
    </div>
</template>

<script>
import Footers from '../common/Footers'
export default {
    components: {
        Footers
    }
}
</script>

<style lang="scss" scoped>
    #banner-background {
        height: 405px;
        background-color: #041123;
        #banner-box {
            display: flex;
            width: 890px;
            height: 100%;
            margin: 0 auto;
            align-items: center;
            &:after {
                content: '';
                display: block;
                clear: both;
            }
            #banner-left-word {
                width: 610px;
                p {
                    color: white;
                    line-height: 1.5;
                    &:nth-child(2) {
                        margin-top: 20px;
                        font-weight: lighter;
                    }
                }
                .ignore {
                    font-size: 20px;
                }
                p {
                    .ignore {
                        font-size: 12px;
                    }
                }
            }
            #banner-img-box {
                width: 256px;
                margin-left: 20px;
                img {
                    width: 100%;
                }
            }
        }
    }

    .platform-title {
        height: 120px;
        padding-left: 74px;
        color: #ffffff;
        line-height: 120px;
        background-color: #13334c;
    }
    .ignore {
        font-size: 18px;
    }
    #platform-introduction {
        #platform-introduction-content {
            padding: 32px 43px 19px 43px ;
            line-height: 1.6;
            text-align: justify;
            .ignore {
                font-size: 16px;
                text-indent: 32px;
            }
        }
    }

    #platform-architecture {
        #user {
            height: 182px;
            margin: 0 auto;
            margin-top: 41px;
            text-align: center;
            img {
                width: 130px;
                height: 182px;
                display: block;
                margin: 0 auto;
            }
            p {
                line-height: 2;
            }
            .ignore {
                font-size: 14px;
                font-weight: bold
            }
            ul {
                .ignore {
                    font-size: 12px;
                    font-weight: normal;
                }
            }
        }
        #data-apply {
            height: 175.5px;
            padding: 0 20px;
            margin-top: 120px;
            #data {
                float: left;
                width: 330px;
                height: inherit;
                img {
                    display: block;
                    width: 148.2px;
                    margin: 0 auto;
                }
                p {
                    text-align: center;
                    font-weight: bold;
                    line-height: 2;
                }
                ul li {
                    font-weight: normal;
                    text-align: justify;
                }
            }
            #apply {
                float: right;
                width: 350px;
                height: inherit;
                img {
                    display: block;
                    width: 183.3px;
                    margin: 0 auto;
                }
                p {
                    text-align: center;
                    font-weight: bold;
                    line-height: 2;
                }
                ul li {
                    font-weight: normal;
                    text-align: justify;
                }
            }
            #data, #apply {
                .ignore {
                    font-size: 14px;
                }
                ul {
                    .ignore {
                        font-size: 12px;
                    }
                }
            }
        }
        #show {
            width: 749px;
            height: 137.8px;
            margin: 0 auto;
            margin-top: 150px;
            margin-bottom: 470px;
            img {
                display: block;
                width: 169px;
                height: 137.8px;
                margin: 0 auto;
            }
            p {
                text-align: center;
                line-height: 2;
            }
            ul li {
                text-align: justify;
            }
            .ignore {
                font-size: 14px;
                font-weight: bold
            }
            ul {
                .ignore {
                    font-size: 12px;
                    font-weight: normal;
                }
            }
        }
        #technology-img {
            height: 369px;
            padding: 5px 217px 0 44px;
            margin-top: 36px;
            background-color: #13334c;
            img {
                width: 100%;
            }
        }
    }

    #platform-advantage {
        margin-top: 25px;
        .ignore {
            &:nth-child(2) {
                font-size: 16px;
            }
        }
        .platform-advantage-content {
            padding: 25px 76px 72px 76px;
            text-align: justify;
            background-image: url('https://image-1256648750.file.myqcloud.com/mobile/map.74ed441.jpg');
            background-repeat: no-repeat;
            background-position: 80% 88%;
            background-size: 527.8px 464.8px;
            #content-list-sec {
                margin-top: 57px;
            }
            #p-last {
                margin-top: 500px;
            }
        }
    }
</style>
