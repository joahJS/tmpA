//사업분야 - 카테고리, 목록, 상세페이지

import { defineStore } from "pinia";

export const useCateStore = defineStore('cate', () => {


    //카테고리

    const cateExp = ref([
        {
            category: 'sidewalk',
            title: '보도용/차도용',
            titleEn: 'Block for road & Sidewalk',
            thumImg: '/public/image/prod/thumImg/block_sample01.jpg',
            cateText: `
                <p>보도용 콘크리트 블록은 도시 공간의 향상과 보행자의 안전을 중요시하는 도로 건설 현장이나 도보 친화적인 지역에서 널리 사용됩니다. </p>
                <p>도시의 미적 가치를 높이며, 보행자들에게 안전하고 편안한 환경을 제공합니다.</p>
            `,
            tag: `
                <p>콘크리트보도</p>
                <p>보행안전확보</p>
                <p>도시미적가치향상</p>
            `,
        }
    ])

    // 목록, 상세

    const cateGroup = ref([

        // linkTo: '/portfolio/solutions/',
        // cate: 'solutions',
        // children: [
        {
            category: 'sidewalk',
            prodNumber: 0,
            name: '스팟 워싱블록(인조 화강블록)',
            subname: '간결하면서도 도시적이고 세련된 이미지',
            thumImg: '/public/image/prod/thumImg/block_sample01.jpg',
            detailImg: '/public/image/prod/samhwa1.jpg',
            exImg: [
                { example: '/public/image/prod/thumImg/block_sample01.jpg' },
                { example: '/public/image/prod/thumImg/block_sample01.jpg' },
                { example: '/public/image/prod/thumImg/block_sample01.jpg' },
            ],
            tag:'도시적인', 
            sumText: `
                <p>다양한 천연골재로 성형한 후 물과 에어로 워싱 처리</p>
                <p>자연석과 같은 질감으로 시공 시 자연친화적 풍경 연출</p>
                <p>미끄럼 방지, 투수 기능을 가짐으로써 보행자 안전 도모</p>
            `,
            purpose: '공원 산책로, 주차장, 휴게소, 자전거도로, 보도, 차도 등에 폭넓게 사용',
        },
        {
            category: 'sidewalk',
            prodNumber: 1,
            name: 'U형 블록',
            serviceText: '결합식으로 뒤틀림이 없으며, 강도가 높고 시공이 간단함',
            thumImg: '/public/image/prod/thumImg/block_sample02.jpg',
            detailImg: '/public/image/prod/samhwa2.jpg',
            tag:'안정적인',
            sumText: `
                <p>결합식 인터록킹 블록으로 제작되어 포장면의 뒤틀림이 없음</p>
                <p>블록과 블록이 맞물려 역학적으로 안정적인 구조</p>
                <p>시공이 간편하여 포장비용이 저렴하고 포장시간이 단축됨</p>
                <p>포장 즉시 사용 가능(교통장애가 없음)</p>
            `,
            purpose: '보도, 차도, 주차장, 공원주변, 정원 방파재',
        },
        {
            category: 'etc',
            prodNumber: 2,
            name: '잔디 블록',
            serviceText: '취급이 용이하며 잔디번식에 유리함',
            thumImg: '/public/image/prod/thumImg/block_sample03.jpg',
            detailImg: '/public/image/prod/samhwa3.jpg',
            tag:'잔디 식생이 유리한',
            sumText: `
                <p>시공이 뛰어나고 취급이 용이</p>
                <p>기존 제품에 비하여 잔디식생 면적이 20% 넓음</p>
                <p>블록으로 주차선 표시 가능(페인트칠 필요 X)</p>
                <p>잔디 번식이 용이함(답압 방식 홈 구성)</p>
            `,
            purpose: '보도 및 차도, 광장, 학교, 공원, 산책로 등의 식생용 바닥 포장재',

        },
        {
            category: 'etc',
            prodNumber: 3,
            name: '조경 경계블록',
            serviceText: '곡선을 만들 수 있으며 저렴한 가격이 특징',
            thumImg: '/public/image/prod/thumImg/block_sample04.jpg',
            detailImg: '/public/image/prod/samhwa4.jpg',
            tag:'다목적 경계용',
            sumText: `
                <p>곡선을 만들 수 있고 가격이 저렴함</p>
                <p>보도 및 주차장공원 주변 정원 미관 및 화단경계, 조경용으로 사용</p>
            `,
            purpose: '정원미관 및 화단경계, 조경',
        },

    // ]
        
    ])

    return { cateGroup, cateExp }

})