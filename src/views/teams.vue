<template>
    <div>
        <div class="custom-container" style="min-height: 100vh;">

            <div class="teams-page">

                <div class="head-line new mb-4">
                    <div class="d-flex align-items-center">
                        <h4 class="d-none d-xl-block d-lg-block"> دوريات وبطولات </h4>
                        <h4> | الدوري السعودي </h4>
                        <span class="neww">
                            | ترتيب الفرق
                        </span>
                    </div>
                </div>

                <div class="head-line-red mb-3">
                    <h4> ترتيب الفرق </h4>
                </div>

                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">المركز</th>
                                <th scope="col">الفريق</th>
                                <th scope="col">لعب</th>
                                <th scope="col">فوز</th>
                                <th scope="col">تعادل</th>
                                <th scope="col">هزيمة</th>
                                <th scope="col">له</th>
                                <th scope="col">عليه</th>
                                <th scope="col">النقاط</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i, index in 20">
                                <td scope="">{{ index + 1 }} </td>
                                <td class="">
                                    <div class="d-flex align-items-center gap-2 image">
                                        <img src="../assets/images/clup2.png" alt="">
                                        <span> الهلال </span>

                                    </div>
                                </td>
                                <td>19</td>
                                <td>17</td>
                                <td>2</td>
                                <td>0</td>
                                <td>59</td>
                                <td>9</td>
                                <td class="fw-bolder">53</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>