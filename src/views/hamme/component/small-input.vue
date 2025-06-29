<template>
  <div class="gradient-border-wrapper">
    <div class="input">
      <input type="text" placeholder="Enter your Email" />
      <div class="btn">Get A Demo</div>
    </div>
  </div>
</template>

<style scoped>
.gradient-border-wrapper {
  padding: 4px;
  width: 418px;
  height: 56px;
  background: linear-gradient(180deg, rgba(77, 238, 255, 0.1) 0%, rgba(115, 59, 255, 0.1) 100%);
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 750px) {
  .gradient-border-wrapper {
    width: 100%;
    margin-bottom: 12px;
  }
}
.input {
  flex: 1;
  height: 100%;
  background: #fff;
  box-sizing: border-box;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
}
.input input {
  border: none;
  outline: none;
  flex: 1;
  padding-left: 12px;
}
.input input::placeholder {
  font-size: 16px;
  font-weight: 600;
  color: #8f96bd;
}
.input .btn {
  width: 134px;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #000000;
  border-radius: 14px;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
}
</style>
