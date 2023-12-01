document.querySelector("#btnMenos").addEventListener("click", () => {
    let cantidadDiv = document.querySelector("#cantidad")
    let cantidadActual = parseInt(cantidadDiv.dataset.cantidad)
    if (cantidadActual > 0) {
      cantidadDiv.innerHTML = cantidadActual - 1
      cantidadDiv.setAttribute("data-cantidad", cantidadActual - 1)
      let precioTatalText = document.querySelector("#precioTotal")
      let calculoPrecio = precioTatalText.dataset.precio * cantidadDiv.dataset.cantidad
      precioTatalText.innerHTML = calculoPrecio
    }
  })

  document.querySelector("#btnMas").addEventListener("click", () => {
    let cantidadDiv = document.querySelector("#cantidad")
    let cantidadActual = parseInt(cantidadDiv.dataset.cantidad)
    cantidadDiv.innerHTML = cantidadActual + 1
    cantidadDiv.setAttribute("data-cantidad", cantidadActual + 1)
    let precioTatalText = document.querySelector("#precioTotal")
    let calculoPrecio = precioTatalText.dataset.precio * cantidadDiv.dataset.cantidad
    precioTatalText.innerHTML = calculoPrecio
  })
