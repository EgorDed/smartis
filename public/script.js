document.querySelector(".btn").addEventListener("click", async () => {

    let d = document.querySelector("#datepicker").value;
    d = d.split("-");
    d = d[2] + "/" + d[1] + "/" + d[0];


    let dollarResponse = await fetch("dollar.php?d=" + d);
    let dollarC = await dollarResponse.text();

    let euroresponse = await fetch("euro.php?d=" + d);
    let euroC = await euroresponse.text();


    Highcharts.chart("container", {
        xAxis: {
            categories: ["", d]
        },
        series: [
            {
                name: "Доллар США",
                data: [0, parseFloat(dollarC)]
            },
            {
                name: "Евро",
                data: [0, parseFloat(euroC)]
            }
        ]
    });
})

