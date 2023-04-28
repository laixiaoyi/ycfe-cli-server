'use strict';

const { Controller } = require('egg');

const ADD_TEMPLATE = [
  {
    name: 'vue2项目模板',
    value: 'template-vue2',
    npmName: '@ycfe-cli/template-vue2',
    version: '1.0.0',
  }, {
    name: 'vue3项目模板',
    value: 'template-vue3',
    npmName: '@ycfe-cli/template-vue3',
    version: '1.0.0',
  },
];

class TemplateController extends Controller {
  // 项目模板查询
  async index() {
    const { ctx } = this;
    ctx.body = ADD_TEMPLATE;
  }

  // 项目模板单条查询
  async show() {
    const { ctx } = this;
    ctx.body = 'RESTful API show';
  }

  // 项目模板新增
  async create() {
    const { ctx } = this;
    ctx.body = 'RESTful API create';
  }

  // 项目模板更新
  async update() {
    const { ctx } = this;
    ctx.body = 'RESTful API update';
  }

  // 项目模板删除
  async destroy() {
    const { ctx } = this;
    ctx.body = 'RESTful API update';
  }
}

module.exports = TemplateController;
