<template>
  <div class="range-wrapper">
    <div class="range">
      <div class="range-path" ref="path">
        <div class="indicator" ref="value-indicator" />
      </div>
      <div class="slider slider-min" ref="slider-left" data-value="0" />
      <div class="slider slider-max" ref="slider-right" data-value="100" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'range',

  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    values: {
      type: Array,
      required: true
    },

  },

  mounted() {
    const sliderLeft = this.$refs['slider-left'];
    const sliderRight = this.$refs['slider-right'];
    const path = this.$refs['path'];
    const valueIndicator = this.$refs['value-indicator'];

    if (this.$props.values[0] < this.$props.min) {
      this.$props.values[0] = this.$props.min;
    }

    if (this.$props.values[1] > this.$props.max) {
      this.$props.values[1] = this.$props.max;
    }

    console.log(this.$props)

    this.sliderWidth = sliderLeft.offsetWidth;

    sliderLeft.style.left = Math.round((this.$props.values[0] - this.$props.min) / (this.$props.max - this.$props.min) * path.offsetWidth) + 'px';
    sliderRight.style.left = Math.round((this.$props.values[1] - this.$props.min) / (this.$props.max - this.$props.min) * path.offsetWidth) + 'px';

    valueIndicator.style.left = sliderLeft.offsetLeft + 'px';
    valueIndicator.style.width = sliderRight.offsetLeft - sliderLeft.offsetLeft + 'px'

    sliderLeft.dataset.value = `$${this.$props.values[0]}`;
    sliderRight.dataset.value = `$${this.$props.values[1]}`;

    this.bindEvents();
  },

  methods: {
    bindEvents() {
      this.drag = this.drag.bind(this);
      this.startDrag = this.startDrag.bind(this);

      this.$refs['slider-left'].addEventListener('dragstart', e => e.preventDefault());
      this.$refs['slider-right'].addEventListener('dragstart', e => e.preventDefault());

      this.$refs['slider-left'].addEventListener('mousedown', this.startDrag);
      this.$refs['slider-right'].addEventListener('mousedown', this.startDrag);

      window.addEventListener('mouseup', e => {
        window.removeEventListener('mousemove', this.drag);
      })
    },

    startDrag(e) {
      this.x0 = e.pageX;
      this.target = e.target;
      window.addEventListener('mousemove', this.drag)
    },

    drag(e) {
      const sliderLeft = this.$refs['slider-left'];
      const sliderRight = this.$refs['slider-right'];
      const path = this.$refs['path'];
      const valueIndicator = this.$refs['value-indicator'];
      const target = this.target;

      let x = target.offsetLeft + e.pageX - this.x0;
      let leftLimit = sliderLeft.offsetLeft + 50
      let rightLimit = sliderRight.offsetLeft - 50

      if (target === sliderLeft) {
        if (x < 0) x = 0;
        if (x > rightLimit) x = rightLimit;

        valueIndicator.style.left = x + 'px'
        target.style.left = x + 'px';
      }

      if (target === sliderRight) {
        if (x < leftLimit) x = leftLimit;
        if (x > path.offsetWidth) x = path.offsetWidth;
        target.style.left = x + 'px';
      }

      valueIndicator.style.width = sliderRight.offsetLeft - sliderLeft.offsetLeft + 'px'
      target.dataset.value = `$${Math.round(this.$props.min + (this.$props.max - this.$props.min) * (target.offsetLeft / path.offsetWidth))}`;

      this.x0 = e.pageX;
    }
  }
}
</script>

<style lang="scss" scoped>

$range-bg-color: #808080;
$range-value-color: #09c;

.range-wrapper {
  padding: 1rem 1rem 2rem;
}

.range {
  position: relative;

  &-path {
    background: $range-bg-color;
    width: 100%;
    height: 8px;
    position: relative;
    overflow: hidden;
    transform: translate(0, -50%);
  }

  .indicator {
    background: $range-value-color;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .slider {
    background: $range-value-color;
    border: 3px solid #fff;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
    z-index: 1;

    &:after {
      content: attr(data-value);
      font-size: .75rem;
      color: #fff;
      background: rgba(0,0,0, .75);
      border-radius: 4px;
      display: block;
      text-align: center;
      width: 48px;
      height: 24px;
      line-height: 24px;
      position: absolute;
      left: 50%;
      top: 25px;
      transform: translate(-50%, 0);
    }
    &-min {
      left: 0;
    }

    &-max {
      left: 100%;
    }
  }
}
</style>