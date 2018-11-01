const api = {
    'POST /api/user/login': (req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
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
    }
};
module.exports = api;