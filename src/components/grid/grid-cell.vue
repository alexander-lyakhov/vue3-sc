<template>
  <div class="grid-cell">
    <div class="product">
      <div class="product-image">
        <img :src="product.imageAndColor[0].imageUrl" />
        <div v-if="product.clearancePrice" class="ribbon">
          Clearance
        </div>
      </div>
      <div class="product-price">
        <template v-if="product.formattedWasPrice">
          <span class="product-price--strike">{{product.formattedWasPrice}}</span>
          <span class="product-price--sale">{{product.priceData}}</span>
        </template>
        <template v-else>
          <span class="product-price">{{product.priceData}}</span>
        </template>
      </div>
      <div class="product-title">
        <span>{{product.title}}</span>
      </div>
      <div v-if="product.priceShortMessage" class="product-promo">
        {{product.priceShortMessage}}
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
  transition: transform .25s;
  cursor: default;

  &:hover {
    //transform: scale(1.1);
    z-index: 1;
  }

  &-image {
    position: relative;

    .ribbon {
      color: #fff;
      background: #e00;
      font-size: .75rem;
      font-weight: bold;
      display: inline-block;
      position: absolute;
      left: 0px;
      top: 0px;
      padding: .25rem .5rem;
    }

    img {
      border: 1px solid #0080c0;
      width: 100%;
      cursor: pointer;
    }
  }

  &-price {
    font-weight: bold;
    font-size: 1rem;
    color: #000;
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
    //margin: .5rem 0 0 0;
  }
}
</style>