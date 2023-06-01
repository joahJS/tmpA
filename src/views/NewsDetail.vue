<template>
    <SubPageHero />

    <section v-if="newsGroup.children[getId]" class="container div-main-text">
        <div id="divSearchLine">
            <select data-totalsearch-select>
                <option value="cd-total">전체</option>
                <option value="cd-title">제목</option>
                <option value="cd-day">날짜</option>
            </select>

            <div class="line-vr"></div>
            <input data-totalsearch-input type="text">
            <button data-search-button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            </button>
        </div>

        <div id="divNewsDetail">
            <div id="divDetailTitle"><!-- 제목영역 -->
                <p data-News-detail-title>{{ newsGroup.children[getId]?.title }}</p>
                <div id="divTitleBottom">
                    <p data-title-date>{{newsGroup.children[getId]?.date}}</p>
                    <p data-title-hits>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                        {{newsGroup.children[getId]?.views}}
                    </p>
                </div>
            </div>

            <div id="divDetailText"><!-- 본문영역 -->
                <div id="imgContainers">
                    <swiper :pagination="{ clickable: true }" watch-slides-progress @swiper="setThumbsSwiper" v-bind="swiperOptions01" class="recent-article-slider"> 
                        <swiper-slide v-for="subImg in newsGroup.children[getId]?.imgAll" class="div-work-ing">
                            <img :src="subImg.img" />
                        </swiper-slide>
                        <div class="arr-right-report"></div>
                        <div class="arr-left-report"></div>
                    </swiper>

                    <div class="recent-article-pagination">
                        <button type="button">
                            <i class="ri-arrow-left-s-line arr-left-news"></i>
                        </button>

                        <button type="button">
                            <i class="ri-arrow-right-s-line arr-right-news"></i>
                        </button>
                    </div>
                </div>
                <!-- <div class="grid grid-cols-3 gap-1">
                    <div v-for="subImg in newsGroup.children[getId]?.imgAll" class="div-work-ing">
                        <img :src="subImg.img" />
                    </div>
                </div> -->

                <p v-for="subtext in newsGroup.children[getId]?.textAll">
                    {{ subtext.texts }}
                </p>
            </div>

            <div id="divMileStone">
                <a href="#" v-if="0 > prevArticle" ref="prevLink">
                    <div id="divMilePrev">
                        <p>이전 글</p>
                        <p data-milestone-prev-title>이전 글이 없습니다.</p>
                        <p data-milestone-prev-date>-</p>
                    </div>
                </a>

                <a :href="'/news/' + (getId - 1)" v-else ref="prevLink">
                    <div id="divMilePrev">
                        <p>이전 글</p>
                        <p data-milestone-prev-title>{{ newsGroup.children[getId - 1]?.title }}</p>
                        <p data-milestone-prev-date>{{ newsGroup.children[getId - 1]?.date }}</p>
                    </div>
                </a>

                <a :href="'/news/' + (getId + 1)" v-if="nextArticle < dataAmount" ref="nextLink">
                    <div id="divMileNext">
                        <p>다음 글</p>
                        <p data-milestone-next-title>{{ newsGroup.children[getId + 1]?.title }}</p>
                        <p data-milestone-next-date>{{ newsGroup.children[getId + 1]?.date }}</p>
                    </div>
                </a>

                <a href="#" v-else ref="nextLink">
                    <div id="divMileNext">
                        <p>다음 글</p>
                        <p data-milestone-next-title>다음 글이 없습니다.</p>
                        <p data-milestone-next-date>-</p>
                    </div>
                </a>
            </div>
        </div>

        <div class="detail-btm-buttons"><!-- 목록 하단 버튼라인 -->
            <router-link :to="{name: 'News'}">
                <button class="button-white">
                    <p>목 록</p>
                </button>
            </router-link>
            <!-- <router-link :to="{name: 'NewsWr', params: {id: newsGroup.children[getId - 1].number}}">
                <button class="button-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
                    <p>수 정</p>
                </button>
            </router-link> -->
        </div>
    </section>
