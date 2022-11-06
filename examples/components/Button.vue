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

<style lang="scss" scoped>
.vf-button {
  padding: 12px 24px;
  border: 1px solid;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  background: #fff;
  color: var(--grey-10);
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.1s;

  & + & {
    margin-left: 10px;
  }

  &.is-round {
    border-radius: 20px;
  }

  &.is-circle {
    padding: 12px;
    border-radius: 50%;
  }

  &.is-disabled,
  &.is-disabled:hover {
    background-color: var(--grey-2);
    color: var(--grey-7);
    border-color: var(--grey-7);
    cursor: not-allowed;
  }
}

.vf-button--primary {
  color: #fff;
  background-color: var(--arcoblue-6);
  border-color: var(--arcoblue-6);

  &:hover {
    background: var(--arcoblue-7);
    border-color: var(--arcoblue-7);
    color: #fff;
  }

  &:active {
    background: var(--arcoblue-8);
    border-color: var(--arcoblue-8);
    color: #fff;
  }

  &:focus-visible {
    outline: 1px solid #fff;
    outline-offset: -2px;
  }
}

.vf-button--secondary {
  color: #fff;
  background-color: var(--red-6);
  border-color: var(--red-6);

  &:hover {
    background: var(--red-7);
    border-color: var(--red-7);
    color: #fff;
  }

  &:active {
    background: var(--red-8);
    border-color: var(--red-8);
    color: #fff;
  }

  &:focus-visible {
    outline: 1px solid #fff;
    outline-offset: -2px;
  }
}
</style>
