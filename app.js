document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById('output-text');
    const copyBtn = document.getElementById('copy-btn');
    const resultDiv = document.querySelector('.result');
    const placeholderDiv = document.querySelector('.placeholder');

    function encrypt(text) {
        const rules = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            encryptedText += rules[char] || char;
        }
        return encryptedText;
    }

    function decrypt(text) {
        const rules = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
        let decryptedText = text;
        for (let key in rules) {
            decryptedText = decryptedText.split(key).join(rules[key]);
        }
        return decryptedText;
    }

    function handleTextConversion(isEncryption) {
        const input = inputText.value;

        if (input !== input.toLowerCase()) {
            alert('El texto a encriptar o desencriptar debe estar en minúsculas');
            return resetOutput();
        }

        const output = isEncryption ? encrypt(input) : decrypt(input);
        updateOutput(output);
    }

    function resetOutput() {
        outputText.value = '';
        copyBtn.style.display = 'none';
        resultDiv.style.display = 'none';
        placeholderDiv.style.display = 'flex';
    }

    function updateOutput(text) {
        outputText.value = text;
        copyBtn.style.display = 'block';
        resultDiv.style.display = 'block';
        placeholderDiv.style.display = 'none';
    }

    document.getElementById('encrypt-btn').addEventListener('click', function() {
        handleTextConversion(true);
    });

    document.getElementById('decrypt-btn').addEventListener('click', function() {
        handleTextConversion(false);
    });

    document.getElementById('copy-btn').addEventListener('click', function() {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});
