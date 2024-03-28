const poneys = [
    { name: 'Pinky Pie', strength: '50', speed: '65', charisma: '80' },
    { name: 'Rainbow Dash', strength: '80', speed: '75', charisma: '90' },
    {name: 'Twilight Sparkle',strength: '90',speed: '45',charisma: '70'},
    { name: 'Rarity', strength: '30', speed: '50', charisma: '85' },
    { name: 'Fluttershy', strength: '67', speed: '64', charisma: '30' }
]

function createArticle() {
    const PoneysImage = [
        { img: './img/pony.png' },
        { img: './img/pony2.png' },
        { img: './img/pony3.png' },
        { img: './img/pony4.png' },
        { img: './img/pony5.png' }
    ];

    const imageElement = document.getElementById('image');
    const imageBtnPrev = document.getElementById('imageBtnPrev');
    const imageBtnNext = document.getElementById('imageBtnNext');

    let currentIndex = 0;

    function buttonImg() {
        // précédente
        const rightDis = './img/arrowDis.png';
        const rightVouch = './img/arrow.png';
        // suivante
        const leftDis = './img/leftDis.png';
        const leftVouch = './img/right.png';

        
        if (currentIndex === 0) {
            imageBtnPrev.querySelector('img').src = rightDis;
        } else {
            imageBtnPrev.querySelector('img').src = rightVouch;
        }

      
        if (currentIndex === PoneysImage.length - 1) {
            imageBtnNext.querySelector('img').src = leftDis;
        } else {
            imageBtnNext.querySelector('img').src = leftVouch;
        }
    }

    function showImage(index) {
        imageElement.src = PoneysImage[index].img;
        buttonImg(); // met à jour les images des boutons
    }

    showImage(currentIndex);

    imageBtnPrev.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        } else {
            alert("C'est la première image !");
        }
    });

    imageBtnNext.addEventListener('click', function () {
        // si mon index actuel est la valeur maximum de mon tableau poneysimage
        if (currentIndex < PoneysImage.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        } else {
            alert("C'est la dernière image !");
        }
    });
}

createArticle();

