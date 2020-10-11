function ex7() {
    let c1 = prompt('Le premier chiffre : ', 1);
    let c2 = prompt('Le deuxième chiffre : ', 50);
    for(c1; c1<=c2 ; c1++){
        console.log(document.getElementById('tbody').childElementCount);

        let tr = 'tr' + c1;
        if (document.getElementById('tbody').childElementCount === 0 || document.getElementById('tbody').lastElementChild.childElementCount == 5){
             tr = 'tr' + c1;
            document.getElementById('tbody').innerHTML += "<tr id="+tr+"></tr>";
        }
        let carre = c1 * c1;
        document.getElementById('tbody').lastElementChild.innerHTML += '<td>' + carre + '</td>';
    }
}