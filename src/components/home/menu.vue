<template>
    <Sider hide-trigger :style="{background: '#fff'}">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']"  @on-select="onMenuSelected">
          <MenuItem name="yhtj">用户统计</MenuItem>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    业务统计
                </template>
                <MenuItem v-for="(item,index) in menuList" :name="item.name" :key="index">{{item.item}}</MenuItem>
            </Submenu>
        </Menu>
    </Sider>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        { name: "hz", item: "户政" },
        { name: "crj", item: "出入境" },
        { name: "jg", item: "交管" }
      ],
      request : {
        hz:'../../static/data/hz.json',
        crj:'../../static/data/crj.json',
        jg:'../../static/data/jg12123.json'
      }
    };
  },
  methods: {
    onMenuSelected(e) {
      console.log(e);
      this.$store.commit("changeBreadcrumb", e);
      this.$store.commit("changeTableTitle", e);
      this.get(this.request[e])
      // this.get()
    },
    // 获取表格数据
    get(url) {
      this.$axios
        .get(url)
        .then(res => {
          console.log(res);
          this.$store.commit("changeTableData", res.data);
          // console.log('this.$store.tableData.yhtj',this.$store.tableData.yhtj)
        })
        .catch(err => console.log(err));
    }
  },
  mounted () {
    this.get('../../static/data/getAllCity.json')
  }
};
</script>
<style scoped>
</style>

