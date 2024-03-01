<template>
    <div>
        <div class="custom-container" style="min-height: 100vh">
            <div class="stat-page">

                <div class="head-line new mb-4">
                    <div class="d-flex align-items-center">
                        <h4 class="d-none d-xl-block d-lg-block"> دوريات وبطولات </h4>
                        <h4> | الدوري السعودي </h4>
                        <span class="neww">
                            | الإحصائيات
                        </span>
                    </div>
                </div>

                <div class="stat-container-home">
                    <!-- <div class="head-line">
                        <h4> إحصائيات دوري أبطال أوروبا</h4>
                        <button>
                            عرض المزيد
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M5 12L12 5M5 12L12 19" stroke="#F8F8F9" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div> -->
                    <div class="main mt-5">
                        <div class="row">
                            <div class="col-12 col-xl-4 col-lg-4 col-md-6 mb-3">
                                <div class="box">
                                    <div class="head">
                                        <h5> الهدافون </h5>
                                    </div>
                                    <div class="body">
                                        <div v-for="i in 9" class="players">
                                            <div class="img-container">
                                                <img src="../assets/images/player.png" />
                                                <div class="d-flex flex-column gap-2">
                                                    <h6> ألفارو موراتا </h6>
                                                    <span> اتلتيكو مدريد </span>
                                                </div>
                                            </div>
                                            <div class="goals">
                                                <h6> 5 </h6>
                                                <span> هدف </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="foot d-flex gap-2">
                                        <h5 class="pt-1">كل الهدافين</h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                            fill="none">
                                            <path d="M5.5 12H19.5M5.5 12L12.5 5M5.5 12L12.5 19" stroke="#F8F8F9"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-4 col-lg-4 col-md-6 mb-3">
                                <div class="box">
                                    <div class="head">
                                        <h5> قائمة صانعي الأهداف </h5>
                                    </div>
                                    <div class="body">
                                        <div v-for="i in 9" class="players">
                                            <div class="img-container">
                                                <img src="../assets/images/player.png" />
                                                <div class="d-flex flex-column gap-2">
                                                    <h6> ألفارو موراتا </h6>
                                                    <span> اتلتيكو مدريد </span>
                                                </div>
                                            </div>
                                            <div class="goals">
                                                <h6> 5 </h6>
                                                <span> هدف </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="foot d-flex gap-2">
                                        <h5 class="pt-1"> كل صانعي الأهداف </h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                            fill="none">
                                            <path d="M5.5 12H19.5M5.5 12L12.5 5M5.5 12L12.5 19" stroke="#F8F8F9"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-4 col-lg-4 col-md-6 mb-3">
                                <div class="box">
                                    <div class="head">
                                        <h5> مشاركات بالدقائق</h5>
                                    </div>
                                    <div class="body">
                                        <div v-for="i in 9" class="players">
                                            <div class="img-container">
                                                <img src="../assets/images/player.png" />
                                                <div class="d-flex flex-column gap-2">
                                                    <h6> ألفارو موراتا </h6>
                                                    <span> اتلتيكو مدريد </span>
                                                </div>
                                            </div>
                                            <div class="goals">
                                                <h6> 5 </h6>
                                                <span> هدف </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="foot d-flex gap-2">
                                        <h5 class="pt-1"> كل المباريات </h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                            fill="none">
                                            <path d="M5.5 12H19.5M5.5 12L12.5 5M5.5 12L12.5 19" stroke="#F8F8F9"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <button class="all-mobile">
                            عرض المزيد
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M5 12L12 5M5 12L12 19" stroke="#F8F8F9" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button> -->
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>