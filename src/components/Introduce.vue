<template>
    <div class="introduce">
         <div class="picture">
            <img src="../assets/images/we-introduce.png"/>
         </div>
         <div>
             <p class="title">关于我们</p>
             <p class="content">重庆邮莱特科技有限公司成立于2015年10月，是以云计算、大数据、物联
                网研发和服务为主的高科技创新公司，主要从事云计算平台、大数据智能网络平台、各类业务智
                能系统、物联网及智能终端应用系统等研发与实施。公司拥有多名资深云平台开发工程师、安全
                专家，公司主要技术负责人多次获得省部级科技进步奖。与多家国内外知名公司展开了大数据平
                台、物联网平台、办公自动化、移动安全的全面研发合作，多次获得“优秀合作伙伴”等称号。
                公司旨在为客户提供安全的智能化软件服务，提高客户的工作效率及其在市场的竞争力。</p>
         </div>
         <div>
             <p class="title">合作与发展 </p>
             <div class="content">
                <p>公司客户主要包括国内各大运营商，并为其他国有大中型事业、企业单位    
                    提供“大数据公有、私有云服务”及“互联网+”的全面解决方案。目前在全国6个省市助力7个行业
                    为上亿人提供自主可控、安全便捷的智能化服务。</p>
                <p>公司坚持以客户需求为中心、以员工和创业伙伴为立足之本，坚持不断改善
                    公司管理架构、组织形式、业务流程和考核方式，保障公司的长期有效增长。公司自成立以来，
                    合同额和利润率始终保持50%以上的增长率。在所在行业的业务份额不断增加。</p>
             </div>
         </div>
         <div>
             <p class="title">产品与研发</p>
             <div class="content">
                 <p>公司主要产品涵盖PaaS平台及组件、物联网建设、云平台建设、企业公私网
                络安全接入平台、移动终端综合业务系统、定制化办公自动化系统等。</p>
             <p>在以上领域公司先后获得20余项专利、10余项软件著作权、公司拥有强大
                的研发团队和技术迭代更新的能力。</p>
             </div>
         </div>
         <div>
             <p class="title">企业文化与坚守</p>
             <div class="content">
                <p><strong>与客户共创未来。</strong>邮莱特和运营商一起，为上亿人提供
                    智能服务。邮莱特携手合作伙伴，为政府及公共事业机构，教育、测绘、交通、制造等企业客户，
                    提供开放、灵活、安全的PaaS平台，推动行业“互联网+”转型；为客户提供安全稳定、可信和持续
                    迭代更新的特色云服务。邮莱特的业务系统为几十万从业人员提供友好便捷的工作环境。</p>
                <p><strong>为创新创业者提供平台。</strong>邮莱特坚持“以人为本”，以
                    责任贡献来评价员工和选拔人才，为实习生和正式员工提供了全球化的开发交流平台、使大量在学
                    人员有机会担当重任，快速学习成长。也着力于公司员工通过个人和团队的共同努力，收获合理的
                    回报及无价的创新创业经验。</p>
             </div>
         </div>
         <div>
             <p class="title">公司首席执行官简介</p>
             <div class="content last">
                <p><strong>葛军</strong>，1984年11月出生，2011年硕士研究生毕业。2011年
                    加入腾讯，在腾讯四年的经历中，曾负责腾讯大数据平台研发工作；作为腾讯云COS负责人，负责COS
                    研发和产品设计、产品运营等工作；作为腾讯云CDB负责人，负责CDB产品核心研发和运营。</p>
                <p>2015年成立邮莱特科技有限公司，带领公司按照业内前沿技术架构实施每个产品
                    案例，并提倡公司内部技术不断升级更新，加强公司内部技术交流等。从而使得公司多个产品在业内
                    处于领先地位。</p>
             </div>
         </div>
         <footers></footers>
    </div>
</template>
 
<script>
import Footers from './common/Footers'
export default {
    name: 'introduce',
    components: {
        Footers
    }  
}
</script>

<style lang="scss" scoped>
    .picture{
        img {
            width: 100%;
        }
    }
    .title {
        width: 100%;
        margin-top: 8%;
        background-color: #1358aa;
        height: 80px;
        color: white;
        font-size: 48px;
        font-weight: bold;
        text-align: center;
        line-height: 80px;
    }
    .content {
        width: 88.148%;
        padding-top: 8%;
        margin: 0 auto;
        font-size: 40px;
        text-indent: 2em;
        text-align: justify;
    }
    .last {
        padding-bottom: 20%;
    }
</style>