const Feed = resolve => require(['./views/feed.vue'], resolve);
const Feed1 = resolve => require(['./views/feed1.vue'], resolve);
const Foo = resolve => require(['./views/foo.vue'], resolve);
const Cascader = resolve => require(['./views/cascader.vue'], resolve);


const routes = [
    {
        path: '/foo',
        component: Foo
    },
    {
        name: 'feed',
        path: '/feed',
        meta: {title: 'title-feed'},
        component: Feed
    },
    {
        name: 'feed1',
        path: '/feed1',
        meta: {title: 'title-feed1'},
        component: Feed1
    },
    {
        name: 'cascader',
        path: '/cascader',
        meta: {title: 'cascader'},
        component: Cascader
    }
];
export default routes;
