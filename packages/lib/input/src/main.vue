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

