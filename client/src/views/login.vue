<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="username">
              <Input v-model="form.username" placeholder="请输入用户名">
                <span slot="prepend">
                    <Icon :size="16" type="person"></Icon>
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
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <a class="login-tip">忘记密码</a>
          <a class="ToSign" @click="toSign">注册</a>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
  import { login } from "../api/index"
  import axios from 'axios'
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
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
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            login(_this.form.username,_this.form.password).then(res => {
              let getData = res.data;
              if(getData.success){
                this.$Message.success('登录成功');
                _this.$router.replace({ path: '/home'})
              }else{
                this.$Message.success('登录错误');
              };
            })
          } else {
            this.$Message.error('请输入完整的登录信息');
          }
        })
      },
      toSign(){
        this.$router.replace({path:"/sign"})
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
      }
      .login-tip,.ToSign {
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
      }
      .ToSign{
        float: right;
      }
    }
  }
</style>
