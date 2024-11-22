function formatFormula() {
            const inputFormula = document.getElementById('formulaInput').value;

            if (!inputFormula) {
                alert('Пожалуйста, введите формулу / Please enter a formula.');
                return;
            }

            // Функция для форматирования формулы
            function prettyFormat(formula) {
                // Форматируем формулу для лучшего восприятия
                let formatted = formula
                    .replace(/([А-Яа-яA-Za-z0-9_]+)(?=\()/g, '$& ') // Оставляем пробел после каждой функции
                    .replace(/(,)/g, '$1 ') // Оставляем пробел после запятой
                    .replace(/;/g, ';\n  ')  // Добавляем отступ после ;
                    .replace(/\(/g, '(\n  ') // Оставляем отступ после (
                    .replace(/\)/g, '\n)\n')  // Оставляем отступ перед )
                    .replace(/\n\s*\n/g, '\n') // Убираем лишние пустые строки
                    .replace(/\n/g, '\n  '); // Добавляем отступы для всех строк

                return formatted.trim();
            }

            const formattedFormula = prettyFormat(inputFormula);

            // Выводим результат
            const outputElement = document.getElementById('formattedOutput');
            outputElement.innerHTML = '<strong>Результат / Result:</strong><pre>' + formattedFormula + '</pre>';

            // Показываем кнопку "Копировать"
            document.getElementById('copyButton').style.display = 'inline-block';
        }

        function copyToClipboard() {
            const outputElement = document.getElementById('formattedOutput');
            const formattedText = outputElement.textContent.replace('Результат / Result:\n\n', ''); // Убираем заголовок "Результат:"

            navigator.clipboard.writeText(formattedText).then(() => {
                const copyButton = document.getElementById('copyButton');
                copyButton.textContent = 'Скопировано / Copied'; // Меняем текст кнопки
                setTimeout(() => {
                    copyButton.textContent = 'Копировать / Copy'; // Возвращаем оригинальный текст кнопки
                }, 2000); // Через 2 секунды возвращаем текст обратно
            }).catch(err => {
                console.error('Ошибка копирования / Copying error: ', err);
            });
        }
