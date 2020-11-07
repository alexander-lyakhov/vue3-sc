<template>
  <main>
    <aside>
      <expander title="Brands">
        <sc-checkbox value="1" name="brands" v-model="brands">one</sc-checkbox>
        <sc-checkbox value="2" name="brands" v-model="brands">two</sc-checkbox>
        <sc-checkbox value="3" name="brands" v-model="brands">three</sc-checkbox>
        <sc-checkbox value="4" name="brands" v-model="brands">four</sc-checkbox>
      </expander>
    </aside>
  </main>
</template>

<script>
import expander from '@/components/expander';
import scCheckbox from '@/components/global/sc-checkbox';

export default {
  components: {
    expander,
    scCheckbox
  },

  data() {
    return {
      brands: []
    }
  },

  created() {
    console.log('brands', this.brands)
  },

  methods: {
    onChange(e) {
      console.log('onChange', e)
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  min-width: 580px;
  min-height: 100vh;
}

aside {
  background: #fff;
  box-shadow: 0 6px 8px rgba(0,0,0,0.4);
  border: 1px solid transparent;
  width: 288px;
}
</style>
