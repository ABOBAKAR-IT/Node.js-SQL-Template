const { Sequelize } = require("sequelize");
const post = require("../model/post");
module.exports.add = async (body) => {
  let data = await post.create({
    name: body.name,
  title:body.title,
  userTableId:body.userTableId
  });
  return data;
};
module.exports.bulk = async (body) => {
  let data = await post.bulkCreate([
    {
      
      name: body[0].name,
      title:body[0].title
    },
    {
      name: body[1].name,
      title:body[1].title
    },
  ]);
  return data;
};
module.exports.update = async (body) => {
  let data = await post.update(
    {
      name: body.name,
      title:body.title
    },
    { where: { id: body.id } }
  );
  return data;
};

module.exports.findall = async (body) => {
  let data = await post.findAll({});
  return data;
};
module.exports.findone = async (body) => {
  let data = await post.findAll({ where: { id: body.id } });
  return data;
};



module.exports.del = async (body) => {
  try {
    let data = await post.destroy({ where: { id: body.id } });

    if (data == 0) return "post not delete";
    else return "post delete";
  } catch (error) {
    console.log(": " + error);
    return error;
  }
};





module.exports.truncate = async (body) => {
  try {
    let data = await post.destroy({ truncate: true });

    if (data == 0) return "all post delete";
    else return "not delete";
  } catch (error) {
    console.log(": " + error);
    return error;
  }
};
