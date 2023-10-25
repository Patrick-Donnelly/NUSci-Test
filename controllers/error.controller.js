const errorHandler = (req, res) => {
    if (req.error) {
        switch (req.error) {
            case 400:
                res.cookie('error', 'Bad Request', { maxAge: 1000 });
                res.redirect('/login-page');
                break;
            case 401:
                res.cookie('error', 'Illegal Request', { maxAge: 1000 });
                res.redirect('/login-page');
                break;
            case 403:
                res.cookie('error', 'Forbidden', { maxAge: 1000 });
                res.redirect('/login-page');
                break;
            default:
                res.cookie('error', 'Unexpected Error', { maxAge: 1000 });
                res.redirect('/');
                break;
        }
    } else {
        res.redirect('/');
    }
}

export default errorHandler;
