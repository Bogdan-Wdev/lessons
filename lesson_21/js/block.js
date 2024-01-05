// Получаем все элементы с классом "card__text"
var cardTextElements = document.querySelectorAll('.card__text');

// Перебираем каждый элемент
cardTextElements.forEach(function (element) {
    // Получаем текстовые узлы внутри элемента
    var textNodes = getTextNodes(element);

    // Перебираем каждый текстовый узел
    textNodes.forEach(function (textNode) {
        // Проверяем количество символов
        if (textNode.nodeValue.length > 200) {
            // Обрезаем текст и добавляем троеточие
            textNode.nodeValue = textNode.nodeValue.substring(0, 200) + '...';
        }
    });
});

// Функция для получения текстовых узлов внутри элемента
function getTextNodes(element) {
    var textNodes = [];
    var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    
    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }
    
    return textNodes;
}