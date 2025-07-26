let data = null;

fetch('me.json')
  .then(response => response.json())
  .then(json => { data = json; });

document.getElementById('askBtn').addEventListener('click', () => {
  const question = document.getElementById('question').value.toLowerCase();
  let answer = "Jag förstår inte frågan.";

  if (!data) {
    answer = "Datat är inte laddat än.";
  } else {
    if (question.includes("vad heter jag")) {
      answer = `Du heter ${data.name}.`;
    } else if (question.includes("var bor jag") || question.includes("vilken stad")) {
      answer = `Du bor i ${data.city}, ${data.country}.`;
    } else if (question.includes("vad gillar jag")) {
      answer = `Du gillar ${data.interests.join(", ")}.`;
    } else if (question.includes("vad gillar jack")) {
      const jack = data.children.find(c => c.name.toLowerCase() === "jack");
      answer = `Jack gillar ${jack.interests.join(", ")}.`;
    } else if (question.includes("påminn")) {
      answer = `Dina påminnelser: ${data.reminders.join(". ")}.`;
    }
  }

  document.getElementById('answer').innerText = answer;
});