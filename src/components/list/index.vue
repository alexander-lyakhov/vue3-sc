<template>
  <ul :style="ulStyles" ref="ul">
    <li v-for="(item, index) in renderItems" :key="index">
      <sc-checkbox-group
        :value="item.value"
        :name="name"
        v-model="filter[name]"
      >
        {{item.value}}
      </sc-checkbox-group>
      <span class="count">({{item.count}})</span>
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
    name: {
      type: String,
      required: true
    },

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
    console.log(this.limit, this.itemHeight, this.count)
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

.count {
  color: #08c;
  //color: #080;
  //background: #d8f0d8;
  text-align: right;
  //min-width: 32px;
  //display: inline-block;
  padding: 0 .25rem;
  float: right;
}

</style>