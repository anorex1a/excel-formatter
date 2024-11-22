function simpleFormatFormula(formula) {
    return formula
        .replace(/\+/g, ' + ')
        .replace(/-/g, ' - ')
        .replace(/\*/g, ' * ')
        .replace(/\//g, ' / ')
        .replace(/\(/g, '( ')
        .replace(/\)/g, ' ) ')
        .replace(/\s+/g, ' ') // Убираем лишние пробелы
        .trim();
}

function formatFormula() {
    const inputFormula = document.getElementById('formulaInput').value;

    if (!inputFormula.trim()) {
        alert('Введите формулу, чтобы продолжить.');
        return;
    }

    // Форматируем локально
    const formattedFormula = simpleFormatFormula(inputFormula);

    // Отображение результата
    const outputDiv = document.getElementById('formattedOutput');
    outputDiv.innerHTML = `<p><strong>Результат:</strong></p><pre>${formattedFormula}</pre>`;
}
