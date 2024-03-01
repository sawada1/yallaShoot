<template>
    <div>
        <div class="custom-container" style="min-height: 100vh">
            <div class="contactus-page">
                <div class="head-line">
                    <h4> إتصل بنا </h4>
                </div>

                <div class="form-container">
                    <form action="" @submit.prevent>
                        <div class="row">
                            <div class="col-12 col-xl-6 col-lg-6">
                                <div class="input">
                                    <label for="">
                                        الاسم
                                        <span>*</span>
                                    </label>
                                    <input type="text">
                                </div>

                            </div>
                            <div class="col-12 col-xl-6 col-lg-6">
                                <div class="input">
                                    <label for="">
                                        البريد الالكتروني
                                        <span>*</span>
                                    </label>
                                    <input type="text">
                                </div>

                            </div>
                            <div class="col-12 col-xl-6 col-lg-6">
                                <div class="input">
                                    <label for="">
                                        التليفون
                                        <span>*</span>
                                    </label>
                                    <input type="text">
                                </div>

                            </div>
                            <div class="col-12 col-xl-6 col-lg-6">
                                <div class="input">
                                    <label for="">
                                        عنوان الرسالة
                                        <span>*</span>
                                    </label>
                                    <input type="text">
                                </div>

                            </div>
                        </div>
                        <div class="input">
                            <label for="">
                                الرسالة
                                <span>*</span>
                            </label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button> إرسال </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>