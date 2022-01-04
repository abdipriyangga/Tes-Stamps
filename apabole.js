const apabole = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("ApaBole");
    }
    else if (i % 3 === 0) {
      console.log("Apa");
    }
    else if (i % 5 === 0) {
      console.log("Bole");
    }
    else {
      console.log(i)
    }
  }
}

apabole(100)