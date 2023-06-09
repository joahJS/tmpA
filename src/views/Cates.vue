<template>
    <SubPageHero />

    <div v-for="item in cateExp" class="container mt-20 mx-auto">
        <section id="solution-box">
            <div class="solution-top-img">
                <article class="basis-3/6">
                    <div class="M-title">
                        <span>{{ item.title }}</span>
                        <h3 class="font-bold pb-6 pt-1">{{ item.titleEn }}</h3>
                    </div>
                    <img src="@/assets/images/main-category-web.jpg" class="solution-in-img"/>
                </article>
                <article class="basis-3/6">
                    <span class="D-title">{{ item.title }}</span>
                    <h3 class="D-title font-bold pb-6 pt-1">{{ item.titleEn }}</h3>
                    <p>
                        <strong class="solution-definition-subTitle">개요</strong>
                        <article v-html="item.cateText" class="solution-definition-text">

                        </article> 
                    </p>
                    <article v-html="item.tag" class="solution-tag">

                    </article>
                </article>
            </div>

            <!-- <div class="solution-mid-result">
                <h4 class="font-bold pb-6">도입효과</h4>
                <div class="solution-result-list">
                    <article class="solution-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>신뢰도 있는 공정관리</strong>
                            <p class="result-explain">수기로 작성은 이제그만~! </p>
                        </div>
                    </article>
                    <article class="solution-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>생산성 향상 및 비용절감</strong>
                            <p class="result-explain">재고관리 및 데이터수집과 분석의 자동화</p>
                        </div>
                    </article>
                    <article class="solution-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>실시간 모니터링</strong>
                            <p class="result-explain">신속한 정보파악 및 불량 문제점 해결</p>
                        </div>
                    </article>
                    <article class="solution-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>모바일 지원</strong>
                            <p class="result-explain">PC뿐 아니라 언제 어디서나 모바일로 관리 및 모니터링 가능</p>
                        </div>
                    </article>
                </div>
            </div> -->

            <div class="site-bottom-portfolio">
                    <h4 class="font-bold pb-6">구축사례</h4>
                    <div class="portfolio-contents webApp">
                        <article class="portfolio-list" >
                            <figure v-for="item in cateGroup.filter((c) => c.category == getCate)" class="portfolio-img-box">
                                <router-link :to="{name: 'ProdDetail', params: {id: item.prodNumber, category: item.category }}">
                                    <div class="portfolio-img">
                                        <img :src="item.thumImg">
                                        <figcaption data-portfolio-text>
                                            {{ item.subname }}
                                        </figcaption>
                                    </div>
                                    <div class="portfolio-title">
                                        <h4>{{item.name}}</h4>
                                        <span data-portfolio-subTitle-tag>{{item.tag}}</span>
                                    </div>
                                </router-link>
                            </figure>
                        </article>
                    </div>  
            </div>
        </section><!--Solution-box-->
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
    import { useRoute } from 'vue-router'

    //store에서 영역별 데이터 import
    import { useCateStore } from '@/stores/cateStore'
    import { storeToRefs } from 'pinia';

    const cateStore = useCateStore()
    const { cateGroup, cateExp } = storeToRefs(cateStore)

    //현재 페이지의 카테고리 식별
    const getParams = useRoute();
    const getCate = getParams.params.category
    
    

    
</script> <!-- Logic Ends -->

<style lang="scss">
    /** SolutionDev.css*/

    .M-title{
        display:none;
    }

    .solution-definition-subTitle{
        @apply inline-block py-3 ;

        font-size: var(--fnt-lg);
    }

    .solution-definition-text{
        @apply leading-relaxed
    }

    .solution-top-img {
        @apply flex gap-10 items-start;

        margin-bottom: 4rem;
    }

    .solution-in-img {
        @apply rounded-md object-cover;
        aspect-ratio: 16/9;
    }

    .solution-tag {
        @apply flex mt-4;

        > p{
            @apply p-2 m-2 ;

            background-color: rgb(var(--clr-id-02));
            color: rgb(var(--clr-inter-pane));
        }
    }

    .solution-mid-result {
        @apply my-16;

        font-family: 'NS-Neo', sans-serif;
    }

    .solution-result-list {
        @apply grid gap-4;

        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }

    .solution-result-text {
        @apply py-7 px-5 rounded-sm flex items-center gap-8;

        background-color: rgba(var(--clr-id-01), .6);
        font-size: var(--fnt-title-sm);
    }

    .dot {
        @apply w-3 h-3 inline-block flex-shrink-0 ;

        background-color: rgb(var(--clr-id-02));
    }

    .result-explain {
        @apply pt-2.5 ;

        font-size: var(--fnt-lg);
    }

    /*SolutionDev 반응형*/
    @media screen and (max-width: 1024px) {
        .D-title{
            display: none
        }

        .M-title{
            display: block
        }

        .solution-top-img{
            @apply flex-col gap-3;
        }
    }

    @media screen and (max-width: 720px) {
        .solution-result-text{
            @apply py-4 px-3 gap-5;

            font-size: var(--fnt-md);

            .result-explain{
                font-size: var(--fnt-md);
                line-height: 1.4;
            }
        }

        .solution-result-list{
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        }
    }

    @media screen and (max-width: 425px) {
        .solution-tag{

            > p {
                @apply p-1 m-1 ;
            }
        }
    }
</style> <!-- Stylesheet Ends -->