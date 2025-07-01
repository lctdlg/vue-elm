<template>
  <div class="dialog">
    <div class="dialog-container">
      <div class="h1">Your Success Starts Here – Let’s Connect!</div>
      <div class="h2">
        Ready to elevate your trading game? Fill out the form, and our team will get in touch with solutions tailored to
        your needs.
      </div>
      <!-- 表单 -->
      <div class="formContainer">
        <MyForm ref="formRef" :model="formData" :rules="rules">
          <MyFormItem prop="username">
            <MyInput v-model="formData.username" placeholder="First Name" />
          </MyFormItem>
          <MyFormItem prop="password">
            <MyInput v-model="formData.password" type="password" placeholder="Last Name" />
          </MyFormItem>
          <MyFormItem prop="username">
            <MyInput v-model="formData.username" placeholder="Phone Number" />
          </MyFormItem>
          <MyFormItem prop="password">
            <MyInput v-model="formData.password" type="password" placeholder="E-Mail" />
          </MyFormItem>
          <MyFormItem prop="password">
            <MyInput
              v-model="formData.password"
              placeholder="Specify which product and services you are interested in"
            />
          </MyFormItem>
        </MyForm>
      </div>
      <!-- 提交 -->
      <div class="btn" @click="handleSubmit"><span>Send message</span></div>
    </div>
  </div>
</template>
<script>
import MyForm from '@/components/MyForm'
import MyFormItem from '@/components/MyFormItem'
import MyInput from '@/components/MyInput'
export default {
  name: 'SubmitInfo',
  components: {
    MyForm,
    MyFormItem,
    MyInput
  },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [
          { required: true, message: '请输入密码' },
          { minLength: 6, message: '密码不能少于6位' }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          // alert('验证通过！')
        } else {
          // alert('验证失败，请检查表单')
        }
      })
    }
  }
}
</script>
<style scoped>
.dialog {
  background: #ffffff;
}
.dialog-header .close {
  text-align: right;
  height: 58px;
  line-height: 58px;
  padding: 0 58px;
}
.dialog-header .close svg {
  cursor: pointer;
}
.dialog-container {
  padding: 0 58px 58px 58px;
}
.h1 {
  font-weight: 600;
  font-size: 36px;
  line-height: 1;
  color: #020f2c;
}
.h2 {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #656b8a;
}
@media screen and (max-width: 1200px) {
  .dialog-container {
    padding: 0;
  }
  .h1 {
    width: 100%;
    font-size: 12px;
    padding: 0 12px;
    box-sizing: border-box;
    line-height: 1.5;
  }
  .h2 {
    width: 100%;
    font-size: 12px;
    padding: 0 12px;
    box-sizing: border-box;
    line-height: 1.5;
  }
}
.formContainer {
  margin: 24px 0;
}
.formContainer form {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.formContainer form .form-item {
  flex: 0 0 324px;
  width: 324px;
  height: 48px;
}
.btn {
  width: 162px;
  height: 52px;
  border-radius: 8px;
  background: #020f2c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.btn span {
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  line-height: 1;
}
</style>
