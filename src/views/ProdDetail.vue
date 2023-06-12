<template>
    <SubPageHero />

    <div class="detail-container mt-20 mx-auto">
        <section v-for="item in cateGroup.filter((c) => c.category === getCate)">
            <div v-if="item.prodNumber == tmpId" id="portfolio-detail-box">
                
                <div class="Pdetail-first-box">
                    <div data-prod-img-box>
                        <img :src="item.thumImg" class="Pdetail-company-img" />
                        <!-- <div class="titleText-box">
                            <strong data-point-titleText>{{ item.explanationTitle }}</strong>
                            <p data-point-bodyText>{{ item.explanationText }}</p>
                        </div> -->
                    </div>
                    <div class="Pdetail-skill-text">
                        <article class="service-text skill-text-list">
                            <p>{{ item.category }}</p>
                            <h3 data-prod-name>{{ item.name }}</h3>
                            <span>특징</span>
                            <div data-prod-subtexts v-html="item.sumText"></div>
                        </article>
                        <article class="funtion-text skill-text-list">
                            <span>주요기능</span>
                            <p> {{item.purpose }} </p>
                        </article>
                    </div>
                </div>

                <div class="Pdetail-second-box">
                    <h4 class=" Pdetail-title">상세정보</h4>
                    <img data-prod-detail-img :src="item.detailImg" alt="">
                    <div class="Pdetail-demand-list">
                        
                        <article class="Pdetail-demand-box" v-for=" demandTitle in item.demand">
                            <span class="dot"></span>
                            <div class="Pdetail-demand-text" >
                                <strong>{{demandTitle.Title }}</strong>
                                <p class="demand-explain" >{{demandTitle.Text}}</p>
                            </div>
                        </article>
                    </div>
                </div>

                <!-- <div class="Pdetail-second-box">
                    <h4 class=" Pdetail-title">요구사항</h4>
                    <div class="Pdetail-demand-list">
                        <article class="Pdetail-demand-box" v-for=" demandTitle in item.demand">
                            <span class="dot"></span>
                            <div class="Pdetail-demand-text" >
                                <strong>{{demandTitle.Title }}</strong>
                                <p class="demand-explain" >{{demandTitle.Text}}</p>
                            </div>
                        </article>
                    </div>
                </div>

                <div class="Pdetail-third-box">
                    <h4 class="Pdetail-title">솔루션</h4>
                    <div class="Pdetail-solution-list">
                        <article class="Pdetail-solution-text">
                            <strong>As-is</strong>
                            <p v-for="asis in item.asIs">{{ asis.text }}</p>
                        </article>
                        <article class="Pdetail-solution-text">
                            <strong>To-be</strong>
                            <p v-for="tobe in item.toBe">{{ tobe.text }}</p>
                        </article>
                    </div>
                </div> -->

                <div class="Pdetail-last-box">
                    <h4 class="Pdetail-title"> 구축사례</h4>
                    <div class="ui-right-img">    
                        <img v-for="imgItem in item.exImg" :src="imgItem.example" alt="">
                    </div>
                </div>

               <div class="detail-btm-buttons">
                    <router-link :to="{name: 'Cates', params: { category: getCate }}">
                        <button class="button-white p-button-white">
                            <p>목 록</p>
                        </button>
                    </router-link>
                </div> 
            </div>
        </section>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
    import { useRoute } from 'vue-router';

    //store에서 영역별 데이터 import
    import { useCateStore } from '@/stores/cateStore'
    import { storeToRefs } from 'pinia';

    const cateStore = useCateStore()
    const { cateGroup } = storeToRefs(cateStore)

    //현재 페이지의 아이디 및 카테고리 식별
    const getParams = useRoute();
    const tmpId = getParams.params.id;
    const getCate = getParams.params.category;

    //현재 페이지와 카테고리, id가 동일한 데이터 배열 가져오기
    const getThisPage = cateGroup.value.find( g => g.category == getCate.toString() && g.prodNumber == tmpId.toString())


</script> <!-- Logic Ends -->

