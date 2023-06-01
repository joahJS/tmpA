<template>
    <SubPageHero />

    <div class="container mt-20 mx-auto">
        <section id="map-box">
            <article id="headOffice" class="flex">
                <div class="map-headOffice-text">
                    <h3 class="map-text-title">본사</h3>
                    <p>부산광역시 부산진구 엄광로 176,</p>
                    <p>동의대학교 산학협력관 331호</p>
                    <p>051-714-0034</p>
                    <p class="mt-3">지하철 2호선 동의대역 5번출구에서 도보 15분</p>
                </div>
                <div class="map-frame-box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831.057425623111!2d129.03536242275007!3d35.1423200459416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebb1648cdd27%3A0x25e803eecc5c3eff!2z64-Z7J2Y64yA7ZWZ6rWQIOqwgOyVvOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1673922104493!5m2!1sko!2skr" width="900" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </article>

            <article id="researchOffice" class="flex mt-10">
                <div class="map-frame-box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d815.5195744570871!2d128.98554648814036!3d35.154667995252204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c1e07477ac3b%3A0x7746a0b7f4e0b4cf!2z67K97IKw65SU7KeA7YS467C466as!5e0!3m2!1sko!2skr!4v1673922068056!5m2!1sko!2skr" width="900" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="map-devCenter-text">
                    <h3 class="map-text-title">개발센터</h3>
                    <p>부산광역시 사상구 대동로 303, </p>
                    <p>부산디지털밸리 1203호</p>
                    <p>051-714-0034</p>
                    <p class="mt-3">지하철 2호선 감전역 3번출구에서 도보 10분</p>
                </div>
            </article>
        </section> <!--map-box-->
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
</script> <!-- Logic Ends -->

<style lang="scss">
    .map-text-title {
        @apply mb-4 relative;

        &::after {
            content: "";
            width: 1.2rem;
            height: 1px;
            background-color: rgb(var(--clr-inter-pane));
            position: absolute;
            bottom: -5px;
            left: 0
        }
    }

    .map-headOffice-text {
        @apply py-10 px-6 flex flex-col gap-2;

        background-color: rgb(var(--clr-id-02));
        color: rgb(var(--clr-inter-pane));
        min-width: 320px
    }

    .map-devCenter-text {
        @apply py-10 px-6 flex flex-col gap-2;

        background-color: rgb(var(--clr-id-01));
        color: rgb(var(--clr-inter-pane));
        min-width: 320px;
    }

    .map-frame-box {
        width: calc(100% - 320px);

        > iframe {
            @apply w-full
        }

        @media screen and (max-width: 1024px) {
            @apply w-full;
        }
    }

    #map-box {
        #headOffice {
            @media screen and (max-width: 1024px) {
                @apply flex flex-col gap-2;
            }
        }

        #researchOffice {
            @media screen and (max-width: 1024px) {
                @apply flex flex-col-reverse gap-2;
            }
        }
    }
</style> <!-- Stylesheet Ends -->