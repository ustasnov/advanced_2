function getSpecials(character) {
  return character.special.map((val) => {
    const {
      id, name, icon, description = 'Описание не доступно',
    } = val;
    return {
      id, name, icon, description,
    };
  });
}

module.exports = {
  getSpecials,
};
