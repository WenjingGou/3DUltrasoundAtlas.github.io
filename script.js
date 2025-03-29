document.getElementById('imageSelector').addEventListener('change', function() {
    const selectedOption = this.value;
    if (selectedOption == "Option1") {
        document.getElementById('myImage').src = "https://th.bing.com/th/id/OIP.8EYPyCU4GgOfq6qrzRH_OwHaE8?rs=1&pid=ImgDetMain";
        document.getElementById('words').innerText = "https://th.bing.com/th/id/OIP.8EYPyCU4GgOfq6qrzRH_OwHaE8?rs=1&pid=ImgDetMain";
    } else if (selectedOption == "Option2") {
        document.getElementById('myImage').src = "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg";
        document.getElementById('words').innerText = "精神狸花猫";
    } else if (selectedOption == "Option3") {
        document.getElementById('myImage').src = "https://3.bp.blogspot.com/_LDF9z4ZzZHo/TQSal_6HDrI/AAAAAAAAAV8/bp0WlAKA7Ns/s1600/DWHJ_30018.jpg";
        document.getElementById('words').innerText = "挖煤的";
    } 
    
});