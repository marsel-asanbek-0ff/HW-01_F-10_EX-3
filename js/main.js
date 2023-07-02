var color = prompt("Введите цвет светофора (red, yellow или green):");
switch(color) {
    case "red":
        alert("Стоять!");
        break;
    case "yellow":
        alert("Готовится!");
        break;
    case "green":
        alert("Идти!");
        break;
    default:
        alert("Некорректный цвет!");
        break;
}
