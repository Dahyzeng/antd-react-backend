const api = {
    'POST /api/user/login': (req, res) => {
        const { email, password } = req.body;
        if (email === '11@qq.com' && password === '123456') {
            return res.json({
                success: true,
                data: {
                    username: 'taurin',
                    age: 25
                }
            })
        } else {
            return res.json({
                success: false,
                data: {},
                msg: '用户名或密码错误！'
            })
        }
    },
    'POST /api/admin/queryList': (req, res) => {
        return res.json(ADMIN_LIST_JSON)
    },
    'POST /api/admin/add': (req, res) => {
        console.log(req.body);
        let admin = ADMIN_LIST_JSON.data.filter(item => {
            return req.body.email === item.email;
        });
        if (admin.length > 0) {
            return res.json({
                success: false,
                msg: "邮箱已存在"
            })
        } else {
            return res.json({
                success: true,
            })
        }

    }
};
module.exports = api;

const ADMIN_LIST_JSON = {
    success: true,
    data: [
        {
            id: 1,
            name: '管理员A',
            email: '11@qq.com',
            birthDay: '1993-08-18',
            userStatus: 1
        },
        {
            id: 2,
            name: '管理员B',
            email: '12@qq.com',
            birthDay: '1993-08-18',
            userStatus: 0
        },
        {
            id: 3,
            name: '管理员C',
            email: '13@qq.com',
            birthDay: '1993-08-18',
            userStatus: 1
        },
    ]
}