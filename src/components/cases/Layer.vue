<template>
    <div id="layer">
        <div id="banner-background">
            <div id="banner-box">
                <div id="banner-left-word">
                    <p class="ignore">合作分层管理系统</br>解决方案</p>
                </div>
                <div id="banner-img-box">
                    <img src="https://image-1256648750.file.myqcloud.com/mobile/banner.f530981.png" alt="">
                </div>
            </div>
        </div>
        <div id="project-introduce">
            <ul id="project-introduce-list">
                <li>
                    <p class="project-introduce-li-title ignore">项目建设背景</p>
                    <div>
                        <p class="ignore">1.中国电信的收入分成类项目系统还存在体系不够健全、规则比较粗放、缺乏系统有效支撑等问题；</p>
                        <p class="ignore">2.以完成合作类分成项目的全生命周期管理、无法准确评判项目风险及缺乏差异化规则服务体系；</p>
                        <p class="ignore">3.简单粗放的稽核规则遏制了用户及公司业务人员的业务办理能力，既造成业务效率不高，也给企业造成潜在收入损失。</p>
                        <p class="ignore">因此，中国电信风险办下达〔2015〕1号号文件：《关于开展全省收入类合作分成项目全面整改的通知》</p>
                    </div>
                </li>
                <li>
                    <p class="project-introduce-li-title ignore">业务推进目的</p>
                    <div>
                        <p class="ignore">1.建立起符合集团统一规范要求的收入分成管理机制及流程，有效管控合作类分成项目风险。</p>
                        <p class="ignore">2.贯彻年初集团公司提出的“变革创新、合作开放、提质增效”的总要求，提高中国电信业务流程办理分成系统管理一体化</p>
                        <p class="ignore">3.促进全网合作类分成项目管理集约运营，构建统一规范的管理流程与管理体系</p>
                        <p class="ignore">核心目标：管控企业运营风险，提升企业服务竞争力</p>
                    </div>
                </li>
            </ul>
        </div>
        <div id="core-technology">
            <img src="https://image-1256648750.file.myqcloud.com/mobile/core-technolog-point-mo.d282f1c.png" alt="">
            <ul id="core-technology-list">
                <li>
                    <div class="core-technology-li-index">1</div>
                    <p class="ignore">系统平台用先进的设计思想和技术手段，并积极采纳其它系统开发方面的成功先例，优化系统体系结构提高系统性能。</p>
                </li>
                <li>
                    <div class="core-technology-li-index">2</div>
                    <p class="ignore">采用了先进的分布式文件存储系统实现统一存储，编程环境及接口简洁高效，不同的应用系统之间可以方便地进行文件交换并保证文件的一致性。</p>
                </li>
                <li>
                    <div class="core-technology-li-index">3</div>
                    <p class="ignore">采用了开源稳定的工作流引擎做平台流程支撑，保证系统所用技术的先进性、成熟性及可靠性，确保用户投资的有效性和延续性。</p>
                </li>
            </ul>
        </div>
        <div id="architecture-diagram">
            <p class="ignore">系统整体功能构架图</p>
            <img src="https://image-1256648750.file.myqcloud.com/mobile/architecture-diagram.e0875dc.png" alt="">
        </div>
        <div id="main-function-produce">
            <p class="main-function-produce-title ignore">主要功能介绍</p>
            <ul>
                <li>
                    <p class="main-func-li-title ignore">省级业务立项流程</p>
                    <div class="main-func-li-content">
                        <div class="main-func-li-icon lixiang"></div>
                        <p class="ignore">发起新流程</p>
                        <p class="ignore">项目申报</p>
                        <p class="ignore">省公司项目</p>
                    </div>
                </li>
                <li>
                    <p class="main-func-li-title ignore">省级业务分成规则绑定流程</p>
                    <div class="main-func-li-content">
                        <div class="main-func-li-icon bangding"></div>
                        <p class="ignore">发起新流程</p>
                        <p class="ignore">分成规则绑定</p>
                        <p class="ignore">省公司业务</p>
                        <p class="ignore">省公司业务配置</p>
                        <p class="ignore">业务规则绑定</p>
                    </div>
                </li>
                <li>
                    <p class="main-func-li-title ignore">省级业务出账申请流程</p>
                    <div class="main-func-li-content">
                        <div class="main-func-li-icon chuzhang"></div>
                        <p class="ignore">发起新流程</p>
                        <p class="ignore">出账申请</p>
                        <p class="ignore">省公司项目</p>
                    </div>
                </li>
                <li>
                    <p class="main-func-li-title ignore">省级业务退费调账申请流程</p>
                    <div class="main-func-li-content">
                        <div class="main-func-li-icon tiaozhang"></div>
                        <p class="ignore">发起新流程</p>
                        <p class="ignore">省公司业务</p>
                        <p class="ignore">省公司特殊处理申请</p>
                        <p class="ignore">特殊处理申请</p>
                    </div>
                </li>
            </ul>
        </div>
        <p id="footer-word"><span class="ignore">已被多省运营商投入生产使用</span></p>
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
                width: 560px;
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
                width: 380px;
                margin-left: 20px;
                img {
                    width: 100%;
                }
            }
        }
    }

    #project-introduce {
        #project-introduce-list {
            width: 979px;
            margin: 0 auto;
            li {
                margin-top: 36px;
                &:nth-child(2) {
                    margin-top: 55px;
                }
                text-align: justify;
                .project-introduce-li-title {
                    position: relative;
                    font-weight: bold;
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 6px;
                        height: 60px;
                        left: -16px;
                        background-color: #3f9dc6;
                    }
                }
                .ignore {
                    font-size: 18px;
                }
                div {
                    margin-top: 33px;
                    p {
                        font-size: 24px;
                    }
                    .ignore {
                        font-size: 16px;
                    }
                }
            }
        }
    }

    #core-technology {
        margin-top: 68px;
        img {
            width: 100%;
        }
        #core-technology-list {
            width: 1010px;  //1001
            margin: 0 auto;
            margin-top: 114px;
            &:after {
                content: '';
                display: block;
                clear: both;
            }
            li {
                position: relative;
                box-sizing: border-box;
                float: left;
                width: 314px;
                height: 580px;
                margin-left: 30px;
                padding: 102px 29px 0 29px;
                box-shadow: 0px 15px 41px 9px rgba(84, 145, 109, 0.18);
                &:nth-child(1) {
                    margin-left: 0;
                }
                p {
                    text-align: justify;
                }
                .ignore {
                    font-size: 12px;
                }
                .core-technology-li-index {
                    position: absolute;
                    width: 130px;
                    height: 130px;
                    top: -65px;
                    left: 92px;
                    text-align: center;
                    line-height: 130px;
                    font-size: 56px;
                    font-weight: bold;
                    color: #ffffff;
                    border-radius: 50%;
                    background-color: #3f9dc6;
                    box-shadow: 0px 15px 41px 9px rgba(84, 125, 145, 0.35);
                }
            }
        }
    }

    #architecture-diagram {
        margin-top: 85px;
        p {
            font-weight: bold;
            text-align: center;
        }
        .ignore {
            font-size: 18px;
        }
        img {
            margin-top: 32px;
            display: block;
            width: 991px;
            margin: 0 auto;
        }
    }

    #main-function-produce {
        margin-top: 50px;
        .main-function-produce-title {
            font-weight: bold;
            text-align: center;
        }
        .ignore {
            font-size: 18px;
        }
        ul {
            width: 979px;
            margin: 0 auto;
            &:after {
                content: '';
                display: block;
                clear: both;
            }
            li {
                position: relative;
                float: left;
                width: 450px;
                margin-left: 79px;
                margin-top: 63px;
                padding-top: 130px;
                &:nth-child(1), &:nth-child(3) {
                    margin-left: 0;
                }
                &:nth-child(3), &:nth-child(4) {
                    margin-top: 80px;
                }
                p {
                    text-align: center;
                }
                .ignore {
                    font-size: 16px;
                }
                .main-func-li-title {
                    position: absolute;
                    width: 450px;
                    top: 0;
                }
                .main-func-li-content {
                    position: relative;
                    width: inherit;
                    height: 473px;
                    margin-top: 92px;
                    padding-top: 128px;
                    line-height: 2;
                    box-shadow: 0px 15px 41px 9px rgba(84, 145, 109, 0.18);
                    .main-func-li-icon {
                        position: absolute;
                        width: 170px;
                        height: 170px;
                        top: -85px;
                        left: 140px;
                        border-radius: 50%;
                        box-shadow: 0px 15px 41px 9px rgba(84, 125, 145, 0.35);
                        background-color: #3f9dc6;
                        background-position: center center;
                        background-repeat: no-repeat;
                    }
                    .lixiang {
                        background-image: url('../../assets/images/layer/lixiang.png');
                        background-size: 43.2% 58.4%;
                    }
                    .bangding {
                        background-image: url('../../assets/images/layer/bangding.png');
                        background-size: 59.2% 59.2%;
                    }
                    .chuzhang {
                        background-image: url('../../assets/images/layer/chuzhang.png');
                        background-size: 50.4% 56%;
                    }
                    .tiaozhang {
                        background-image: url('../../assets/images/layer/tiaozhang.png');
                        background-size: 60.8% 60.8%;
                    }
                }
            }
        }
    }

    #footer-word {
        height: 120px;
        margin-top: 68px;
        margin-bottom: 57px;
        line-height: 120px;
        font-weight: lighter;
        text-align: center;
        color: #ffffff;
        background-color: #6396e0;
        .ignore {
            font-size: 18px;
        }
    }
</style>
