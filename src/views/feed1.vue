<template>
    <div class="page-feed" ref="ref1">
       {{feed1}}
    </div>
</template>

<script>
    // import {vFeed} from 'comb-ui'
    import {Tost,vCell} from 'comb-ui'
    export default {
        name: "feed1",
        components: {vCell},
        data(){
            return {
                feed1:'feed1'
            }
        },
        methods: {
            tos(){
                // alert('tost');
                const resolved = this.$router.match('feed');
                console.log(resolved);
            }
        }
    }
</script>

<style scoped>

</style>
