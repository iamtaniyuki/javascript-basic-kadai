// btnというidを持つHTML要素を取得し、定数に代入する
const button = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
button.addEventListener('click', () => {
    // h2要素を取得
    const heading = document.getElementById('text');
  
    // テキスト内容を変更
    heading.textContent = 'ボタンをクリックしました';

  });