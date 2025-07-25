let data = null;

async function loadData() {
    try {
        const response = await fetch('me.json');
        data = await response.json();
    } catch (err) {
        console.error('Kunde inte ladda me.json', err);
    }
}

function answerQuestion(question) {
    if (!data) return 'Data saknas.';
    const q = question.toLowerCase();
    if (q.includes('namn') || q.includes('name')) {
        return `Jag heter ${data.name}.`;
    }
    if (q.includes('ålder') || q.includes('age')) {
        return `Jag är ${data.age} år.`;
    }
    if (q.includes('stad') || q.includes('city')) {
        return `Jag bor i ${data.city}.`;
    }
    if (q.includes('land') || q.includes('country')) {
        return `Jag kommer från ${data.country}.`;
    }
    if (q.includes('språk') || q.includes('language')) {
        return `Jag pratar ${data.language}.`;
    }
    return 'Jag har tyvärr inget svar på den frågan.';
}

window.addEventListener('DOMContentLoaded', () => {
    loadData();
    const btn = document.getElementById('askBtn');
    btn.addEventListener('click', () => {
        const question = document.getElementById('question').value;
        const ans = answerQuestion(question);
        document.getElementById('answer').textContent = ans;
    });
});
