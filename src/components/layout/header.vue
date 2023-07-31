<template>
    <header class="header inner">
        <div class="header__inner">
            <div class="header__left">
                <div class="header__logo">
                    <router-link :to="{ name: 'catalog' }" >123</router-link>
                </div>
            </div>
            <nav class="header__menu">
                <a class="header__menu-item" href="">
                    123
                </a>
                <a class="header__menu-item" href="">
                    123
                </a>
                <a class="header__menu-item">
                    123
                </a>

            </nav>
            <div class="header__right">
                <el-badge :hidden="length === 0" :value="length">
                    <router-link class="header__cart" exact-active-class="header__cart-active" :to="{ name: 'cart' }" >
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                        <span class="total">Корзина</span>
                    </router-link>
                    <ul class="header__submenu" v-show="total !== 0">
                        <li>
                            <p>= {{ total }} рублей</p>
                        </li>
                    </ul>
                </el-badge>
                <div @click="drawer = true" class="header__heart">
                    <font-awesome-icon :icon="['fas', 'heart']" />
                </div>
                <el-drawer v-model="drawer" title="I am the title" :show-close="false">
                    <template #header="{ close }">
                        <h1 class="header__title">Избранное</h1>
                        <div @click="close" class="header__heart header__xmark">
                            <font-awesome-icon fill="red" :icon="['fas', 'xmark']" />
                        </div>
                        <!-- <el-button type="danger" @click="close">
                          <el-icon class="el-icon--left">
                            <font-awesome-icon :icon="['fas', 'xmark']" />
                          </el-icon>
                          <span>Закрыть</span>
                        </el-button> -->
                      </template>
                      123123213
                </el-drawer>
            </div>
        </div>

    </header>
    <!-- <header class="head">
        <div class="logo-header">
            1212
        </div>
        <div class="wrapper">
            <div class="menu">my menu</div>
            <div class="search">search</div>
        </div>
    </header> -->
</template>

<script>
import { mapGetters} from 'vuex';
export default {
    data() {
        return {
            drawer: false
        }
    },
    computed: {
        ...mapGetters('cart', ['total', 'length'])
    }
}
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

._lock {
    height : 100%;
    overflow : hidden;
}

.inner {
    max-width : 1592px;
    margin : 0 auto;
}

.header {
    padding : 1.5075376884vw 4.0201005025vw;
    border-bottom : 1px solid #f0f0f0;
    position : sticky;
    top : 0;
    left : 0;
    z-index : 10;
    background : #fff; 
    height : 5.527638191vw;
}


.header__inner {
    justify-content : space-between;
    max-width : 1464px;
    margin: 0 auto;
}

.header__inner, .header__left, .header__logo {
    display : flex;
    align-items : center;
}

.header__logo {
    padding-right : 4.0201005025vw;
    height : 2.5125628141vw;
    border-right : 1px solid #f0f0f0;
}

.header__menu {
    list-style: none;
    display : flex;
    font-size : 0.8793969849vw;
    text-transform : uppercase;
    margin-left : 2.5125628141vw;
}

.header__menu-item {
    margin-right : 2.5125628141vw;
    position : relative;

    background : linear-gradient(180deg, #604D9F, #604D9F);
    background-size : 0 1px;
    transition : background-size 0.4s;
    background-position : 0 100%;
    background-repeat : no-repeat;

    &:hover {
        background-size : 100% 1px !important ;
    }
}

.header__right {
    display : flex;
    align-items : center;
    justify-content: space-between;

    font-size: 20px;
}

.header__cart {
    display : flex;
    align-items: center;
    position: relative;
    line-height : 1.8888888889vw;
    padding : 0 1.3333333333vw;
    border: 1px solid #333333;
    font-size: 20px;
    text-transform : uppercase;
    border-radius : 4px;
    text-decoration : none;

    background : linear-gradient(180deg, var(--el-color-danger), var(--el-color-danger));
    background-size : 0 100px;
    transition : background-size 0.4s;
    background-position : 0 100%;
    background-repeat : no-repeat;

    &:hover {
        background-size : 100% 100px !important ;

        & + .header__submenu {
            visibility: visible;
            opacity: 1;
        }
    }
}

.total {
    margin-left: 0.8793969849vw;
    font-size: 16px;
}

.el-badge .el-badge__content {
    border-color: #333;
}


.header__submenu {
    visibility: hidden;
    transition: 0.5s;
    opacity: 0;
    position : absolute;
    top : 100%;
    right: 0;
    width : 17.2110552764vw;
    border : 1px solid #333;
    border-radius : 4px;
    z-index : 10;
    background : #fff;
    overflow : hidden;
    margin-top: 0.35407vw;
    padding : 0.5025125628vw 0;
}

.header__submenu li p {
    text-decoration : none;
    text-transform: uppercase;
    padding : 0.6281407035vw 1.0050251256vw;
    display : block;
}

.header__heart {
    margin-left: 20px;
    width : 2.5125628141vw;
    height : 2.5125628141vw;
    border-radius : 50%;
    border : #333 solid 1px;
    cursor : pointer;
    display : flex;
    align-items : center;
    justify-content : center;
    transition : all 0.3s linear;
}

.header__heart:hover {
    transform: scale(1.2);
}

.header__xmark {
    border-color: #333;
    color: #333;
    background: var(--el-color-danger);
}

.el-overlay .el-drawer__header {
    margin-bottom: 20px;
}

.el-drawer__body {
    border-top: 1px solid #f0f0f0;
}

.header__title {
    color: #333;
    font-weight: 600;
}

</style>