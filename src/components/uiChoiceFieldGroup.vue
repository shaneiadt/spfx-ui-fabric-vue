<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import ChoiceFieldGroup from "office-ui-fabric-vue/src/components/choice_field_group/ChoiceFieldGroup.vue";
import { ChoiceFieldGroup as fabricChoiceFieldGroup } from "office-ui-fabric-js/src/components/choiceFieldGroup/ChoiceFieldGroup"

export default {
    loadStyles,
    beforeMount(){ 
        this.$fabric = { 
            ChoiceFieldGroup : fabricChoiceFieldGroup 
        } 
    },
    extends :  ChoiceFieldGroup
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/RadioButton/RadioButton";
    @import "node_modules/office-ui-fabric-js/src/components/ChoiceFieldGroup/ChoiceFieldGroup";
</style>
