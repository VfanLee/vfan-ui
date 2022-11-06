<script>
export default {
  name: 'VfButton',
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否圆角按钮
    round: {
      type: Boolean,
      default: false
    },
    // 是否圆形按钮
    circle: {
      type: Boolean,
      default: false
    },
    // 按钮尺寸
    size: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<template>
  <button
    type="button"
    class="vf-button"
    :class="[
      `vf-button--${type}`,
      size ? `vf-button--${size}` : '',
      {
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
