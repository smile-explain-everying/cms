
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 0px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>海南公安</BreadcrumbItem>
                    <BreadcrumbItem>统计中心</BreadcrumbItem>
                    <BreadcrumbItem>{{$store.state.Breadcrumb}}</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout :style="{flexDirection: 'row'}">
                        <menu-list></menu-list>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <Table border :columns="tables[$store.state.tableTitle]" :data="$store.state.tableData[$store.state.tableTitle]"></Table>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</div>
</template>
<script>
import MenuList from "@/components/home/menu.vue";
import echarts from "echarts";
import { setTimeout } from "timers";
export default {
  components: {
    MenuList
  },
  data() {
    return {
      tableEchartData: {},
      tables: {
        yhtj: [
          {
            title: "名称",
            key: "city",
            sortable: true
          },
          {
            title: "二维码扫描次数",
            key: "qrCode_num",
            sortable: true
          },
          {
            title: "用户关注数",
            key: "focus_mun",
            sortable: true
          },
          {
            title: "实名认证用户数",
            key: "real_num",
            sortable: true
          },
          {
            title: "时间段",
            key: "create_time",
            sortable: true
          },
          {
            title: "操作",
            key: "click",
            render: (h, params) => {
              return h("div", [
                h(
                  "Button",
                  {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    style: {},
                    on: {
                      click: () => {
                        this.show(params);
                      }
                    }
                  },
                  "查看图表"
                )
              ]);
            }
          }
        ],
        hz: [
          {
            title: "名称",
            key: "city",
            sortable: true
          },
          {
            title: "总数",
            key: "total",
            sortable: true
          },
          {
            title: "天数",
            key: "today",
            sortable: true
          },
          {
            title: "时间",
            key: "time",
            sortable: true
          }
        ],
        crj: [
          {
            title: "名称",
            key: "city",
            sortable: true
          },
          {
            title: "预约总数",
            key: "yyzs",
            sortable: true
          },
          {
            title: "孔令总数",
            key: "zfzs",
            sortable: true
          },
          {
            title: "dtyy",
            key: "dtyy",
            sortable: true
          },
          {
            title: "dtzf",
            key: "dtzf",
            sortable: true
          },
          {
            title: "时间",
            key: "time",
            sortable: true
          }
        ],
        jg: [
          {
            title: "名称",
            key: "city",
            sortable: true
          },
          {
            title: "zs12123",
            key: "zs12123",
            sortable: true
          },
          {
            title: "dt12123",
            key: "dt12123",
            sortable: true
          },
          {
            title: "时间",
            key: "time",
            sortable: true
          }
        ]
      }
    };
  },
  methods: {
    show(p) {
      console.log(p.row);
      this.$Modal.info({
        content: "<div class='echartsModel' style ='height:500px;'>111111111111111</div>",
        width:'1000'
      });
      // this.nextTick(function () {
      // // DOM 更新了
      //     })
      setTimeout(function() {
        let echartsEl = document.getElementsByClassName("echartsModel")[0].setAttribute("style", "width:100%;height:500px;padding-top:50px;");;
        let myChart = echarts.init(
          document.getElementsByClassName("echartsModel")[0]
        );
        console.log(p)
        myChart.setOption({
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: "0%",
            right: "4%",
            bottom: "3%",
            width:"100%",
            height:"500px",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: ["二维码扫描次数", "用户关注数", "实名认证用户数"],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              scale: true
            }
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              barWidth: "60%",
              data: [p.row.qrCode_num, p.row.focus_mun, p.row.real_num]
            }
          ]
        })
      }, 100);
    }
  },
  mounted() {
    console.log(echarts);
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
