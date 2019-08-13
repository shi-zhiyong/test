<template>
    <div class="page-feed" ref="feed">
        <button ref="feed-btn" @click="tos">TOST</button>
        <v-cell title="title" label="label-title" isLink :to="{path:'/foo#omg'}"></v-cell>
        <v-cell title="baidu" label="label-title" isLink to="https://www.baidu.com"></v-cell>
        <v-cell title="baidu" label="label-title" isLink to="https://www.baidu.com">
            <div slot="right">删除</div>
        </v-cell>
        <feed1></feed1>
    </div>
</template>

<script>
    import feed1 from './feed1'
    import {Tost,vCell} from 'comb-ui'
    export default {
        name: "feed",
        components: {vCell,feed1},
        data(){
            return {
                feed:'feed'
            }
        },
        customOption1: 'feed-omg',
        methods: {
            tos(){
                // alert('tost');
                // const resolved = this.$router.match('feed?name=321#123');
                // console.log(resolved,this.$el);
                // console.log(this.$refs);
                // console.log(this.$data);
                console.log(this.$options.customOption1);
            }
        }
    }
</script>

<style scoped>

</style>
