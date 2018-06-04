"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../../types/appearance");
const lodash_1 = require("lodash");
const addForm = {
    title: '新建页面',
    properties: {
        title: {
            title: '标题',
            type: appearance_1.SchemaTypes.string,
            ui: {
                grid: {
                    span: 16
                }
            }
        },
        keyword: {
            title: '关键词',
            type: appearance_1.SchemaTypes.string
        },
        description: {
            title: '摘要',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.textarea,
                grid: {
                    span: 24
                }
            }
        },
        content: {
            title: '内容',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.ueditor,
                grid: {
                    span: 24
                }
            }
        },
    },
    required: [],
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 8
        }
    }
};
const editForm = lodash_1.cloneDeep(addForm);
editForm.title = '编辑页面';
editForm.required = ['username'];
editForm.properties.secret = {
    title: '密保',
    type: appearance_1.SchemaTypes.string
};
exports.appearance = {
    columnSets: {
        default: [
            {
                title: '页面名称',
                index: 'name',
                type: 'link',
                action: 'edit'
            },
            {
                title: '标题',
                index: 'title'
            }
        ]
    },
    formSets: {
        query: {
            properties: {
                name: {
                    title: '名称',
                    type: appearance_1.SchemaTypes.string,
                    maxLength: 30,
                    ui: {
                        placeholder: '请输入页面名称'
                    }
                }
            }
        },
        add: addForm,
        edit: editForm
    }
};
//# sourceMappingURL=page.appearance.js.map