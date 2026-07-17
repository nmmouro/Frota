export function renderTabela(
    elemento,
    dados
){

    if(!dados.length){

        elemento.innerHTML="Sem registros";

        return;

    }

    const colunas =
        Object.keys(dados[0]);

    elemento.innerHTML=`

<table>

<thead>

<tr>

${colunas.map(c=>`<th>${c}</th>`).join("")}

</tr>

</thead>

<tbody>

${dados.map(l=>`

<tr>

${colunas.map(c=>`<td>${l[c]}</td>`).join("")}

</tr>

`).join("")}

</tbody>

</table>

`;

}
