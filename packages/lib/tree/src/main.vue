<script>
export default {
  name: 'VfTree',
  props: {
    data: {
      type: Object,
      require: true
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    nodeClick() {
      this.expanded = !this.expanded
      if (!this.hasChildren) {
        this.$emit('click', this.data)
      }
    }
  },
  computed: {
    hasChildren() {
      return this.data.children
    }
  }
}
</script>

<template>
  <div class="vf-tree">
    <div :style="{ 'margin-left': depth * 20 + 'px' }" >
      <span v-if="hasChildren" @click="nodeClick">
        <i v-if="expanded" class="fa fa-caret-down"></i>
        <i v-else class="fa fa-caret-right"></i>
      </span>
      {{ data.label }}
    </div>
    <template v-if="expanded">
      <vf-tree
        v-for="(item, index) of data.children"
        :key="index"
        :data="item"
        :depth="depth + 1"
        @click="node => $emit('click', node)"
      ></vf-tree>
    </template>
  </div>
</template>
