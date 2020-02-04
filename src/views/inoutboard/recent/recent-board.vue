<template>
  <div class="rencent-board-wrap">
    <draggable-kanban
      :key="1"
      :list="list1"
      :group="group"
      class="kanban todo"
      header-text="Todo"
    />
    <draggable-kanban
      :key="2"
      :list="list2"
      :group="group"
      class="kanban working"
      header-text="Working"
    />
    <draggable-kanban
      :key="3"
      :list="list3"
      :group="group"
      class="kanban done"
      header-text="Done"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import DraggableKanban from '@/components/DraggableKanban/index.vue';

@Component({
  name: 'RecentBoard',
  components: {
    AppContent,
    DraggableKanban
  }
})
export default class extends Vue {
  private group = 'mission';
  private list1 = [
    { name: 'Mission', id: 1 },
    { name: 'Mission', id: 2 },
    { name: 'Mission', id: 3 },
    { name: 'Mission', id: 4 }
  ];
  private list2 = [
    { name: 'Mission', id: 5 },
    { name: 'Mission', id: 6 },
    { name: 'Mission', id: 7 }
  ];
  private list3 = [
    { name: 'Mission', id: 8 },
    { name: 'Mission', id: 9 },
    { name: 'Mission', id: 10 },
    { name: 'Mission', id: 8 },
    { name: 'Mission', id: 9 },
    { name: 'Mission', id: 10 },
    { name: 'Mission', id: 8 },
    { name: 'Mission', id: 9 },
    { name: 'Mission', id: 10 },
    { name: 'Mission', id: 8 },
    { name: 'Mission', id: 9 },
    { name: 'Mission', id: 10 },
    { name: 'Mission', id: 8 },
    { name: 'Mission', id: 9 },
    { name: 'Mission', id: 10 }
  ];
  mounted() {}
}
</script>

<style lang="scss">
.kanban {
  margin-right: 20px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  border:1px #fff solid;
  .board-column-content {
    height: calc(100vh - 200px) !important;
    overflow: auto !important;
    padding-right: 10px;
    border-right-width: 0px!important;
    background: $mainBg;
    .board-item {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1)!important;
      &:hover{
         box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2)!important;
      }
    }
  }
  &.todo {
    .board-column-header {
      background: #4a9ff9;
    }
  }

  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }

  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>

<style lang="scss" scoped>
.rencent-board-wrap {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
}
</style>
