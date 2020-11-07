<template>
  <label>
    <input
      type="checkbox"
      :name="name"
      :value='value'
      @change="onChange"
    />
    <span>
      <slot>{{inputValue}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'sc-checkbox-group',

  props: {
    name: {
      type: String,
      default: 'group'
    },

    // will be binded with v-model (name should be 'modelValue. Changed in Vue 3')
    modelValue: {
      type: Array,
      default: []
    },

    // value for current check-box
    value: {
      type: String,
      default: ''
    }
  },

  mounted() {
    console.log(this.name, this.modelValue)
  },

  methods: {
    onChange(e) {
      let vals = [...this.modelValue];

      if (e.target.checked) {
        vals.push(e.target.value);
      } else {
        vals = vals.filter(item => item !== e.target.value);
      }

      // to be binded with v-model event name should be 'update:modelValue'
      this.$emit('update:modelValue', vals);
    }
  }
}
</script>

<style lang="scss" scoped>

label {
  color: #000;
  height: 24px;
  line-height: 24px;
  display: block;
  margin: 2px 0;
  cursor: pointer;
  span {
    margin-left: .5rem;
  }
}

[type="checkbox"] {
  position: relative;
  left: -10000px;
  margin: 0;
  cursor: pointer;
}

[type="checkbox"]:before,
[type="checkbox"]:after {
  content: '';
  display: block;;
  position: relative;
  left: 10000px;
  margin: 0;
}

[type="checkbox"]:before {
  border: 1px solid #808080;
  width: 12px;
  height: 12px;
}

[type="checkbox"]:checked {
  &+span {
    // font-weight: bold;
  }
  &:after {
    content: '';
    background: #000;
    width: 8px;
    height: 8px;
    margin: -11px 3px;
  }
}
</style>