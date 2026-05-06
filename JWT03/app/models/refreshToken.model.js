export default (sequelize, Sequelize) => {
  const RefreshToken = sequelize.define("refreshToken", {
    token: {
      type: Sequelize.STRING,
    },
    expiryDate: {
      type: Sequelize.DATE,
    },
  });

  RefreshToken.createToken = async function (user) {
    let expiredAt = new Date();

    // 24 horas
    expiredAt.setSeconds(expiredAt.getSeconds() + 86400);

    // Token simple (puedes mejorarlo luego)
    let _token = Math.random().toString(36).substring(2, 15);

    let refreshToken = await this.create({
      token: _token,
      userId: user.id,
      expiryDate: expiredAt, // ✅ AQUÍ ESTÁ LA CORRECCIÓN
    });

    return refreshToken.token;
  };

  return RefreshToken;
};