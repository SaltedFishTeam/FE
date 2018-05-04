<template> 
    <div>
        <el-card shadow="always">
            <div class="friendcard-head">
                <img src="../../assets/head.jpg" alt="">
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        props: {
            url: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: ""
            },
            intro: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
            }
        },
        created: function() {
        }

    }
</script>

<style>
.friendcard-head {
    width: 100%;
    height: 50px;
}

.friendcard-head img {
    width: 50px;
    height: 50px;
    border-radius: 100px;}
</style>