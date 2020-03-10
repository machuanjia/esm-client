<template>
  <app-content
    :is-flex-header="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hcenter>
      <el-input
        v-model="searchText"
        class="search-container"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
      />
    </template>
    <template v-slot:hright>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="openCollectionAction"
      >
        Category
      </el-button>
    </template>
    <template v-slot:body>
      <el-table
        :data="artilesData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        fit
        highlight-current-row
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column
          prop="title"
          label="名称"
          sortable
          width="180"
        />

        <el-table-column
          prop="category"
          label="类型"
          sortable
        />
        <el-table-column
          width="160"
          align="center"
          label="操作"
        >
          <template slot-scope="{row}">
            <i
              v-if="!row.type"
              class="el-icon-edit-outline table-icon-action"
              @click="editAction(row)"
            />
            <i
              v-if="!row.type"
              class="el-icon-delete table-icon-action"
              @click="removeAction(row)"
            />
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        v-if="collectionVisible"
        :title="collectionTitle"
        :visible.sync="collectionVisible"
        :width="collectionSize"
      >
        <articlesCategoryCollection
          :entity="entity"
          @saveAction="saveAction"
          @cancelAction="cancelAction"
        />
      </el-dialog>
    </template>
  </app-content>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import rolesCollection from '@/views/auth/roles/roles-collection.vue';
import { mixins } from 'vue-class-component';
import ViewMixin from '@/components/Mixin';
import rolesDetail from '@/views/auth/roles/roles-detail.vue';
import {
  getArticlesCategory,
  getArticleCategory,
  createArticleCategory,
  updateArticleCategory,
  deleteArticleCategory
} from '@/api/articles';
import articlesCategoryCollection from '@/views/articles/category/articles-category-collection.vue';

@Component({
  name: 'articlesCategory',
  components: {
    AppContent,
    articlesCategoryCollection
  }
})
export default class extends mixins(ViewMixin) {
  private artilesData = [];

  created() {
    this.getArticlesCategory();
  }

  mounted() {}

  async editAction(row: any) {
    const { data } = await getArticleCategory(row.id, {});
    if (data) {
      this.editCollectionAction(data)
    }
  }

  removeAction(row: any) {
    this.removeCollectionAction(async(successFn: any) => {
      const { data } = await deleteArticleCategory(row.id);
      this.getArticlesCategory();
      if (successFn) {
        successFn();
      }
    });
  }

  saveAction(data: any) {
    if (this.entity) {
      this.updateRole(this.entity.id, data);
    } else {
      this.addRole(data);
    }
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }

  private async getArticlesCategory() {
    const { data } = await getArticlesCategory({});
    if (data) {
      this.artilesData = data;
    }
  }

  private async addRole(payload: any) {
    const { data } = await createArticleCategory(payload);
    if (data) {
      this.getArticlesCategory();
    }
  }

  private async updateRole(id: number, payload: any) {
    const { data } = await updateArticleCategory(id, payload);
    if (data) {
      this.getArticlesCategory();
    }
  }
}
</script>

<style lang="scss">
</style>
