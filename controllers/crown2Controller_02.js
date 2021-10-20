const serviceCrown2Controller_02 = require('./serviceCrown2Controller_02');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_02.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown2_02', {
      data: results,
      title: 'Crown_02',
      name: '黃致瑋',
      id: '209410702',
    });
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};
