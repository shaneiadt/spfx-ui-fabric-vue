import ListActions from '../node_modules/office-ui-fabric-vue/src/components/List/ListActions.vue.js';

var script = {
  extends: ListActions,
  created: function created() {
    this.$options._scopeId = this.$parent.$options._scopeId;
  }
};

export default script;