const knex = require("../db/knex");

const findOrCreate = async (tableName, criteria, values) => {
  return await knex.transaction(async (trx) => {
    let user = await trx(tableName).where(criteria);
    if (user.length === 0) {
      user = await trx(tableName).insert(values, ["*"]);
    }
    return user[0];
  });
};

module.exports = findOrCreate;
