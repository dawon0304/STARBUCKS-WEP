const searchEl = document.querySelector(".search");

// 위에서 찾은 .search에서 input 요소를찾을 때 .search가 중복되지않게 작성하는 법.
const searchInputEl = searchEl.querySelector("Input")

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});