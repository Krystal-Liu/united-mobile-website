<template>
    <wc-swiper class="swiper">
        <wc-slide v-for="(slide, key) in slides" :key="key">
            <router-link :to="slide.href">
                <div id="banner-background">
                    <div id="banner-box">
                        <div id="banner-left-word">
                            <p class="ignore">{{ slide.title}}</p>
                            <button>了解详情</button>
                        </div>
                        <div id="banner-img-box">
                            <img :src="slide.src" alt="">
                        </div>
                    </div>
                </div>
            </router-link>
        </wc-slide>
    </wc-swiper>
</template>

<script>
    export default {
        data () {
            return {
                slides: [
                    {
                        title: 'UNlayer高性能负载接入平台',
                        src: require('../../assets/images/unlayer/banner.png'),
                        href: "/Unlayer"
                    },
                    {
                        title: '合作分成管理系统解决方案',
                        src: require('../../assets/images/layer/banner.png'),
                        href: '/Layer'
                    },
                    {
                        title: '渠道支撑解决方案',
                        src: require('../../assets/images/canal/banner.png'),
                        href: '/Canal'
                    },
                    {
                        title: '终端一键式解决方案',
                        src: require('../../assets/images/one-touch/banner.png'),
                        href: '/Onetouch'
                    },
                    {
                        title: '政企全项目管理解决方案',
                        src: require('../../assets/images/government/banner.png'),
                        href: '/Government'
                    }
                ]
            }
        },
    }
</script>

<style lang="scss">
    .swiper {
        a {
            text-decoration: none;
        }
        .wc-pagination {
            .wc-dot {
                width: 24px;
                height: 5px;
                background-color: #ffffff;
                border-radius: 0;
            }
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
                    width: 530px;
                    p {
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
                    button {
                        margin-top: 40px;
                        color: #ffffff;
                        outline: none;
                        background-color: #041123;
                        border: 1px solid #ffffff;
                    }
                }
                #banner-img-box {
                    width: 256px;
                    margin-left: 100px;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>