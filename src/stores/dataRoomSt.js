//자료실 - 목록, 상세페이지

import { defineStore } from 'pinia'

export const useDataRoomStore = defineStore('dataRoom', () => {

    // 목록

    const listPreview = ref([
        {
            url: '/dataroom/',
            children: [
                
                {
                    number: 0,
                    title:'고객용 원격지원 설치파일 다운로드',
                    date:'2022.11.12',
                    password: null,
                    lock: false,
                    modals: false
                },
                {
                    number: 1,
                    title:'영상 샘플01',
                    date:'2023.05.08',
                    password: '2',
                    lock: true,
                    modals: false
                },
                {
                    number: 2,
                    title:'영상 샘플01',
                    date:'2023.05.09',
                    password: '3',
                    lock: true,
                    modals: false
                },
               
            ]

        },
    ])

    //상세페이지

    const dataGroup = ref([
        
        {
            bindIndex: 0,
            title: '고객용 원격지원 설치파일 다운로드 ',
            date: '2022.11.12',
            views: 175,
            texts: '고객용 원격지원 설치파일 다운로드',
            uploaded: [
                {fileName:'/public/client.exe', name:'고객용 원격지원 설치파일.exe'}
            ],
            password: null,
            lock: false,
            modals: false
        },
        {
            bindIndex: 1,
            title: '영상 샘플01',
            date: '2023.05.08',
            views: 6,
            texts: '영상 샘플 01 파일입니다..',
            uploaded: [
                {fileName:'/public/dataSample01.mp4', name:'dataSample01.mp4'},
            ],
            password: '2',
            lock: true,
            modals: false            
        },
        {
            bindIndex: 2,
            title: '영상 샘플02',
            date: '2023.05.09',
            views: 7,
            texts: '영상 샘플02 파일입니다.',
            uploaded: [
                {fileName:'/public/dataSample02.mp4', name:'dataSample02.mp4'},
            ],
            password: '3',
            lock: true,
            modals: false
        },
        
    ])


    return { listPreview, dataGroup }
})

