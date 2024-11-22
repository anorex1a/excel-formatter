function formatFormula() {
    const inputFormula = document.getElementById('formulaInput').value;

    if (!inputFormula) {
        alert('Please enter a formula.');
        return;
    }

    // Simple example of formatting
    const formatted = inputFormula
        .replace(/;/g, ';\n')
        .replace(/\*/g, ' * ')
        .replace(/\+/g, ' + ')
        .replace(/-/g, ' - ');

    document.getElementById('formattedOutput').textContent = formatted;
}
