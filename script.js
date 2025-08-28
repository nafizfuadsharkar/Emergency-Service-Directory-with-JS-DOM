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
    }
  });
