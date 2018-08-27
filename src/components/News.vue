<template>
    <div class="news">
        <div class="top">
            <p>公司新闻</p>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in items" @click="jumpDetails(item)">
                    <div id="content-list-li-pic-box">
                        <div class="content-list-li-pic">
                            <img :src="item.img"/>
                        </div>
                    </div>
                    <div id="content-list-li-ct">
                        <div class="content-list-li-details" v-html="item.markdown"></div>
                        <p class="content-list-li-time">{{changeTime(item.time)}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <paginations :page-index = "currentPage" :total = "count" :page-size="pageSize" @change = "pageChange"></paginations>
    </div>
</template>

<script>
    import Paginations from './common/paginations.vue'
    import {getNewsList} from '../api.js'
    import marked from 'marked'
    export default {
        name: 'news',
        data () {
            return {
                pageSize: 3, //每页显示20条数据
                currentPage: 1, //当前页码
                count: 100, //总记录数
                items: []
            }
        },
        components: {
            Paginations
        },
        methods: {
            getList () {
                let params = this.currentPage;
                getNewsList(params).then(res =>{
                    // console.log(res)
                    for (let i=0; i<res.list.length;i++) {
                        res.list[i].markdown = this.breakWords(res.list[i].markdown);
                    }
                    this.items = res.list;
                    this.count = res.total;
                })
            },
            pageChange(page) {
                this.currentPage = page
                this.getList();
            },
            changeTime(timestamp) {
                let date = new Date(timestamp);
                let year = date.getFullYear();
                let month = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
                let day = date.getDate();
                return year + '/' + month + '/'+day
            },
            jumpDetails(item) {
                console.log(item.nid);
                this.$router.push({
                    path: '/news/details',
                    query: {
                        nid: item.nid
                    }
                })
            },
            breakWords(markdown) {
                // match返回的是一个数组
                let html = marked(markdown).match(/<p[^>]*>(?:(?!<\/p>)[\s\S])*<\/p>/)[0];
                let result = html.slice(0,45) + '...' + '</p>';
                return result
            }
        },
        mounted() {
            this.getList();
        }
    }
</script>

<style lang="scss" scoped>
    .top {
        height: 120px;
        background-color: #0c1531;
        overflow: hidden;
        p {
            margin-left: 8%;
            margin-top: 3%;
            color: white;
            font-size:36px;
        }
    }
    .content {
        width: 88.888%;
        margin: 0 auto;
        ul li {
            position: relative;
            margin-top: 4.10%;
            overflow: hidden;
            cursor: pointer;
            #content-list-li-pic-box {
                position: relative;
                float: left;
                width: 29.7916%;
                height: 175px;
                .content-list-li-pic {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    img {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            #content-list-li-ct {
                float: left;
                width: 64%;
                height: 100%;
                margin-left: 5.56%;
                .content-list-li-details {
                    font-size: 36px;
                    text-align: justify;
                    word-break: break-all;
                }
                .content-list-li-time {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    font-size: 32px;
                }
            }
        }
    }
    .mo-paging {
        margin: 4% auto;
    }
</style>