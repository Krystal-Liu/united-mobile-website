<template>
    <div id="government">
        <div id="banner-background">
            <div id="banner-box">
                <div id="banner-left-word">
                    <p class="ignore">政企全项目解决方案</p>
                </div>
                <div id="banner-img-box">
                    <img src="../../assets/images/government/banner.png" alt="">
                </div>
            </div>
        </div>
        <div id="system-framework">
            <h3 class="system-framework-title">系统流程架构</h3>
            <div id="system-framework-img">
                <p class="before ignore">售前审批</p>
                <p class="ignore"><span>售后运营</span><span>售中支撑</span></p>
            </div>
        </div>
        <div id="business-circulation">
            <h3 class="business-circulation-title">政企业务流转</h3>
            <img src="../../assets/images/government/work-flow.png" alt="">
        </div>
        <div id="before-sale">
            <h3 class="sale-title">售前流程架构</h3>
            <div id="before-sale-flow">
                <ul id="before-sale-details">
                    <li>
                        <p class="before-sale-index ignore">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </p>
                        <ul class="before-sale-content ignore">
                            <li>
                                <p>商机管理</p>
                                <p>接收集团下发的所有商机信息</p>
                            </li>
                            <li>
                                <p>商机任务管理</p>
                                <p>对商机进行任务管理和分配,派发解决方案经理填写解决方案</p>
                            </li>
                            <li>
                                <p>解决方案上传</p>
                                <p>解决方案经理填写完方案后针对商机进行上传,并进行项目团队组建</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="before-sale-index ignore">
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                        </p>
                        <ul class="before-sale-content ignore">
                            <li>
                                <p>方案评审</p>
                                <p>根据方案的重要性进行方案评审</p>
                            </li>
                            <li>
                                <p>发起协议</p>
                                <p>客户经理针对客户发起协议事前审批,并关联协议</p>
                            </li>
                            <li>
                                <p>合同关联并送CRM受理</p>
                                <p>对事前协议关联合同,并送到crm进行受理开通</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div id="sale">
            <h3 class="sale-title">售中流程架构</h3>
            <img src="../../assets/images/government/sale-flow-mo.png" alt="">
        </div>
        <div id="after-sale">
            <h3 class="sale-title">售后流程架构</h3>
            <ul>
                <li>
                    <div class="after-sale-icon">
                        <img src="../../assets/images/government/accept-delivery.png" alt="">
                    </div>
                    <p class="ignore">接受交付经理的交付资料,进入运营环节</p>
                </li>
                <li>
                    <div class="after-sale-icon">
                        <img src="../../assets/images/government/fault-record.png" alt="">
                    </div>
                    <p class="ignore">以项目为维度展示运营情况</p>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="after-sale-icon">
                        <img src="../../assets/images/government/customer-service.png" alt="">
                    </div>
                    <p class="ignore">以客户为维度展示运营情况</p>
                </li>
                <li>
                    <div class="after-sale-icon">
                        <img src="../../assets/images/government/data-collection.png" alt="">
                    </div>
                    <p class="ignore">由运营经理上传每月项目的运营情况</p>
                </li>
            </ul>
        </div>
        <div id="build-result">
            <h3 class="sale-title">系统建设成效</h3>
            <div id="build-result-content">
                <ul>
                    <li>
                        <h3>减少资料录入次数,提高管理效率</h3>
                        <p>1. 客户经理、解决方案经理、交付经理、运营经理只需在一个生产系统中 录入相关信息,即可实现全项目数据资料互通,提高项目前、中、后管理 效率。</p>
                    </li>
                    <li>
                        <h3>固化售前、售中、售后流程,加强一点接应意识</h3>
                        <p>1. 制定售前、售中、售后一点接应岗,流程 统一管理;</p>
                        <p>2. 全程跟踪流程进度,加强前端客户经理与后端支撑实施人员无缝链接</p>
                    </li>
                    <li>
                        <h3>加强售前售中售后环节承接</h3>
                        <p>1.在项目意向成熟阶段即形成客户经理、交付经理、运营经理成立项目组。客 户经理、交付经理、运营经理按项目阶段轮流牵头,“三人组”成为项目生命周期内的协调沟通中心和客户满意度的责任共同体</p>
                    </li>
                    <li>
                        <h3>增强省市县政企客户支撑有效联动机制保障</h3>
                        <p>1.固化政企项目售前、售中、售后的管理流程; </p>
                        <p>2.加强跨域项目的管理流程,上级项目经理能够全程跟踪管控下级项目进度,降低上级项目经理管理成本; </p>
                        <p>3.通过内部任务、公告等有效沟通方式,增强省市联动项目的沟通,保障跨域项目能够顺利稳妥的实施完成</p>
                    </li>
                </ul>
            </div>
        </div>
        <p id="footer-word"><span class="ignore">已被多省运营商投入生产使用</span></p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    h3 {
        margin: 0;
    }
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
                    font-size: 32px;
                    color: white;
                    line-height: 1.5;
                    &:nth-child(2) {
                        margin-top: 20px;
                        font-size: 20px;
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
    #system-framework {
        .system-framework-title {
            margin-top: 44px;
            text-align: center;
        }
        #system-framework-img {
            height: 482px;
            margin: 0 auto;
            margin-top: 55px;
            padding-top: 187px; 
            text-align: center;
            box-sizing: border-box;
            background-image: url('../../assets/images/government/system-architecture.png');
            background-size: 722px 446px;
            background-repeat: no-repeat;
            background-position: top center;
            .ignore {
                font-size: 14px;
            }
            p {
                span {
                    display: inline-block;
                    width: 50%;
                    margin-top: 225px;
                }
            }
        }
    }

    #business-circulation {
        margin-top: 57px;
        padding-bottom: 21px;
        background-color: #f0f0f0;
        .business-circulation-title {
            margin: 0;
            text-align: center;
            line-height: 2;
        }
        img {
            display: block;
            width: 995px;
            margin: 0 auto;
        }
    }

    .sale-title {
        height: 120px;
        margin: 0;
        text-align: center;
        line-height: 120px;
        background-color: #456173;
    }
    #before-sale {
        margin-top: 20px;
        #before-sale-flow {
            #before-sale-details {
                padding: 55px 40px;
                li {
                    .ignore {
                        font-size: 14px;
                    }
                    .before-sale-index {
                        position: relative;
                        display: flex;
                        justify-content: space-around;
                        margin-bottom: 20px;
                        span {
                            display: inline-block;
                            width: 100px;
                            height: 100px;
                            box-sizing: border-box;
                            line-height: 100px;
                            text-align: center;
                            color: #ffffff;
                            background-color: #456173;
                            border: solid 4px #a6ed8e;
                            border-radius: 50%;
                            z-index: 2;
                        }
                        &:after {
                            content: '';
                            position: absolute;
                            width: 100%;
                            height: 6px;
                            margin-top: 48px;
                            background-color: #a6ed8e;
                        }
                    }
                    .before-sale-content {
                        display: flex;
                        justify-content: space-around;
                        li {
                            position: relative;
                            width: 270px;
                            padding-top: 110px;
                            text-align: justify;
                            p:nth-child(1) {
                                position: absolute;
                                width: 100%;
                                top: 0;
                                text-align: center;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }

    #sale {
        img {
            display: block;
            width: 708px;
            margin: 39px auto 184px auto;
        }
    }
    
    #after-sale {
        ul {
            overflow: hidden;
            display: flex;
            justify-content: space-around;
            margin-top: 37px;
            li {
                width: 320px;
                .after-sale-icon {
                    img {
                        display: block;
                        width: 80%;
                        margin: 0 auto;

                    }
                }
                p {
                    margin-top: 25px;
                }
                .ignore {
                    font-size: 16px;
                    font-weight: normal;
                    text-align: justify;
                }
            }
        }
    }

    #build-result {
        margin-top: 76px;
        padding-bottom: 67px;
        #build-result-content {
            width: 900px;
            margin-left: 138px;
            li {
                position: relative;
                margin-top: 50px;
                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 55px;
                    height: 55px;
                    top: 5px;
                    left: -80px;
                    background-color: #a6ed8e;
                    border-radius: 50%;
                }
            }
        }
    }

    #footer-word {
        height: 120px;
        line-height: 120px;
        font-size: 30px;
        text-align: center;
        font-weight: lighter;
        color: #ffffff;
        background-color: #6396e0;
        .ignore {
            font-size: 18px;
        }
    }
</style>
