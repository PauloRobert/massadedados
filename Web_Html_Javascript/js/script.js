let result = [];
let format = "";
function gera_random(n) {
    var ranNum = Math.round(Math.random() * n);
    return ranNum;
}

function mod(dividendo, divisor) {
    return Math.round(
        dividendo - Math.floor(dividendo / divisor) * divisor
    );
}

function cpf() {
    let value;
    var n = 9;
    var n1 = gera_random(n);
    var n2 = gera_random(n);
    var n3 = gera_random(n);
    var n4 = gera_random(n);
    var n5 = gera_random(n);
    var n6 = gera_random(n);
    var n7 = gera_random(n);
    var n8 = gera_random(n);
    var n9 = gera_random(n);
    var d1 =
        n9 * 2 +
        n8 * 3 +
        n7 * 4 +
        n6 * 5 +
        n5 * 6 +
        n4 * 7 +
        n3 * 8 +
        n2 * 9 +
        n1 * 10;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;
    var d2 =
        d1 * 2 +
        n9 * 3 +
        n8 * 4 +
        n7 * 5 +
        n6 * 6 +
        n5 * 7 +
        n4 * 8 +
        n3 * 9 +
        n2 * 10 +
        n1 * 11;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    if (document.form1.mascara.checked)
        return (
            "" +
            n1 +
            n2 +
            n3 +
            "." +
            n4 +
            n5 +
            n6 +
            "." +
            n7 +
            n8 +
            n9 +
            "-" +
            d1 +
            d2
        );
    else return "" + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
}

function cnpj() {
    var n = 9;
    var n1 = gera_random(n);
    var n2 = gera_random(n);
    var n3 = gera_random(n);
    var n4 = gera_random(n);
    var n5 = gera_random(n);
    var n6 = gera_random(n);
    var n7 = gera_random(n);
    var n8 = gera_random(n);
    var n9 = 0; //gera_random(n);
    var n10 = 0; //gera_random(n);
    var n11 = 0; //gera_random(n);
    var n12 = 1; //gera_random(n);
    var d1 =
        n12 * 2 +
        n11 * 3 +
        n10 * 4 +
        n9 * 5 +
        n8 * 6 +
        n7 * 7 +
        n6 * 8 +
        n5 * 9 +
        n4 * 2 +
        n3 * 3 +
        n2 * 4 +
        n1 * 5;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;
    var d2 =
        d1 * 2 +
        n12 * 3 +
        n11 * 4 +
        n10 * 5 +
        n9 * 6 +
        n8 * 7 +
        n7 * 8 +
        n6 * 9 +
        n5 * 2 +
        n4 * 3 +
        n3 * 4 +
        n2 * 5 +
        n1 * 6;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    if (document.form1.mascara.checked)
        return (
            "" +
            n1 +
            n2 +
            "." +
            n3 +
            n4 +
            n5 +
            "." +
            n6 +
            n7 +
            n8 +
            "/" +
            n9 +
            n10 +
            n11 +
            n12 +
            "-" +
            d1 +
            d2
        );
    else
        return (
            "" +
            n1 +
            n2 +
            n3 +
            n4 +
            n5 +
            n6 +
            n7 +
            n8 +
            n9 +
            n10 +
            n11 +
            n12 +
            d1 +
            d2
        );
}

function nit() {
    var n = 9;
    var n1 = 1; //gera_random(n);
    var n2 = gera_random(n);
    var n3 = gera_random(n);
    var n4 = gera_random(n);
    var n5 = gera_random(n);
    var n6 = gera_random(n);
    var n7 = gera_random(n);
    var n8 = gera_random(n);
    var n9 = gera_random(n);
    var n10 = gera_random(n);

    var d1 =
        n1 * 3 +
        n2 * 2 +
        n3 * 9 +
        n4 * 8 +
        n5 * 7 +
        n6 * 6 +
        n7 * 5 +
        n8 * 4 +
        n9 * 3 +
        n10 * 2;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;

    if (document.form1.mascara.checked)
        return (
            "" +
            n1 +
            n2 +
            n3 +
            "." +
            n4 +
            n5 +
            n6 +
            n7 +
            n8 +
            "." +
            n9 +
            n10 +
            "-" +
            d1
        );
    else return "" + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + d1;
}

function cei() {
    var n = 9;
    var n1 = 2; // deve ser diferente de 0
    var n2 = gera_random(n);
    var n3 = gera_random(n);
    var n4 = gera_random(n);
    var n5 = gera_random(n);
    var n6 = gera_random(n);
    var n7 = gera_random(n);
    var n8 = gera_random(n);
    var n9 = gera_random(n);
    var n10 = gera_random(n);
    var n11 = 8; // atividade

    var aux1 =
        n1 * 7 +
        n2 * 4 +
        n3 * 1 +
        n4 * 8 +
        n5 * 5 +
        n6 * 2 +
        n7 * 1 +
        n8 * 6 +
        n9 * 3 +
        n10 * 7 +
        n11 * 4;
    var aux2 = aux1 + "";

    var aux3 =
        parseInt(aux2[aux2.length - 1]) + parseInt(aux2[aux2.length - 2]);
    var Soma = parseInt(aux1);
    var d1 = parseInt(
        (10 - (((Soma % 10) + parseInt(Soma / 10)) % 10)) % 10
    );
    d1 = Math.abs(d1);

    if (document.form1.mascara.checked)
        return (
            "" +
            n1 +
            n2 +
            "." +
            n3 +
            n4 +
            n5 +
            "." +
            n6 +
            n7 +
            n8 +
            n9 +
            n10 +
            "/" +
            n11 +
            d1
        );
    else
        return (
            "" + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + d1
        );
}

function gera() {
    let quantidade_documento = document.form1.quantidade.value
        ? parseInt(document.form1.quantidade.value)
        : 1;
    result = [];

    if (Number(quantidade_documento)) {
        if (document.form1.tipo[0].checked) {
            for (i = 0; i < quantidade_documento; i++) {
                result.push(cpf());
            }
            document.form1.resultado.value = result
                .toString()
                .split(",")
                .join("\n");
        } else if (document.form1.tipo[1].checked) {
            for (i = 0; i < quantidade_documento; i++) {
                result.push(
                    document.form1.mascara.checked
                        ? cnpj().slice(0, 10)
                        : cnpj().slice(0, 8)
                );
            }
            document.form1.resultado.value = result
                .toString()
                .split(",")
                .join("\n");
        } else if (document.form1.tipo[2].checked) {
            for (i = 0; i < quantidade_documento; i++) {
                result.push(nit());
            }
            document.form1.resultado.value = result
                .toString()
                .split(",")
                .join("\n");
        } else if (document.form1.tipo[3].checked) {
            for (i = 0; i < quantidade_documento; i++) {
                result.push(cei());
            }
            document.form1.resultado.value = result
                .toString()
                .split(",")
                .join("\n");
        }
    } else {
        alert("Não é um número valído.");
    }
}

function geraTxt() {
    const link = document.createElement("a");
    const content = document.getElementById("resultado").value;
    const file = new Blob([content], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "sampleDoc.txt";
    link.click();
    URL.revokeObjectURL(link.href);
}