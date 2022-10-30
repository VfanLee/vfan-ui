<script>
export default {
  name: 'vf-input',
  props: {
    // 同 input type
    type: {
      type: String,
      default: 'text'
    },
    // 同 input name
    name: {
      type: String,
      default: ''
    },
    // 同 input placeholder
    placeholder: {
      type: String,
      default: ''
    },
    // 同 input disabled
    disabled: {
      type: Boolean,
      default: false
    },
    // input 输入的值
    value: {
      type: String,
      default: ''
    },
    // 可清空值
    clearable: {
      type: Boolean,
      default: false
    },
    // 显示密码
    'show-password': {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clearInput() {
      this.$emit('input', '')
    }
  }
}
</script>

<template>
  <div
    class="vf-input"
    :class="[
      {
        'is-disabled': disabled
      }
    ]"
  >
    <input
      class="vf-input__inner"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="vf-input__suffix">
      <span class="vf-input__suffix-inner">
        <i class="fa fa-close" v-if="clearable" @click="clearInput"></i>
        <i class="fa fa-eye" v-if="showPassword"></i>
      </span>
    </span>
  </div>
</template>

<style lang="scss">
.vf-input {
  display: inline-block;
  position: relative;
  width: 100%;

  .vf-input__inner {
    display: inline-block;
    padding: 0 15px;
    width: 100%;
    height: 40px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    font-size: inherit;
    line-height: 40px;
    background-color: #fff;
    background-image: none;
    color: #606266;
    border-radius: 4px;
    outline: none;

    &:hover {
      border-color: #c0c4cc;
    }

    &:focus {
      border-color: #409eff;
    }
  }

  &.is-disabled {
    .vf-input__inner {
      border-color: #e4e7ed;
      background-color: #f5f7fa;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

// .vf-input__suffix {
//     position: absolute;
//     height: 100%;
//     right: 5px;
//     top: 0;
//     text-align: center;
//     color: #c0c4cc;
//     transition: all .3s;
//     pointer-events: none;
// }
</style>
