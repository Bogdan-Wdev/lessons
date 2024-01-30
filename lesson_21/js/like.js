function increaseLikes(element) {
    var likeCountElement = element.querySelector(".like__count");

    // Получаем текущее количество лайков
    var currentLikes = parseInt(likeCountElement.textContent);

    // Увеличиваем количество лайков на 1
    var newLikes = currentLikes + 1;

    // Обновляем отображение количества лайков
    likeCountElement.textContent = newLikes;

}