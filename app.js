document.addEventListener('DOMContentLoaded', function() {

    function encrypt(text) {
        const rules = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return text.replace(/[eioua]/g, match => rules[match]);
    }

    function decrypt(text) {
        const rules = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        return text.replace(/enter|imes|ai|ober|ufat/g, match => rules[match]);
    }

    document.getElementById('encrypt-btn').addEventListener('click', function() {
        const inputText = document.getElementById('input-text').value;
        const outputText = document.getElementById('output-text');
        const copyBtn = document.getElementById('copy-btn');
        const resultDiv = document.querySelector('.result');
        const placeholderDiv = document.querySelector('.placeholder');

        if (inputText) {
            outputText.value = encrypt(inputText);
            copyBtn.style.display = 'block';
            resultDiv.style.display = 'block';
            placeholderDiv.style.display = 'none';
        } else {
            outputText.value = '';
            copyBtn.style.display = 'none';
            resultDiv.style.display = 'none';
            placeholderDiv.style.display = 'flex';
        }
    });

    document.getElementById('decrypt-btn').addEventListener('click', function() {
        const inputText = document.getElementById('input-text').value;
        const outputText = document.getElementById('output-text');
        const copyBtn = document.getElementById('copy-btn');
        const resultDiv = document.querySelector('.result');
        const placeholderDiv = document.querySelector('.placeholder');

        if (inputText) {
            outputText.value = decrypt(inputText);
            copyBtn.style.display = 'block';
            resultDiv.style.display = 'block';
            placeholderDiv.style.display = 'none';
        } else {
            outputText.value = '';
            copyBtn.style.display = 'none';
            resultDiv.style.display = 'none';
            placeholderDiv.style.display = 'flex';
        }
    });

    document.getElementById('copy-btn').addEventListener('click', function() {
        const outputText = document.getElementById('output-text');
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});