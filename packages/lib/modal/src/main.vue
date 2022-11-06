<script>
export default {
  name: 'VfModal',
  props: {
    // modal类型
    type: {
      type: String,
      default: 'dialog' // drawer
    },
    // 是否显示
    visible: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<template>
  <transition name="wrap-fade">
    <div class="vf-modal__wrapper" v-show="visible">
      <transition :name="`fade-${type}`">
        <div class="vf-modal" :class="`vf-modal--${type}`" v-show="visible">
          <div class="vf-modal__header">
            <slot name="header">
              <span class="vf-modal__title">{{ title }}</span>
              <button type="button" class="vf-modal__headerbtn">
                <i class="fa fa-close" @click="handleClose"></i>
              </button>
            </slot>
          </div>
          <div class="vf-modal__body">
            <slot></slot>
          </div>
          <div class="vf-modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

