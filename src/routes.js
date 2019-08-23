const Feed = resolve => require(['./views/feed.vue'], resolve);
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
        name: 'cascader',
        path: '/cascader',
        meta: {title: 'cascader'},
        component: Cascader
    }
];
export default routes;
