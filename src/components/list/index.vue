<template>
  <ul :style="ulStyles" ref="ul">
    <li v-for="(item, index) in renderItems" :key="index">
      <slot :item="item"></slot>
    </li>
  </ul>
  <a
    class="show-more"
    href="#"
    v-if="count > limit"
    @click="toggleIsLimited"
  >
    {{limitationLabel}}
  </a>
</template>

<script>

import scCheckboxGroup from '@/components/global/sc-checkbox/sc-checkbox-group.vue';

const MORE = 'Show more';
const LESS = 'Show less';

export default {
  name:'list',

  components: {
    scCheckboxGroup
  },

  props: {
    items: {
      type: Array,
      default: [],
      required: true
    },

    columns: {
      type: Number,
      default: 1
    },

    limit: {
      type: Number,
      default: 10
    },

    itemHeight: {
      type: Number,
      default: 24
    }
  },

  data() {
    return {
      filter: {},
      isLimited: true,
      limitationLabel: MORE,
      count: 0
    }
  },

  mounted() {
    this.count = this.$refs.ul.children.length;
  },

  computed: {
    renderItems() {
      if (!this.isLimited) {
        return this.items;
      }

      return this.count < this.limit ?
        this.items:
        this.items.slice(0, this.limit);
    },

    ulStyles() {
      return {
        columns: this.columns,
      }
    },
  },

  methods: {
    toggleIsLimited() {
      this.isLimited = !this.isLimited;
      this.limitationLabel = this.isLimited ? MORE:LESS;
    }
  }
}
</script>

<style lang="scss" scoped>

li {
  //background: #eee;
  line-height: 1.5rem;
  margin: 2px 0;
}

.show-more {
  color: #808080;
  text-align: right;
  display: block;
  line-height: 1.5rem;
  margin-top: .25rem;

  &:hover {
    text-decoration: underline;
  }
}
</style>