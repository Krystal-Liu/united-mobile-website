<template>
    <div id="canal">
        <div id="banner-background">
            <div id="banner-box">
                <div id="banner-left-word">
                    <p class="ignore">渠道支撑解决方案</p>
                    <p><span class="ignore">运营之巅 渠道为先</span></p>
                </div>
                <div id="banner-img-box">
                    <img src="https://image-1256648750.file.myqcloud.com/mobile/banner.04d130f.png" alt="">
                </div>
            </div>
        </div>
        <div id="system-background">
            <p class="system-background-title ignore">系统建设背景</p>
            <ul id="backgroud-list">
                <li class="background-li">
                    <div class="background-li-icon"></div>
                    <div class="background-li-details">
                        <div>
                            <p class="background-li-title ignore">渠道管理属性更新不及时</p>
                            <p class="background-li-content"><span class="ignore">由于无统一的渠道IT支撑系统,分支局长、渠道客户经理变更时,无法支撑渠道管理属性的实时更新,可能导致信息失真。</span></p>
                        </div>
                    </div>
                </li>
                <li class="background-li">
                    <div class="background-li-icon"></div>
                    <div class="background-li-details">
                        <div>
                            <p class="background-li-title ignore">渠道信息不规范</p>
                            <p class="background-li-content"><span class="ignore">渠道扩张过快,现有系统中渠道数据已近20万条,渠道信息不完整,且信息分散,更新也不及时,造成基础信息不规范。</span></p>
                        </div>
                    </div>
                </li>
                <li class="background-li">
                    <div class="background-li-icon"></div>
                    <div class="background-li-details">
                        <div>
                            <p class="background-li-title ignore">流程归又管理缺失</p>
                            <p class="background-li-content"><span class="ignore">新建、变更、关闭渠道的管理流程现为OA部门联络单,分散在各渠道客户经理,未形成统一有效的管理数据, 一旦客户经理更换,存在信息丢失的可能。</span></p>
                        </div>
                    </div>
                </li>
                <li class="background-li">
                    <div class="background-li-icon"></div>
                    <div class="background-li-details">
                        <div>
                            <p class="background-li-title ignore">集团集约化管理的要求</p>
                            <p class="background-li-content"><span class="ignore">新的集团渠道视图3.0包含了商、渠(CRM渠道)、员(CRM工号)的管理,且不提供任何对外接又,本地需要兼顾两级数据完整与本地个性化运营</span></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div id="system-function">
            <p class="system-background-title ignore">系统框架和功能</p>
            <ul id="backgroud-list">
                <li class="background-li">
                    <div class="background-li-icon"></div>
                    <div class="background-li-details">
                        <div>
                            <p class="background-li-title ignore">事务管理</p>
                            <p class="background-li-content"><span class="ignore">待办事务模块:待办事务提醒,已办事务流程及历史记录查询功能。(渠道客户经理,渠道审核管理使用)</span></p>
                        </div>
                    </div>
                </li>
                <li class="background-li">
                    <div class="background-li-icon"></div>
                    <div class="background-li-details">
                        <div>
                            <p class="background-li-title ignore">流程管理</p>
                            <p class="background-li-content"><span class="ignore">事务管理模块:代理商、渠道、工号等所 (CRM、合作伙伴、资金稽核,电小二)相关新增、变更、关闭流程发起与处理。佣金方案和支付的发起</span></p>
                        </div>
                    </div>
                </li>
                <li class="background-li">
                    <div class="background-li-icon"></div>
                    <div class="background-li-details">
                        <div>
                            <p class="background-li-title ignore">报表分析</p>
                            <p class="background-li-content"><span class="ignore">报表分析模块:代理商、渠道、工号等所有流程、基础信息的视图展示;后期将对渠道效能进行评估。(渠道客户经理,渠道方案和支付的发起管理者使用)</span></p>
                        </div>
                    </div>
                </li>
                <li class="background-li">
                    <div class="background-li-icon"></div>
                    <div class="background-li-details">
                        <div>
                            <p class="background-li-title ignore">待办事务</p>
                            <p class="background-li-content"><span class="ignore">流程管理模块:对渠道基础管理处理流程进行定义与调整,对流程环节与超时预警配置进行相关操作。(渠道管理者使用)</span></p>
                        </div>
                    </div>
                </li>
                <li class="background-li">
                    <div class="background-li-icon"></div>
                    <div class="background-li-details">
                        <div>
                            <p class="background-li-title ignore">系统管理</p>
                            <p class="background-li-content"><span class="ignore">系统管理模块:对系统基础角色与权限进行定义,对系统用户进行管理,对数据访问权限与系统日志进行相关管理。(系统管理员使用）</span></p>
                        </div>
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

    #system-background, #system-function {
        .system-background-title {
            height: 120px;
            line-height: 120px;
            text-align: center;
            color: #ffffff;
            background-color: #6396e0;
        }
        .ignore {
            font-size: 18px;
        }
        #backgroud-list {
            .background-li {
                height: 450px;
                margin-top: 14px;
                &:nth-child(1) {
                    margin-top: 20px;
                }
                box-shadow: 0 0 14px 8px #efefef;
                .background-li-icon {
                    float: left;
                    width: 178px;
                    height: inherit;
                    margin-left: 39px;
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
                }
                &:nth-child(1) {
                    .background-li-icon {
                        background-image: url('../../assets/images/canal/outtime.png');
                    }
                }
                &:nth-child(2) {
                    .background-li-icon {
                        background-image: url('../../assets/images/canal/no-standard.png');
                    }
                }
                &:nth-child(3) {
                    .background-li-icon {
                        background-image: url('../../assets/images/canal/lack.png');
                    }
                }
                &:nth-child(4) {
                    .background-li-icon {
                        background-image: url('../../assets/images/canal/reqiure.png');
                    }
                }
                .background-li-details {
                    display: flex;
                    align-items: center;
                    float: left;
                    width: 775px;
                    height: inherit;
                    margin-left: 38px;
                    .background-li-title{
                        font-weight: bold;
                    }
                    .background-li-content {
                        margin-top: 20px;
                        text-align: justify;
                    }
                    .ignore {
                        font-size: 18px;
                    }
                    .background-li-content {
                        .ignore {
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    }

    #system-function {
        #backgroud-list {
            .background-li {
                &:nth-child(1) {
                    .background-li-icon {
                        background-image: url('../../assets/images/canal/to-do-business.png');
                    }
                }
                &:nth-child(2) {
                    .background-li-icon {
                        background-image: url('../../assets/images/canal/transaction-management.png');
                    }
                }
                &:nth-child(3) {
                    .background-li-icon {
                        background-image: url('../../assets/images/canal/report-analyse.png');
                    }
                }
                &:nth-child(4) {
                    .background-li-icon {
                        background-image: url('../../assets/images/canal/process-management.png');
                    }
                }
                &:nth-child(5) {
                    .background-li-icon {
                        background-image: url('../../assets/images/canal/system-manage.png');
                    }
                }
            }
        }
    }

    #footer-word {
        height: 120px;
        margin-top: 26px;
        margin-bottom: 30px;
        line-height: 120px;
        text-align: center;
        font-weight: lighter;
        color: #ffffff;
        background-color: #6396e0;
        .ignore {
            font-size: 18px;
        }
    }
    
</style>
