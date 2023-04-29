'use strict';

const { Controller } = require('egg');

class TemplateController extends Controller {
  // 项目模板查询
  async index() {
    const { ctx } = this;
    const res = await ctx.model.Template.find({});
    ctx.body = res;
  }

  // 项目模板详情查询
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const res = await ctx.model.Template.find({ value: id });
    if (res.length > 0) {
      ctx.body = res[0];
    } else {
      ctx.body = {};
    }
  }

  // 项目模板新增
  async create() {
    const { ctx } = this;
    ctx.model.Template.create({
      name: 'name',
      value: 'value',
    });
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
