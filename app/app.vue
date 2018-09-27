<style scoped lang='stylus'>
header {
    background-color: #ffb000;
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
            width: 25%;
            text-align: center;
            height: 40px;
            line-height: 40px;
        }
        li.cur {
            color: red;
            font-weight: bold;
        }
    }
}
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(-400px);
}
</style>
<template>
    <div id="app">
        <header>
            <ul>
                <v-touch tag="li" v-for="item in tabNav" :class="{cur : item.title == $route.name}" @tap="routerGo(item.url)" :key="item.id">{{item.title}}</v-touch>
            </ul>
        </header>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            tabNav: [{
                title: "精选",
                url: "/jingxuan"
            }, {
                title: "视频",
                url: "/shipin"
            }, {
                title: "新时代",
                url: "/faxian"
            }, {
                title: "要闻",
                url: "/duanzi"
            }]
        }
    },
    methods: {
        routerGo(url){
            this.$router.push({ path: url })
        }
    }
}

</script>
