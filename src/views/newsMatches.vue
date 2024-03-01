<template>
    <div>
        <div class="custom-container" style="min-height: 100vh">
            <div class="videos-page">
                <div class="head-line new mb-4">
                    <div class="d-flex align-items-center">
                        <h4> الأخبار </h4>
                        <span class="neww">
                            مالتيميديا
                        </span>
                    </div>
                </div>

                <div class="row">
                    <div v-for="i in 20" class="col-12 col-lg-3 col-xl-3 col-md-6 mb-3">
                        <div class="video-card sum">
                            <div class="video-container">
                                <img src="../assets/images/video1.png" />
                                <div class="overlay"></div>
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124"
                                        fill="none">
                                        <path
                                            d="M48.9441 92.7071L48.9397 92.71C48.1409 93.2291 47.3608 93.4889 46.5938 93.5169C45.8273 93.5449 45.0396 93.3427 44.2231 92.8844L44.2228 92.8842C43.4078 92.4273 42.8171 91.8583 42.4274 91.1833C42.0374 90.5076 41.833 89.6983 41.833 88.7375V35.2625C41.833 33.3719 42.6213 32.0117 44.223 31.1106C45.0391 30.6541 45.8268 30.4531 46.5933 30.4818C47.3605 30.5106 48.1408 30.7708 48.9397 31.2901L48.9397 31.2901L48.9442 31.2929L91.0476 58.0273C92.4527 58.9658 93.1455 60.2712 93.1455 62C93.1455 63.7288 92.4527 65.0341 91.0477 65.9726L48.9441 92.7071Z"
                                            fill="#B7B7B7" stroke="#F8F8F9" />
                                    </svg>
                                </div>
                                <div class="time">
                                    <span>10:00</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path d="M0 4C0 1.79086 1.79086 0 4 0H24V24H4C1.79086 24 0 22.2091 0 20V4Z"
                                            fill="#212121" />
                                        <path
                                            d="M9.525 18.025C9.19167 18.2417 8.854 18.254 8.512 18.062C8.17067 17.8707 8 17.575 8 17.175V6.82499C8 6.42499 8.17067 6.12899 8.512 5.93699C8.854 5.74566 9.19167 5.75832 9.525 5.97499L17.675 11.15C17.975 11.35 18.125 11.6333 18.125 12C18.125 12.3667 17.975 12.65 17.675 12.85L9.525 18.025Z"
                                            fill="#B41618" />
                                    </svg>
                                </div>
                            </div>

                            <h5> تياجو ميسي يهدر ركلة جزاء بطريقة غريبة </h5>
                        </div>
                    </div>
                </div>

                <div class="d-flex btn-show align-items-center justify-content-center w-100">
                    <button> عرض المزيد </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>