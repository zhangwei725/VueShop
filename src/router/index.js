import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index";
import Content from "@/components/Content";
import ContentList from "@/components/ContentList";

Vue.use(Router);

export default new Router({
  routes: [
    //
    {
      path: '',
      redirect: "/home"
    },
    {
      path: '/',
      name: 'Index',
      comment: Index,
      children: [
        {
          path: '/Content',
          name: 'Content',
          component: Content,
        },
        {
          path: '/ContentList/:id',
          name: 'ContentList',
          component: ContentList,
        },
      ]
    },
    {
      path: "/car",
      comment: Car
    }


  ]
})