</template>

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
    import { useRoute } from 'vue-router'

    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, Autoplay, Controller, Thumbs } from 'swiper';

    // Import Swiper
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/controller';
    import 'swiper/css/autoplay';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/thumbs';

    const swiperOptions01 = {
        // Install modules
        modules: [Navigation, Pagination, Scrollbar, Autoplay],
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.arr-right-news',
            prevEl: '.arr-left-news',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    }

    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
    };

    const getParams = useRoute()
    const getId = parseInt(getParams.params.id)


    const newsGroup = ref({
        url: '/news/',
        children: [
            {
                number: 0,
                category: '행사',
                title: '겨울이 다가오는 워크샵 현장에서',
                date: '2021.12.03',
                views: '120',
                imgAll: [
                    {img: '/public/image/news/news_04.jpg'},
                    {img: '/public/image/news/news_04_01.jpg'}
                ],
                textAll: [
                    {texts: '21년도 워크샵이 진행되었습니다.'},
                    {texts: '소나무인들이 함께한 즐거운 밤의 모습'},
                ]
            },
            {
                number: 1,
                thumImg: '/public/image/news/2m_edu_01.jpg',
                category: '기타',
                title: '22년도 상반기 산업안전보건교육',
                date: '2022.02.14',
                views: '139',
                imgAll: [
                    {img: '/public/image/news/2m_edu_01.jpg'},
                    {img: '/public/image/news/2m_edu_02.jpg'}
                ],
                textAll: [
                    {texts: '의무안전교육인 산업안전보건교육이 실시되었습니다.'},
                    {texts: '수고해주신 강사님께 감사의 말씀을 전합니다.'},
                ]
            },
            {
                number: 2,
                category: '회의',
                title: '커브길 스마트 가드레일 우수조달신청 진행을 위한 조달청 주최 컨설팅 회의',
                date: '2022.06.16',
                views: '77',
                imgAll: [
                    {img: '/public/image/news/news_05_02.jpg'},
                    {img: '/public/image/news/news_05_01.jpg'},
                ],
                textAll: [
                    {texts: '22년도 4차 우수조달신청 전 서울에서 개최된 컨설팅 회의가 진행되었습니다.'},
                    {texts: '스마트 가드레일 시스템 모니터링 SW의 성공적인 우수조달 진행을 위하여 모여주신 모든 분들께 감사드립니다.'},
                ]
            },
            {
                number: 3,
                thumImg: '/public/image/news/news_02.jpg',
                category: '행사',
                title: '22년도 하반기 스마트가드레일 성과공유회 워크샵 with 동의과학대학교 산학협력단',
                date: '2022.07.03',
                views: '148',
                imgAll: [
                    {img: '/public/image/news/news_02.jpg'},
                ],
                textAll: [
                    {texts: '22년도 하반기 ICT융합디바이스개발사업 스마트가드레일의 성과공유회가 진행되었습니다.'},
                    {texts: '해당 사업을 함께 진행한 참여기업 동의과학대학교 산학협력단과 함께한 자리입니다.'},
                ]
            },
            {
                number: 4,
                thumImg: '/public/image/news/news_03.jpg',
                category: '기타',
                title: '22년도 산업안전보건교육',
                date: '2022.08.23',
                views: '105',
                imgAll: [
                    {img: '/public/image/news/news_03.jpg'},
                    {img: '/public/image/news/news_03_02.jpg'}
                ],
                textAll: [
                    {texts: '금년도 하반기 산업안전보건교육이 진행되었습니다.'},
                    {texts: '수고해주신 강사님께 감사의 말씀을 전합니다.'},
                ]
            },
            {
                number: 5,
                thumImg: '/public/image/news/safe_01.jpg',
                category: '기타',
                title: '[커브길 스마트 세이프 가드레일] 대한민국 안전산업박람회 참가',
                date: '2022.10.11',
                views: '141',
                imgAll: [
                    {img: '/public/image/news/safe_01.jpg'},
                    {img: '/public/image/news/safe_02.jpg'},
                    {img: '/public/image/news/safe_03.jpg'}
                ],
                textAll: [
                    {texts: '행정안전부, 산업통상자원부 주최 하에 10월 12일 ~ 10월 14일 3일간 EXCO에서 한국안전산업박람회가 진행되었습니다.'},
                    {texts: '소나무정보기술은 교통안전 품목에 커브길 스마트 세이프 가드레일로 참가하였습니다.'}
                ]
            },
            {
                number: 6,
                thumImg: '/public/image/news/news_01.jpg',
                category: '행사',
                title: '소나무정보기술 워크샵-캠프파이어가 있는 밤',
                date: '2022.11.04',
                views: '172',
                imgAll: [
                    {img: '/public/image/news/news_01.jpg'},
                    {img: '/public/image/news/news_01_01.jpg'},
                    {img: '/public/image/news/news_01_02.jpg'},
                    {img: '/public/image/news/news_01_03.jpg'},
                    {img: '/public/image/news/news_01_04.jpg'},
                    {img: '/public/image/news/news_01_05.jpg'},
                ],
                textAll: [
                    {texts: '22년도 소나무정보기술 워크샵이 진행되었습니다.'},
                    {texts: '즐거운 추억을 함께한 밤이 되었기를 바랍니다.'},
                ]
            },
            {
                number: 7,
                thumImg: '/public/image/news/news_07.jpg',
                category: '행사',
                title: 'ICT 융합 디바이스 기술개발사업 기술공유 워크샵',
                date: '2022.12.15',
                views: '172',
                imgAll: [
                    {img: '/public/image/news/ht_01.jpg'},
                    {img: '/public/image/news/ht_02.jpg'},
                    {img: '/public/image/news/ht_03.jpg'},
                    {img: '/public/image/news/ht_04.jpg'},
                    {img: '/public/image/news/ht_05.jpg'},
                    {img: '/public/image/news/ht_06.jpg'},
                    {img: '/public/image/news/ht_07.jpg'}
                ],
                textAll: [
                    {texts: '2021-2022년간 진행되어온 커브길 스마트 세이프 가드레일 시스템 마무리를 앞두고 기술공유 워크샵이 진행되었습니다.'},
                ]
            },
            {
                number: 8,
                category: '행사',
                title: '동의대학교-(주)소나무정보기술 기술교류회',
                date: '2023.02.01',
                views: '108',
                thumImg: '/public/image/news/DEI/DEI_12.jpg',
                imgAll: [
                    {img: '/public/image/news/DEI/DEI_01.jpg'},
                    {img: '/public/image/news/DEI/DEI_02.jpg'},
                    {img: '/public/image/news/DEI/DEI_03.jpg'},
                    {img: '/public/image/news/DEI/DEI_04.jpg'},
                    {img: '/public/image/news/DEI/DEI_05.jpg'},
                    {img: '/public/image/news/DEI/DEI_06.jpg'},
                    {img: '/public/image/news/DEI/DEI_07.jpg'},
                    {img: '/public/image/news/DEI/DEI_08.jpg'},
                    {img: '/public/image/news/DEI/DEI_09.jpg'},
                    {img: '/public/image/news/DEI/DEI_10.jpg'},
                    {img: '/public/image/news/DEI/DEI_11.jpg'},
                    {img: '/public/image/news/DEI/DEI_12.jpg'},
                ],
                textAll: [
                    {texts: '동의대학교 산학협력단-주식회사 소나무정보기술 간의 기술교류회가 진행되었습니다.'},
                    {texts: '그간 연구개발되어온 산학과제, R&D과제 등의 결과를 나누는 뜻깊은 시간이 되었습니다.'},
                ]
                
            },
            
            {
                number: 9,
                thumImg: '/public/image/news/smt_02.jpg',
                category: '기타',
                title: '2023년 중소기업 스마트서비스 지원사업 사업설명회',
                date: '2023.02.09',
                views: '117',
                imgAll: [
                    {img: '/public/image/news/smt_01.jpg'},
                    {img: '/public/image/news/smt_02.jpg'},
                    {img: '/public/image/news/smt_03.jpg'}
                ],
                textAll: [
                    {texts: '한국경영혁신중소기업협회 주관 하에 중소기업 스마트서비스 지원사업의 사업설명회가 진행되었습니다.'},
                    {texts: '참여하신 모든 분들 수고많으셨습니다.'},
                ]
            },
           
            
            
        ]
    })

    const nextArticle = parseInt(getId + 1);
    const prevArticle = parseInt(getId - 1);

    const currentArray = newsGroup.value;
    const currentChildren = currentArray['children'];
    const getValue = currentChildren[getId];
    const getNumber = parseInt(getValue['number']);

    const dataAmount = currentChildren.length;
