function openModal() {
    document.getElementById("content").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("_locked");
}

function closeModal() {
    document.getElementById("content").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("_locked");
}

function signIn() {
    // Добавьте здесь код для обработки входа пользователя
    // Например, отправка данных на сервер или проверка введенных данных
    alert("Signing In...");
    closeModal();
}