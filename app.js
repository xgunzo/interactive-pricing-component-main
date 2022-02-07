window.onload = function() {

    let slider = document.getElementById("range");
    let output = document.getElementById("value");
    let price = document.getElementById("dollars_per_month");


    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = slider.value;
    }

    slider.addEventListener("input", function() {
      let x = slider.value;
      let color = "linear-gradient(90deg, hsl(174, 77%, 80%)" + x + "%, hsl(224, 65%, 95%)" + x + "%)";
      slider.style.background = color;

      const priceRate = 0.16;
      let monthlyPrice = parseFloat(x * priceRate);
      monthlyPrice = monthlyPrice.toFixed(2);
      price.innerHTML = "$" + monthlyPrice;

    })

    }
