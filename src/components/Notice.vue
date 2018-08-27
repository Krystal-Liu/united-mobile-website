<template>
    <div class="notice">
        <div class="top">
            <p>公司公告</p>
        </div>
        <div id="content-list">
            <ul>
                <li v-for="(item,index) in items" @click="jumpDetails(item)">
                    <div id="content-list-li-ct">
                        <p class="content-list-li-title">{{item.announceTitle}}</p>
                        <p class="content-list-li-details">{{item.time}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <paginations :page-index = "currentPage" :total = "count" :page-size="pageSize" @change = "pageChange"></paginations>
    </div>
</template>

<script>
import Paginations from './common/paginations.vue'
import {getNoticeList} from '../api.js'
export default {
    name: 'notice',
    data () {
        return {
            pageSize : 3, //每页显示20条数据
            currentPage : 1, //当前页码
            count : 100, //总记录数
            items: [
                {
                    announceTitle: '新闻一',
                    time: '',
                }
            ]
        } 
    },
    components: {
        Paginations
    },
    methods: {
        getList() {
            let params = this.currentPage;
            getNoticeList(params).then(res => {
                for (let i in res.list) {
                    res.list[i].time = this.changeTime(res.list[i].time);
                }
                this.items = res.list;
                this.count = res.total
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
            return year + '-' + month + '-'+day
        },
        jumpDetails(item) {
            console.log(item.aid);
            this.$router.push({
                path: '/notice/details',
                query: {
                    aid: item.aid
                }
            })
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
    #content-list {
        width: 88.888%;
        margin: 0 auto;
        ul li {
            margin-top: 2.10%;
           cursor: pointer;
            &:nth-child(1) {
                margin-top: 4.10%;
            }
            #content-list-li-ct {
                font-size: 40px;
                line-height: 2;
                cursor: pointer;
                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                p {
                    float: left;
                    width: 50%;
                }
                .content-list-li-title{
                    font-size: 40px;
                }
                .content-list-li-details {
                    font-size: 38px;
                    line-height: 2;
                }
            }
        }
    }
    .mo-paging {
        margin: 4% auto;
    }
</style>