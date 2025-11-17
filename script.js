// Grab DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// UH HR responses with HTML links
const responses = {
  leave:
    'To request leave, log into UH Self-Service → Employee → Leave Request. Supervisors review and approve online. For Family/Medical Leave (FMLA), submit Form G-1. Learn more: <a href="https://www.hawaii.edu/ohr/benefits/leave/" target="_blank">UH Leave Policies</a>',

  vacation:
    'Vacation leave must be requested and approved before time off. You can check your balance in UH Self-Service → Leave Balances. Vacation policy: <a href="https://www.hawaii.edu/ohr/benefits/leave/vacation/" target="_blank">Vacation Leave Info</a>',

  sick:
    'For sick leave, notify your supervisor ASAP and log your absence in UH Self-Service. If sick leave exceeds 3 days, a medical certificate may be required. Sick leave info: <a href="https://www.hawaii.edu/ohr/benefits/leave/sick-leave/" target="_blank">Sick Leave Policy</a>',

  pay:
    'View pay statements under UH Self-Service → Payroll → View Paycheck. Payroll schedules and tax resources: <a href="https://www.hawaii.edu/ohr/benefits/payroll/" target="_blank">UH Payroll Info</a>',

  benefits:
    'UH employees receive health, dental, vision, and retirement benefits through EUTF. Compare plans at <a href="https://eutf.hawaii.gov/" target="_blank">EUTF Website</a>. UH benefits overview: <a href="https://www.hawaii.edu/ohr/benefits/" target="_blank">UH Benefits</a>',

  address:
    'Update your address in UH Self-Service → Personal Information. Instructions: <a href="https://www.hawaii.edu/ohr/employee-relations/personal-data-changes/" target="_blank">Personal Data Changes</a>',

  name:
    'Submit Form D-60 with legal documents to change your name. Details: <a href="https://www.hawaii.edu/ohr/employee-relations/personal-data-changes/" target="_blank">Name Change Info</a>',

  telework:
    'Telework is available for eligible positions. Submit the UH Telework Agreement Form. Policy and forms: <a href="https://www.hawaii.edu/ohr/policies-and-procedures/telework/" target="_blank">Telework Policy</a>',

  retire:
    'Employees planning to retire should contact ERS 3–6 months before retiring: <a href="https://ers.ehawaii.gov/" target="_blank">ERS Retirement Portal</a>. UH retirement resources: <a href="https://www.hawaii.edu/ohr/benefits/retirement/" target="_blank">UH Retirement Info</a>',

  retirement:
    'Employees planning to retire should contact ERS 3–6 months before retiring: <a href="https://ers.ehawaii.gov/" target="_blank">ERS Retirement Portal</a>. UH retirement resources: <a href="https://www.hawaii.edu/ohr/benefits/retirement/" target="_blank">UH Retirement Info</a>',

  training:
    'UH employees can access workshops and training here: <a href="https://www.hawaii.edu/ohr/training/" target="_blank">UH Training & Development</a>',

  onboarding:
    'New hires complete onboarding tasks in UH Self-Service and attend HR orientation. UH new employee info: <a href="https://www.hawaii.edu/ohr/new-employee/" target="_blank">New Employee Guide</a>',

  default:
    'I’m not sure about that yet. Browse official UH System HR resources: <a href="https://www.hawaii.edu/ohr/" target="_blank">UH HR Website</a>. You can also contact your HR Specialist for detailed help.'
};

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Handle sending a message
function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage(message, "user");
  userInput.value = "";

  // Fake thinking delay
  setTimeout(() => {
    const reply = getBotResponse(message);
    displayMessage(reply, "bot");
  }, 600);
}

// Display message bubble
function displayMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");

  // Use innerHTML so links are clickable
  msgDiv.innerHTML = text;

  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple keyword matching
function getBotResponse(message) {
  const lower = message.toLowerCase();

  for (const key in responses) {
    if (key === "default") continue;
    if (lower.includes(key)) {
      return responses[key];
    }
  }

  return responses.default;
}
