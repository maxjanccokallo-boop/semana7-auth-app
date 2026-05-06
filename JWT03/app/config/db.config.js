export default {
    HOST: "trolley.proxy.rlwy.net",
    USER: "root",
    PASSWORD: "hYRoGteYrlYZqpFesgKSPMZcFkvCqJiY",
    DB: "railway",
    PORT: 56786,
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire:30000,
        idle: 10000,
    },

};