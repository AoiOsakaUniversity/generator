if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch((err) => console.error('Service Worker registration failed:', err));
}

const generateButton = document.getElementById('generateButton');
const resultElement = document.getElementById('result');

const compliments = [
    'あなたは素晴らしい！',
    'あなたは才能にあふれています！',
    '今日も笑顔が素敵だね',
    '大好き！',
    '素敵な性格だね！',
    '今日もちゃんと起きてえらい！',
    '素敵なお洋服だね！',
    'あなたの優しさにいつもすくわれています！',
    'あなたと話すと元気が出るよ！',
    'あなたの声が好き！',
    'さすが阪大生！',
    'やっぱり阪大生ってすごいんだね！',
    'いつも課題頑張っててえらいよ',
    '阪大生！？賢いんだね！',
    '授業がんばっててえらーい！',
    '一緒にご飯行こう！',
    '将来有望だね！',
    'いつもがんばっててえらい！',
];
const scoldings = [
    'もっと頑張りましょう',
    '厳しいこと言うけど、君自身はそんなに凄い人じゃないことに気づいた方がいいよ',
    '阪大生なのにそんなこともできないの？',
    'なんでそんな悲しいこと言うの？',
    '早いうちに課題を終わらせておけばよかっただけの話だよね？',
    'もっと早く起きればよかったのに',
    'もっと早く寝たらよかったのに',
    '学歴だけだよね君の取柄って',
    'また休憩するの？いつも休憩してない？',
    '君、イキってるよね？',
    'それの何がおもろいん？',
    'うるさい、周り見てごらん',
    '阪大生やから何なん？',
];

let count = 0;

generateButton.addEventListener('click', () => {
    count++;
    resultElement.classList.remove('black', 'blue');

    if (count % 10 === 0) {
        const randomIndex = Math.floor(Math.random() * scoldings.length);
        resultElement.textContent = scoldings[randomIndex];
        resultElement.classList.add('blue');
    } else {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        resultElement.textContent = compliments[randomIndex];
        resultElement.classList.add('black');
    }
});
