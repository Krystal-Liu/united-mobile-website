<template>
    <div id="unlayer">
        <div id="banner-background">
            <div id="banner-box">
                <div id="banner-left-word">
                    <p class="ignore">UNlayer</br>高性能安全接入平台</p>
                </div>
                <div id="banner-img-box">
                    <img src="../../assets/images/unlayer/banner.png" alt="">
                </div>
            </div>
        </div>
        <div id="system-function">
            <ul>
                <li class="function-li">
                    <div class="function-li-icon load"></div>
                    <div class="function-li-details">
                        <p class="function-li-details-title ignore">负载均衡</p>
                        <p class="function-li-details-content "><span class="ignore">支持http/tcp/dup/ftp/，smtp等协议负载均衡，多种灵活负载均衡策略，会话保持、故障切换</span></p>
                    </div>
                </li>
                <li class="function-li">
                    <div class="function-li-icon operate"></div>
                    <div class="function-li-details">
                        <p class="function-li-details-title ignore">安全防护</p>
                        <p class="function-li-details-content"><span class="ignore">具备waf防护功能、深度健康检查、浪涌保护、限速控制，防止爬虫、恶意业务访问，NAT地址隐藏</span></p>
                    </div>
                </li>
                <li class="function-li">
                    <div class="function-li-icon safety"></div>
                    <div class="function-li-details">
                        <p class="function-li-details-title ignore">灵活协议控制</p>
                        <p class="function-li-details-content"><span class="ignore">灵活正向代理、灵活方向代理、自定义信息处理、HTTP/HTTPS协议转换、TCP单边加速、图片转码、视频加速、文件访问加速、高性能集群</span></p>
                    </div>
                </li>
                <li class="function-li">
                    <div class="function-li-icon protocol"></div>
                    <div class="function-li-details">
                        <p class="function-li-details-title ignore">丰富运维手段</p>
                        <p class="function-li-details-content"><span class="ignore">应用性能监控分析、应用访问连监控、应用访问客户端分布分析、丰富报表、短信邮件告警</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <div id="firm-case">
            <ul>
                <li class="firm-case-li">
                    <div class="case-li-left case-left-icon case-icon-first"></div>
                    <div class="case-li-left case-li-left-details" id="black">
                        <p class="case-li-title ignore">四川电信M域外网案例</p>
                        <ul>
                            <li class="case-li-content"><span class="ignore">https协议无缝构建</span></li>
                            <li class="case-li-content"><span class="ignore">提高整体业务集群性能</span></li>
                            <li class="case-li-content"><span class="ignore">业务无缝故障切换</span></li>
                            <li class="case-li-content"><span class="ignore">全业务流量访问分析</span></li>
                        </ul>
                    </div>
                </li>
                <li class="firm-case-li">
                    <div class="case-li-right case-li-right-details">
                        <p class="case-li-title ignore">四川电信CRM域案例</p>
                        <ul>
                            <li class="case-li-content"><span class="ignore">业务自动故障切换</span></li>
                            <li class="case-li-content"><span class="ignore">业务服务与接口透明化</span></li>
                            <li class="case-li-content"><span class="ignore">业务性能深度分析</span></li>
                            <li class="case-li-content"><span class="ignore">提高整体业务集群能力50%</span></li>
                        </ul>
                    </div>
                    <div class="case-li-right case-right-icon case-icon-second"></div>
                </li>
                <li class="firm-case-li">
                    <div class="case-li-left case-left-icon case-icon-third"></div>
                    <div class="case-li-left case-li-left-details">
                        <p class="case-li-title ignore">重庆广电TV业务案例</p>
                        <ul>
                            <li class="case-li-content"><span class="ignore">视频流加速</span></li>
                            <li class="case-li-content"><span class="ignore">集群模式服务</span></li>
                            <li class="case-li-content"><span class="ignore">视频自定义加密</span></li>
                            <li class="case-li-content"><span class="ignore">按照业务自定义平行扩展</span></li>
                        </ul>
                    </div>
                </li>
                <li class="firm-case-li" id="firm-case-li-fourth">
                    <div class="case-icon-fourth"></div>
                    <div class="case-li-fourth-details" id="none">
                        <p class="case-li-title ignore">已经服务于四个省份</br>多个行业不同使用场景</p>
                        <ul>
                            <li class="case-li-content"><span class="ignore">新疆电信业务系统中广泛使用</span></li>
                            <li class="case-li-content"><span class="ignore">四川省电信运营商广泛使用</span></li>
                            <li class="case-li-content"><span class="ignore">重庆广电、移动应用工程中心广泛使用</span></li>
                            <li class="case-li-content"><span class="ignore">作为云南省电信战略合作产品，在政企市场得到广泛使用</span></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div id="partners">
            <p class="ignore">合作伙伴</p>
            <div id="partner-container">
                <div id="guangdian" class="partner-box">
                    <div id="guangdian-icon"></div>
                    <span class="ignore">重庆广电</span>
                </div>
                <div id="dianxin" class="partner-box">
                    <div id="dianxin-icon"></div>
                    <span class="ignore">中国电信</span>
                </div>
            </div>
        </div>
        <div id="zhannue-partner">
            <img src="../../assets/images/unlayer/partner-yunnan.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'unlayer'
    
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

    #system-function {
        .function-li {
            height: 500px;
            margin-top: 30px;
            box-shadow: 0 0 15px 8px #efefef;
            &:after {
                content: '';
                display: block;
                clear: both;
            }
            .function-li-icon {
                float: left;
                width: 284px;
                height: 100%;
                background-size: 78.83%;
                background-position: center;
                background-repeat: no-repeat;
            }
            .load {
                background-image: url('../../assets/images/unlayer/load-balancing.png');
            }
            .operate {
                background-image: url('../../assets/images/unlayer/operation.png');
            }
            .safety {
                background-image: url('../../assets/images/unlayer/safety-protection.png');
            }
            .protocol {
                background-image: url('../../assets/images/unlayer/protocol-control.png');
            }
            .function-li-details {
                float: left;
                width: 750px;
                height: 100%;
                margin-left: 12px;
                .function-li-details-title {
                    margin-top: 62px;
                    font-weight: bold;
                    line-height: 2.2;
                }
                .function-li-details-content {
                    text-align: justify;
                }
                .ignore {
                    font-size: 18px;
                }
                p {
                    .ignore {
                        font-size: 16px;
                    }
                }
            }
        }
    }

    #firm-case {
        .firm-case-li {
            height: 440px;
            padding: 80px 0;
            display: flex;
            align-items: center;
            &:nth-child(2) {
                background-color: #187dda;
            }
            .case-left-icon {
                width: 341px;
                height: 341px;
                margin-left: 80px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
            .case-icon-first {
                background-image: url('../../assets/images/unlayer/m-region.png');
            }
            .case-icon-third {
                background-image: url('../../assets/images/unlayer/cq-cqtv.png');
            }
            .case-right-icon {
                width:  351px;
                height: 356px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                background-image: url('../../assets/images/unlayer/crm-region.png');
            }
            .case-li-left-details {
                width: 580px;
                padding-top: 22px;
                margin-left: 50px;
            }
            .case-li-right-details {
                width: 640px;
                padding-top: 22px;
                margin-left: 50px;
                color: #ffffff;
            }
            .case-li-left-details > .case-li-title, .case-li-right-details > .case-li-title {
                margin-bottom: 23px;
                font-weight: bold;
                line-height: 1;
            }
            .case-li-left-details > ul > .case-li-content, .case-li-right-details > ul > .case-li-content {
                height: 63px;
                line-height: 63px;
                &:before {
                    content: '';
                    display: inline-block;
                    width: 19px;
                    height: 19px;
                    border-radius: 50%;
                    background-color: #b9ebcd;
                }
                span {
                    margin-left: 29px;
                }
            }
            .case-li-left-details > .ignore, .case-li-right-details > .ignore  {
                font-size: 18px;
            }
            .case-li-content {
                .ignore {
                    font-size: 16px;
                }
            }
            #black > ul > .case-li-content:before {
                background-color: #262626;
            }
        }
        #firm-case-li-fourth {
            position: relative;
            .case-icon-fourth {
                position: absolute;
                width: 334px;
                height: 294px;
                top: 110px;
                right: 50px;
                background-image: url('../../assets/images/unlayer/map.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
            .case-li-fourth-details {
                margin-left: 65px;
                margin-right: 65px;
                .case-li-title {
                    margin-bottom: 23px;
                    font-weight: bold;
                    line-height: 1;
                }
                .case-li-content {
                    height: 63px;
                    line-height: 63px;
                }
                .ignore {
                    font-size: 18px;
                }
                .case-li-content {
                    .ignore {
                        font-size: 16px;
                    }
                }
            }
            #none > ul > .case-li-content:before {
                display: none;
            }
        }
    }

    #partners {
        height: 488px; // 362
        margin-top: 50px;
        p {
            height: 88px;
            padding-left: 52px;
            color: #ffffff;
            line-height: 88px;
            background-color: #187dda;
        }
        .ignore {
            font-size: 16px;
        }
        #partner-container {
            display: flex;
            height: 400px;
            align-items: center;
            .partner-box {
                float: left;
                width: 171px;
                height: 274px;
                span {
                    display: inline-block;
                    width: inherit;
                    margin-top: 24px;
                    text-align: center;
                }
                .ignore {
                    font-size: 14px;
                }
            }
            #guangdian {
                margin-left: 292px;
                #guangdian-icon {
                    width: 100%;
                    height: 146px;
                    margin-top: 32px;
                    margin-bottom: 11px;
                    background-image: url('../../assets/images/unlayer/guangdian.png');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;
                }
            }
            #dianxin {
                margin-left: 149px;
                #dianxin-icon {
                    width: 100%;
                    height: 164px;
                    margin-top: 26px;
                    background-image: url('../../assets/images/unlayer/dianxin.png');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;
                }
            }
        }
        
    }
    
    #zhannue-partner {
        img {
            width: 100%;
        }
    }
</style>
