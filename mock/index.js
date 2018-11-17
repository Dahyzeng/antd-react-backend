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
        return res.json({
            success: true,
            data: [
                {
                    name: '管理员A',
                    email: '11@qq.com',
                    birthDay: '1993-08-18',
                    userStatus: 1
                },
                {
                    name: '管理员B',
                    email: '11@qq.com',
                    birthDay: '1993-08-18',
                    userStatus: 0
                },
                {
                    name: '管理员C',
                    email: '11@qq.com',
                    birthDay: '1993-08-18',
                    userStatus: 1
                },
            ]
        })
    }
};
module.exports = api;