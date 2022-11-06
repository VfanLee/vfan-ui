<script>
export default {
  name: 'vf-switch'
}
</script>

<template>
  <div class="vf-switch">
    <input type="checkbox" class="vf-switch__input" />
    <div class="vf-switch__core"></div>
  </div>
</template>

<style lang="scss" scoped>
.vf-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .vf-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }

  .vf-switch__core {
    display: inline-block;
    position: relative;
    width: 48px;
    height: 20px;
    margin: 0;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    background: #dcdfe6;
    outline: none;
    border-radius: 10px;
    vertical-align: middle;
    transition: border-color 0.3s, background-color 0.3s;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: 16px;
      height: 16px;
      background-color: #fff;
      border-radius: 100%;
      transition: all 0.3s;
    }
  }
}
</style>
