<template>
  <div class="button">
    <span class="button-icon" />
    <span class="button-text"><slot></slot></span>
  </div>
</template>

<style scoped>
.button {
  border-radius: 50px;
  padding: 0 1px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0 0 0/10%);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.button:hover {
  box-shadow: 0px 2px 4px 0px rgba(0 0 0/30%);
}
.button-icon {
  width: 16px;
  height: 16px;
  margin: 0 0 0 15px;
  background-image: url(../../assets/plus.png);
  background-repeat: no-repeat;
}
.button-text {
  margin: 0 15px 0 7px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.4px;
  min-width: 120px;
}
</style>
