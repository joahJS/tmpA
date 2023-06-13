//인증 및 자격

import { defineStore } from 'pinia'

export const useCertStore = defineStore('cert', () => {

    //목록
    const certGroup = ref([
        {
            img: '/assets/images/program.png',
            title: '프로그램 등록증',
            isView: false,
        },
        {
            img: '/assets/images/gs.png',
            title: 'GS인증 소프트웨어 품질인증서',
            isView: false,
        },
        {
            img: '/assets/images/iso.png',
            title: 'ISO 9001:2015 인증서',
            isView: false,
        },
        {
            img: '/assets/images/kc.png',
            title: 'KC인증 충격센서 전자파인증',
            isView: false,
        },
        {
            img: '/assets/images/sw.png',
            title: 'SW직접생산확인증명서',
            isView: false,
        },
        {
            img: '/assets/images/rsch.png',
            title: '기업부설연구소 인정서',
            isView: false,
        },
        
    ])


    return { certGroup }
})