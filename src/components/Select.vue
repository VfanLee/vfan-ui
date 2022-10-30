<script>
export default {
  name: 'VfSelect',
}
</script>

<template>
  <div class="vf-select">
    <div class="selected-item">
      <span>selected item</span>
    </div>
    <div class="dropdown-popover">
      <input type="text" v-model="searchQuery">
      <div class="options">
        <ul>
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vf-select {
  max-width: 350px;
  position: relative;
}
</style>
