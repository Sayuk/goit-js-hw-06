

const numberOfCategriesInfo = function (elements) {
  const categoriesEl = document.querySelectorAll(elements);

  return console.log(`Number of categories ${categoriesEl.length} `);
};

numberOfCategriesInfo('.item');

const categoryInfo = function (elements) {
  const itemsEl = document.querySelectorAll(elements);

  return itemsEl.forEach(item =>
    console.log(
      `Category: ${
        item.querySelector('h2').textContent
      } Elements: ${item.querySelectorAll('li').length}`,
    ),
  );
};

categoryInfo('.item');
numberOfCategriesInfo.innerHTML = categoryInfo;