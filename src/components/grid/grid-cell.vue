<template>
  <div class="grid-cell">
    <div class="product">
      <div class="product-image">
        <img :src="product.imageAndColor[0].imageUrl" />
      </div>
      <div class="product-price">
        <span class="product-price--strike"> $999 </span>
        <span class="product-price--sale">{{product.priceData}}</span>
      </div>
      <div class="product-title">
        <span>{{product.title}}</span>
      </div>
      <div class="product-promo">
        $50 Off Our Regular Price
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'grid-cell',

  props: {
    product: {
      type: Object,
      default: {},
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.product {
  font-size: .875rem;
  color: #000;
  background: #fff;
  box-shadow: 0 6px 6px rgba(0, 0, 0, .25);
  //display: inline-block;
  // width: 256px;
  width: 85%;
  min-width: 256px;
  // margin-right: .5rem;
  margin: 0 auto 1rem;
  padding: .5rem;
  cursor: pointer;
  transition: transform .25s;

  &:hover {
    // transform: scale(1.1);
    z-index: 1;
  }

  &-image img {
    border: 1px solid #0080c0;
    width: 100%;
  }

  &-price {
    font-weight: bold;
    font-size: 1rem;
    padding: .5rem 0;
    span {
      display: inline-block;
      margin-right: .5rem;
    }
    &--strike {
      color: #808080;
      position: relative;
      &:after {
        content: '';
        background: #f00;
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        top: 50%;
        left: 0;
      }
    }
    &--sale {
      color: #f00;
    }
  }
  &-title {
    background: #e8e8e8;
    border-radius: 4px;
    padding: .5rem .5rem;
    span {
      line-height: 1.25rem;
      height: 2.5rem;
      max-height: 2.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  &-promo {
    color: #c00;
    padding: .5rem 0 0 0;
  }
}
</style>