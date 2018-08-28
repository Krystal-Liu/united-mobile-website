<template>
    <wc-swiper class="swiper">
        <wc-slide v-for="(slide, key) in slides" :key="key">
            <router-link :to="slide.href">
                <div id="banner-background">
                    <div id="banner-box">
                        <div id="banner-left-word">
                            <p class="ignore">{{ slide.title}}</p>
                            <button><span class="ignore">了解详情</span></button>
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
                        src: 'https://image-1256648750.file.myqcloud.com/mobile/banner.55b3a57.png',
                        href: "/Unlayer"
                    },
                    {
                        title: '合作分成管理系统解决方案',
                        src: 'https://image-1256648750.file.myqcloud.com/mobile/banner.f530981.png',
                        href: '/Layer'
                    },
                    {
                        title: '渠道支撑解决方案',
                        src: 'https://image-1256648750.file.myqcloud.com/mobile/banner.04d130f.png',
                        href: '/Canal'
                    },
                    {
                        title: '终端一键式解决方案',
                        src: 'https://image-1256648750.file.myqcloud.com/mobile/banner.9909ff9.png',
                        href: '/Onetouch'
                    },
                    {
                        title: '政企全项目管理解决方案',
                        src: 'https://image-1256648750.file.myqcloud.com/mobile/banner.048720c.png',
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
                    width: 560px;
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
                        display: block;
                        width: 200px;
                        margin-top: 40px;
                        color: #ffffff;
                        outline: none;
                        background-color: #041123;
                        border: 1px solid #ffffff;
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
    }
</style>