<style lang="scss">
    /** PortfolioDetail.css*/

    .detail-container {
        max-width: 1024px;
        
    }

    [data-prod-img-box] {
        @apply w-full;
    }

    .Pdetail-title {
        @apply font-bold pb-6 mt-20;

        font-family: 'NS-Neo', sans-serif;
    }

    [data-prod-name] {
        @apply font-bold mb-3 pt-1 pb-6;

        font-family: 'NS-Neo', sans-serif;
    }

    .Pdetail-company-img {
        @apply rounded-md w-full h-full;

        aspect-ratio: 16/9;

    }

    .Pdetail-first-box {
        @apply grid gap-10;

        grid-template-columns: 1fr 1fr;
    }

    .Pdetail-skill-text {
        @apply p-7 rounded-md basis-2/5;

        background-color: rgba(var(--clr-id-02), .05);
    }

    .skill-text-list {
        @apply flex flex-col gap-2 mb-5;

        > span {
            @apply font-bold mb-1;

            font-size: var(--fnt-lg);
        }
    }

    [data-prod-subtexts] {
        line-height: 1.625;

        p {
            &:before {
                @apply inline-block;

                content: '-';
                margin-right: .5rem;
            }
        }
    }

    [data-point-titleText] {
        @apply py-1 inline-block;

        font-size: var(--fnt-lg);
    }

    [data-point-bodyText] {
        @apply break-keep mt-1 leading-4;
    }

    .Pdetail-second-box {
        @apply flex flex-col
    }

    .Pdetail-demand-list,
    .Pdetail-solution-list {
        @apply grid gap-4;

        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }

    .Pdetail-demand-box {
        @apply py-7 px-5 rounded-sm flex items-center gap-8;

        background-color: rgba(var(--clr-id-02), .2);
        font-size: var(--fnt-title-sm);
    }

    .Pdetail-demand-text {
        width: calc(100% - 1rem);
    }

    .dot {
        @apply w-3 h-3 inline-block;

        background-color: rgb(var(--clr-id-02));
    }

    .demand-explain {
        @apply pt-2.5;

        font-size: var(--fnt-lg);
    }

    .Pdetail-solution-text {
        @apply py-7 px-5 rounded-sm flex flex-col justify-center gap-5;

        > p{
            @apply leading-4 ml-4;

            text-indent: -14px;
            
            &::before{
                content: '- ';
            }
        }

        background-color: rgba(var(--clr-id-02), .05);
        font-size: var(--fnt-lg);
    }


    [data-prod-detail-img] {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }

    // .ui-left-img {
    //     > img {
    //         @apply rounded-sm object-contain;
    //     }
    // }

    .ui-right-img {
        @apply grid gap-1;

        // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-template-columns: repeat(4, 1fr);

        > img {
            @apply rounded-sm object-contain;

            &:hover {
                transform: scale(1.05);
                transition: .5s;
            }
        }

    }
    
    .p-button-white{
        @apply py-1.5 px-6 mt-10;
    }

    .portfolio-img:hover {
        img {
            transform: scale(1.1);
        }
    }

    /*portfolioDetail 반응형*/
    @media screen and (max-width: 1024px) {
        .Pdetail-first-box{
            @apply flex-col gap-3;
        }

        .titleText-box{
            @apply my-5;
        }
    }

    @media screen and (max-width: 720px) {
        .Pdetail-title{
            @apply mt-10;
        }

        [data-point-titleText]{
            font-size: var(--fnt-md);
        }

        [data-point-bodytext]{
            @apply leading-4
        }

        .Pdetail-demand-list, .Pdetail-solution-list{
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        }

        .Pdetail-demand-box,
        .Pdetail-solution-text{
            @apply py-4 px-3 gap-5;

            font-size: var(--fnt-md);
        }

        .demand-explain{
            font-size: var(--fnt-md);
            line-height: 1.4;
        }

        .Pdetail-skill-text{
            @apply p-4 pt-8;
        }
    }
</style> <!-- Stylesheet Ends -->