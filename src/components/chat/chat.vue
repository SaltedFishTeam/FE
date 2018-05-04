<template>
    <div class="main">
        <div class="chat-friends">
            <el-tabs type="border-card" >
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-date"></i> 我的好友</span>
                    <happyScroll resize size="8">
                        <div>
                            <el-input
                                placeholder="输入关键字进行过滤"
                                v-model="filterText">
                            </el-input>

                            <el-tree
                                class="filter-tree"
                                :data="data2"
                                :props="defaultProps"
                                :filter-node-method="filterNode"
                                ref="tree2">
                            </el-tree>
                            </div>
                    </happyScroll>
                </el-tab-pane>
                <el-tab-pane label="消息中心">
                    <el-card shadow="always">
                    总是显示
                    </el-card>
                </el-tab-pane>
            </el-tabs>
            
        </div>
        <div class="chat-console">
            <div class="chat-console-title"></div>
            <div class="chat-console-content">
            </div>
            <div class="chat-console-input">
                <textarea class="coolscrollbar"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import FriendCard from '@/components/chat/friendCard'
    import { HappyScroll } from 'vue-happy-scroll'
    // 引入css，推荐将css放入main入口中引入一次即可。
    import 'vue-happy-scroll/docs/happy-scroll.css'
    export default{
        components: {
            FriendCard,
            HappyScroll
        },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
        methods: {
            filterNode(value,data) {
                if(!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        data() {
            return {
                filterText: '',
                name: 'nihao',
                data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }] 
                    }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }, {
                        id: 6,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }]
                    }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }, {
                        id: 8,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }]
                    }],
                    defaultProps: {
                    children: 'children',
                    label: 'label'
                  }
            }
        }
    }
</script>

<style>
html,body {
    width: 100%;
    height: 100%;
    background: rgb(217,233,255);
}
.main {
    max-width: 60%;
    min-width: 1000px;
    height: 100px;
    margin: 0 auto;
    margin-top: 40px;
    display:flex;
    justify-content: space-between;
}

.chat-friends {
    width: 25%;
}

.el-tab-pane {
    height: 90%;
}


.happy-scroll-container {
    width: 100% !important;
    height: 100% !important;
}

.el-tabs__content {
    height: 600px;
    padding: 0 !important;
}

.el-tree-node__label {
    width: 90%;
}


.el-tree-node__content {
    padding-left: 0px;
}
.el-tree-node__children .el-tree-node[role="treeitem"] {
    height: 100px;
}
.el-tree-node__children .el-tree-node[role="treeitem"] .el-tree-node__content {
    height: 100%;
}
.el-tree-node__children .el-tree-node[role="treeitem"] .el-tree-node__expand-icon {
    display: none;
}
.chat-console {
    margin-left: 40px;
    flex-grow: 1;
    height: 641px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.chat-console-title {
    width: 100%;
    height: 40px;
    background: rgb(245,247,250);
   
    flex-grow: 1;
}
.chat-console-content {
    width: 95%;
    height: 100px;
    flex-grow: 50;
    border-bottom: 1px solid rgb(228,231,237);
}
.chat-console-input {
    width: 95%;
    height: 100px;
    flex-grow: 10;
    margin-bottom: 20px;
}
.coolscrollbar{scrollbar-arrow-color:yellow;scrollbar-base-color:lightsalmon;} 
</style>