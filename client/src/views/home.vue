<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <Menu active-name="1" theme="dark" width="auto">
        <div class="layout-logo-left"></div>
        <MenuItem name="1">
          <Icon type="ios-navigate" :size="iconSize"></Icon>
          <span class="layout-text">Option 1</span>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad" :size="iconSize"></Icon>
          <span class="layout-text">Option 2</span>
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-analytics" :size="iconSize"></Icon>
          <span class="layout-text">Option 3</span>
        </MenuItem>
      </Menu>
      </Col>
      <Col :span="spanRight" class="layout-menu-right">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
      </div>
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem href="#">Index</BreadcrumbItem>
          <BreadcrumbItem href="#">Apps</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">Content</div>
      </div>
      <div class="layout-copy">
        2011-2016 &copy; TalkingData
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        spanLeft: 5,
        spanRight: 19
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24;
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 5;
          this.spanRight = 19;
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .layout{
    width: 100%;
    height: 100%;
    min-height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    .ivu-row-flex{
      height: 100%;
      .layout-menu-left{
        height: 100%;
      }
      .layout-menu-right{
        height: 100%;
        position: relative;
      }
    }
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 400px;
    height: calc(~"100% - 160px");
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    position: absolute;
    left:0;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
    box-sizing: border-box;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
</style>