</script>

<style lang="scss" scoped>
    #divNewsDetail {
        @apply w-full border-black border-t-2;
    }

/* 본문 */

    #divDetailText {
        @apply pt-4 pb-8;

        > img {
            @apply mb-2 mx-auto w-full;
        }

        > p {
            font-size: var(--fnt-md);
            color: rgba(var(--clr-inter-shade), 1);

            @apply py-1;
        }
    }

    #divMileStone {
        @apply border-y-2 border-black flex flex-col;

        > div {
            @apply grid py-2 cursor-pointer;

            grid-template-columns: 5rem 1fr 7rem;
            font-size: var(--fnt-md);
            color: rgba(var(--clr-inter-shade), 1);

            & + div {
                border-top: 1px solid rgba(var(--clr-inter-shade), .15);
            }
        }
    }

    [data-milestone-prev-title], [data-milestone-next-title] {
        @apply pl-4;
    }

    [data-News-detail-title] {
        font-size: var(--fnt-title-sm);

        @media screen and (width < 1024px) {
            @apply font-bold;

            font-size:var(--fnt-md);
        }
    }

    #divTitleBottom {
        @apply flex mt-2;
    }

    [data-title-hits] {
        @apply flex items-center;

        &:before {
            content: '';
            background: rgba(var(--clr-inter-shade), .25);

            @apply inline-block h-2 w-px mx-2;
        }

        > svg {
            @apply w-3 mr-2;
        }
    }

    [data-milestone-prev-date], [data-milestone-next-date] {
        @apply text-center;
    }

    .div-work-ing {
        @apply w-full bg-slate-100 flex items-center justify-center mb-6;

        font-size: var(--fnt-title-sm);
        min-height: 5rem;
    }

    #divDetailText {
        .swiper-slide {
            img {
               max-width: 100%;
            }
        }
        
    }
</style>