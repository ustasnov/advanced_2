function getSpecial({ ...special }) {
  const {
    id, name, icon, description = 'Описание не доступно',
  } = special;
  return {
    id, name, icon, description,
  };
}

function getSpecials({ ...rest }) {
  const result = [];
  rest.special.forEach((val) => {
    result.push(getSpecial(val));
  });
  return result;
}

module.exports = {
  getSpecials,
};
