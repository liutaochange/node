<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
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
          userame: '',
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
            const request = axios.create({
              baseURL: "http://b.xiumi.us/api",
              withCredentials: true
            });
//            setInterval(function(){
            request.post('/forms/', {
                  "46fa0fc450b2c63e9c17af008d9c9a72":"王明",
                  "a4b164597b2932d06145e94f230d48fd":"18789645326",
                  "cc5e1b0432e3faf82bb219afb5d7f5cb":{
                    "417ab4eb613770523451c576ac0321a7":true
                  },
                  "showID":"68350141"
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
//            },)
//            login(_this.form.username,_this.form.password).then(res => {
//              let getData = res.data;
//              if(getData.success){
//                this.$Message.success('登录成功');
//              }else{
//                this.$Message.success('登录错误');
//              }
//            })
          } else {
            this.$Message.error('请输入完整的登录信息');
          }
        })
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
      .login-tip {
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
      }
    }
  }
</style>
