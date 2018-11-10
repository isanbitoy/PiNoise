import Vue from 'vue'
import NewsHeader from '@/components/TheNewsHeader'
import NewsArticle from '@/components/TheNewsArticle'
import NewsArticleNav from '@/components/TheNewsArticleNav'
import NewsFooter from '@/components/TheNewsFooter'

Vue.component('news-header', NewsHeader)
Vue.component('news-article', NewsArticle)
Vue.component('news-article-nav', NewsArticleNav)
Vue.component('news-footer', NewsFooter)