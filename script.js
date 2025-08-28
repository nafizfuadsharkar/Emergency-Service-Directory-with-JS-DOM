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
    }
  });
// handle Fire-call alert

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
    }
  });
