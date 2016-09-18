exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://test:test123@ds033116.mlab.com:33116/mongo-shopping-list-aungureanu':
                            'mongodb://localhost/shopping-list');
exports.PORT = process.env.PORT || 8080;