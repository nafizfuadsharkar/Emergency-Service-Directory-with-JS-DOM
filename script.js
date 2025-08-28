// global variable

const history = [];
// handle heart count
const hearts = document.getElementsByClassName("heart");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    let heartCount = parseInt(document.getElementById("heart-count").innerText);
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
}

// handle all-call alert
document
  .getElementById("all-call-button")
  .addEventListener("click", function () {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    console.log(coinCount);

    // apply conditions
    if (coinCount < 20) {
      alert("You need at least 20 coins to make a call!");
    } else {
      alert("📞 Calling National Emergency Service 999");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      const data = {
        name: "National Emergency Service",
        nmbr: 999,
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      history.push(data);
      getHistory("all-call-button");
    }
  });
// handle polic-call alert

document
  .getElementById("police-call-button")
  .addEventListener("click", function () {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    console.log(coinCount);

    // apply conditions
    if (coinCount < 20) {
      alert("You need at least 20 coins to make a call!");
    } else {
      alert("📞 Calling Police Service 999");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      const data = {
        name: "Police Helpline Service",
        nmbr: 999,
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      history.push(data);
      getHistory("police-call-button");
    }
  });
// handle Fire-call alert

document
  .getElementById("fire-call-button")
  .addEventListener("click", function () {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    console.log(coinCount);

    // apply conditions
    if (coinCount < 20) {
      alert("You need at least 20 coins to make a call!");
    } else {
      alert("📞 Calling Fire Service 999");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      const data = {
        name: "Fire Service Service",
        nmbr: 999,
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      history.push(data);
      getHistory("fire-call-button");
    }
  });
// handle ambulance-call alert

document
  .getElementById("ambulance-call-button")
  .addEventListener("click", function () {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    console.log(coinCount);

    // apply conditions
    if (coinCount < 20) {
      alert("You need at least 20 coins to make a call!");
    } else {
      alert("📞 Calling Ambulance Service 999");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      const data = {
        name: "Ambulance Service",
        nmbr: "1994-999999",
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      history.push(data);
      getHistory("ambulance-call-button");
    }
  });
// handle Women n child-call alert

document
  .getElementById("women-call-button")
  .addEventListener("click", function () {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    console.log(coinCount);

    // apply conditions
    if (coinCount < 20) {
      alert("You need at least 20 coins to make a call!");
    } else {
      alert("📞 Calling Women & Child Service 109");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      const data = {
        name: "Women & Child Helpline",
        nmbr: 109,
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      history.push(data);
      getHistory("women-call-button");
    }
  });
// handle corruption-call alert

document
  .getElementById("cor-call-button")
  .addEventListener("click", function () {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    console.log(coinCount);

    // apply conditions
    if (coinCount < 20) {
      alert("You need at least 20 coins to make a call!");
    } else {
      alert("📞 Calling Anti-Corruption Helpline 106");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      const data = {
        name: "Anti-Corruption Helpline",
        nmbr: 106,
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      history.push(data);
      getHistory("cor-call-button");
    }
  });
// handle Electricity-call alert

document
  .getElementById("electricity-call-button")
  .addEventListener("click", function () {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    console.log(coinCount);

    // apply conditions
    if (coinCount < 20) {
      alert("You need at least 20 coins to make a call!");
    } else {
      alert("📞 Calling Electricity Helpline 16216");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      const data = {
        name: "Electricity Helpline",
        nmbr: 16216,
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      history.push(data);
      getHistory("electricity-call-button");
    }
  });
// handle brac-call alert

document
  .getElementById("brac-call-button")
  .addEventListener("click", function () {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    console.log(coinCount);

    // apply conditions
    if (coinCount < 20) {
      alert("You need at least 20 coins to make a call!");
    } else {
      alert("📞 Calling Brac Helpline 16445");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      const data = {
        name: "Brac Helpline",
        nmbr: 16445,
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      history.push(data);
      getHistory("brac-call-button");
    }
  });
// handle railway-call alert

document
  .getElementById("railway-call-button")
  .addEventListener("click", function () {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    console.log(coinCount);

    // apply conditions
    if (coinCount < 20) {
      alert("You need at least 20 coins to make a call!");
    } else {
      alert("📞 Calling Bangladesh Railway Helpline 163");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      const data = {
        name: "Bangladesh Railway Helpline ",
        nmbr: 163,
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      history.push(data);
      getHistory("railway-call-button");
    }
  });

// history list
function getHistory(id) {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerText = "";
  for (const data of history) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div
              class="bg-[#f4f5f7] rounded-xl px-1 py-3 flex justify-between items-center mt-3"
            >
              <div class="flex items-center">
                <div class="ml-3">
                  <h1>${data.name}</h1>
                  <p>${data.nmbr}</p>
                </div>
              </div>
              <p>${data.date}</p>
            </div>
    `;
    historyContainer.appendChild(div);
  }
}

// clear history
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-container").innerHTML = "";
  history.length = 0;
});


// copy button er kaj 

// card1
document.querySelector('#card1 .copy-btn').addEventListener('click', () => {
    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    // Select the text you want to copy
    const textToCopy = document.querySelector('#card1 .card-number').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert(`Copied: ${textToCopy}`);
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
});
// card2
document.querySelector('#card2 .copy-btn').addEventListener('click', () => {
    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    // Select the text you want to copy
    const textToCopy = document.querySelector('#card2 .card-number').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert(`Copied: ${textToCopy}`);
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
});
// card3
document.querySelector('#card3 .copy-btn').addEventListener('click', () => {
    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    // Select the text you want to copy
    const textToCopy = document.querySelector('#card3 .card-number').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert(`Copied: ${textToCopy}`);
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
});
// card4
document.querySelector('#card4 .copy-btn').addEventListener('click', () => {
    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    // Select the text you want to copy
    const textToCopy = document.querySelector('#card4 .card-number').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert(`Copied: ${textToCopy}`);
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
});
// card5
document.querySelector('#card5 .copy-btn').addEventListener('click', () => {
    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    // Select the text you want to copy
    const textToCopy = document.querySelector('#card5 .card-number').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert(`Copied: ${textToCopy}`);
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
});
// card6
document.querySelector('#card6 .copy-btn').addEventListener('click', () => {
    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    // Select the text you want to copy
    const textToCopy = document.querySelector('#card6 .card-number').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert(`Copied: ${textToCopy}`);
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
});
// card7
document.querySelector('#card7 .copy-btn').addEventListener('click', () => {
    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    // Select the text you want to copy
    const textToCopy = document.querySelector('#card7 .card-number').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert(`Copied: ${textToCopy}`);
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
});
// card8
document.querySelector('#card8 .copy-btn').addEventListener('click', () => {
    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    // Select the text you want to copy
    const textToCopy = document.querySelector('#card8 .card-number').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert(`Copied: ${textToCopy}`);
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
});
// card9
document.querySelector('#card9 .copy-btn').addEventListener('click', () => {
    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
    // Select the text you want to copy
    const textToCopy = document.querySelector('#card9 .card-number').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert(`Copied: ${textToCopy}`);
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
});