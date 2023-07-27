function returnFun() {
  const x = () => {
    let a = 1;
    console.log(a)

    const y = () => {
      console.log(a)

      const z = () => {
        console.log(a)
      }
      a = 45
      z();
    }

    a = 10
    y()
  }

  return x
}

let a = returnFun();
a();