<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decress" v-show='food.count>0' @click="decressCart">
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="cart-count" v-show='food.count>0'>{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';

    export default {
        props: {
            food: {
                type: Object
            }
        },
        methods: {
            addCart(event) {
                if (!event._constructed) {
                    return;
                };
                if (!this.food.count) {
                    Vue.set(this.food, 'count', 1);
                } else {
                    this.food.count ++;
                }
                this.$emit('cart-add', event.target);
            },
            decressCart(event) {
                if (!event._constructed) {
                     return;
                };
                this.food.count --;
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">	
    .cartcontrol
        font-size: 0
        .cart-decress
            display: inline-block
            padding 6px
            transition: all 0.4s linear
            &.move-enter-active, &.move-leave
                opacity: 1
                transform: translate3D(0, 0, 0)
            .inner
                display: inline-block
                line-height: 24px
                font-size: 24px
                color: rgb(0, 160, 220)
                transition: all 0.4s linear
                transform: rotate(0)
            &.move-enter, &.move-leave-active
                opacity: 0
                transform: translate3D(24px, 0, 0)
                .inner
                    transform: rotate(180deg)
        .cart-count
            display: inline-block
            vertical-align: top
            width: 12px
            line-height: 24px
            padding-top 6px
            text-align: center
            font-size: 10px
            color: rgb(147, 153, 159)
        .cart-add
            display: inline-block
            padding 6px
            font-size: 24px
            line-height: 24px
            color: rgb(0, 160, 220)
</style>