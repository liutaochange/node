<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>注册
        </p>
        <div class="form-con">
          <Form ref="signForm" :model="form" :rules="rules">
            <FormItem prop="username">
              <Input v-model="form.username" placeholder="请输入用户名">
                <span slot="prepend">
                    <Icon :size="16" type="person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="phone">
              <Input v-model="form.phone" placeholder="请输入手机号">
                <span slot="prepend">
                    <Icon :size="18" type="android-phone-portrait"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
                <span slot="prepend">
                    <Icon :size="14" type="locked"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>注册</Button>
            </FormItem>
          </Form>
          <a class="ToSign" @click="toLogin">已有账号，去登录</a>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
  import { sign } from "../api/index"
  import axios from 'axios'
  export default {
    data () {
      return {
        form: {
          username: '',
          phone:'',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '手机号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      handleSubmit () {
        var _this = this;
        this.$refs['signForm'].validate((valid) => {
          if (valid) {
            sign(_this.form.username,_this.form.phone,_this.form.password).then(res => {
                let getData = res.data;
              if(getData.success){
                this.$Message.success('注册成功');
                _this.$router.replace({ path: '/home'})
              }else{
                this.$Message.success('注册错误');
              };
            })
          } else {
            this.$Message.error('请输入完整的注册信息');
           }
        })
      },
      toLogin(){
        this.$router.replace({path:"/"})
      }
    }
  };
</script>
<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
    background: #00B7FF;
    position: relative;
    &-con {
       position: absolute;
       left: 50%;
       top: 50%;
       transform: translate(-50%,-50%);
       width: 300px;
      &-header {
         font-size: 16px;
         font-weight: 300;
         text-align: center;
         padding: 30px 0;
       }
      .form-con {
        padding: 10px 0 0;
        overflow: hidden;
      }
      .ToSign {
        float: right;
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
      }
    }
  }
</style>
