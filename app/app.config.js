import 'dotenv/config';

export default {
    name: 'CoolApp',
    version: '1.0.0',
    extra: {
        serverUri: process.env.SERVER_URI,
    },
};
