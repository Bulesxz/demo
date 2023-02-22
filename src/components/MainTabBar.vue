<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home" activeColor="purple">
                <img slot="item-icon" src="../assets/img/tabbar/home.jpeg" alt="">
                <img slot="item-icon-active" src="../assets/img/tabbar/home.active.jpeg" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>

            <!-- <tab-bar-item path="/hot" activeColor="purple">
                <img slot="item-icon" src="~assets/img/tabbar/hot.png" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/hot.active.png" alt="">
                <div slot="item-text">热门</div>
            </tab-bar-item> -->
            <tab-bar-item path="/my" activeColor="purple">
                <img slot="item-icon" src="../assets/img/tabbar/my.jpeg" alt="">
                <img slot="item-icon-active" src="../assets/img/tabbar/my.active.jpeg" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>
  
<script>
import TabBar from './TabBar.vue'
import TabBarItem from './TabBarItem.vue'
export default {
    name: "MainTabBar",
    components: {
        TabBar,
        TabBarItem
    }
}
</script>
  
<style></style>