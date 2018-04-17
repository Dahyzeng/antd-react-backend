export default {
    "name": {
        "title": "名称",
        "code": "name",
        "sortor": false,
        "inputType": "text",
        "validateRules": [
            {
                required: true,
                message: '请输入名称',
            }
        ]
    },
    "userName": {
        "title": "用户名",
        "code": "userName",
        "sortor": false,
        "inputType": "text",
    },
    "categoryName": {
        "title": "类别名",
        "code": "categoryName",
        "sortor": false,
        "inputType": "text",
        "validateRules": [
            {
                required: true,
                message: '请输入类别名',
            }
        ]
    },
    "email": {
        "title": "邮箱",
        "code": "email",
        "sortor": false,
        "inputType": "text",
        "validateRules": [
            {
                required: true,
                message: '请输入邮箱',
            },
            {
                type: 'email',
                message: '邮箱地址格式错误！',
            }
        ]
    },
    "description": {
        "title": "描述",
        "code": "description",
        "sortor": false,
        "inputType": "text"
    },
    "status": {
        "title": "状态",
        "code": "status",
        "sortor": true,
        "inputType": "select",
        "options": [{value: 1, title: '激活'}, {value: 0, title: '冻结'}],
    },
    "userStatus": {
        "title": "状态",
        "code": "status",
        "sortor": true,
        "inputType": "select",
        "options": [{value: 1, title: '激活'}, {value: 0, title: '冻结'}],
    },
    "birthDay": {
        "title": "生日",
        "code": "birthDay",
        "sortor": true,
        "inputType": "date",
        "dateFormat": "YYYY-MM-DD",
    },
    "birthDayRange": {
        "title": "生日",
        "code": "birthDayRange",
        "inputType": "dateRange",
        "dateFormat": "YYYY-MM-DD",
    },
    "active": {
        "title": "状态",
        "code": "active",
        "sortor": true,
        "inputType": "select",
        "options": [{code: 1, title: '激活'}, {code: 0, title: '冻结'}],
    },
    "phone": {
        "title": "电话",
        "code": "phone",
        "sortor": true,
        "inputType": "text",
        "validateRules": [
            {
                pattern : "^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[457])[0-9]{8}$|^0\\d{2,3}-\\d{7,8}(-\\d{1,6})?$",
                message: '手机号码格式错误'
            },
        ]
    },
    "password": {
        "title": "密码",
        "code": "password",
        "validateRules": [
            {required: true, message: '请输入密码', },
            {min: 8, max:16, message: '最短8位，最长16位'}
        ]
    },
    "oldPassword": {
        "title": "密码",
        "code": "oldPassword",
        "validateRules": [
            {required: true, message: '请输入密码', },
            {min: 8, max:16, message: '最短8位，最长16位'}
        ]
    },
    "newPassword": {
        "title": "新密码",
        "code": "newPassword",
        "validateRules": [
            {required: true, message: '请输入新密码', },
        ]
    },
    "confirmPassword": {
        "title": "确认密码",
        "code": "confirmPassword",
        "validateRules": [
            {required: true, message: '请输入确认密码', },
        ]
    },
    "name2": {
        "title": "名称",
        "code": "name",
        "sortor": false,
        "inputType": "text",
        "validateRules": [
            {
                required: true,
                message: '请输入名称',
            }
        ]
    },
    "tableName": {
        "title": "名称",
        "code": "tableName",
        "sortor": false,
        "inputType": "text",
        "validateRules": [
            {
                required: true,
                message: '请输入表名',
            }
        ]
    },
    "displayName": {
        "title": "别名",
        "code": "displayName",
        "sortor": false,
        "inputType": "text",
        "validateRules": [
            {
                required: true,
                message: '请输入表别名',
            }
        ]
    },
    "logID":{
        "title": "ID",
        "code": "id",
        "sortor": false,
    },
    "userID": {
        "title": "用户ID",
        "code": "userId",
        "sortor": false,
    },
    "userEmail": {
        "title": "邮箱",
        "code": "userEmail",
        "sortor": false,
    },
    "operationDetail": {
        "title": "操作细节",
        "code": "detail",
        "sortor": false,
    },
}