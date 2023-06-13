<template>
    <SubPageHero />

    <div class="container mt-20 mx-auto">
        <section id="certificate-box">
            <div class="certificate-img-list" >
                <article v-for="item in certGroup">
                    <img :src="item.img" @click="item.isView = !item.isView" alt="인증서 썸네일 이미지">
                    <p class="certificate-label">{{ item.title }}</p>
                    <div v-if="item.isView == true" data-cert-modal>
                        <img :src="item.img" alt="인증서 자세히보기" @click="item.isView = !item.isView">
                    </div>
                </article>
 
            </div>
        </section> <!--certificate-box-->
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'

    //store에서 영역별 데이터 import
    import { useCertStore } from '@/stores/certSt'
    import { storeToRefs } from 'pinia';

    const certStore = useCertStore()
    const { certGroup } = storeToRefs(certStore)

    const showMod = ref(false)

</script> <!-- Logic Ends -->

<style lang="scss">

    .certificate-img-list {
        @apply grid pr-2;

        gap: 2rem 1rem;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        
        img {
            filter: drop-shadow(0 0 8px rgba(var(--clr-text), .2));
            cursor: pointer;
        }

        @media screen and (max-width: 1024px) {
            @apply gap-x-2 gap-y-6;

            grid-template-columns: 50% 50%;
        }

        @media screen and (max-width: 400px) {
            @apply pr-0;
            
            grid-template-columns: 1fr;
        }
    }

    .certificate-label {
        @apply p-2 mt-1 text-center;

        background-color: rgba(var(--clr-id-02), .8);
        color: rgb(var(--clr-inter-pane));
        font-size: var(--fnt-lg);

        @media screen and (max-width: 1024px) {
            @apply break-keep leading-3 flex items-center justify-center;

            font-size: var(--fnt-md);
            height: 2.5rem;
        }
    }

    [data-cert-modal] {
        @apply fixed;

        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(var(--clr-inter-shade), .5);
        z-index: 9;
        
        img {
            @apply absolute;

            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 100%;
            max-height: 75vh;
            object-fit: contain;
            padding: 1rem;
        }
    }
</style> <!-- Stylesheet Ends -->