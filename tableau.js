var tab = [[1,2,3],[4,5,6],[7,8,9]];
document.write(tab);
html='<table>';
for (i in tab) {
    if(i%2==0){
        html+='<tr class="pair">';
    }
    else{
    html+='<tr class="impair">';}
for(j in tab[i]){
    html+='<td>';
    html+=(tab[i][j]);
    html+='</td>';
}
html=+'</tr>';

}
html+='</table>';
document.write(html);