function add_menu_f() {
    var menu = document.getElementById("menu")
    var menu_name = ["","꿀 호떡","사과 잼 호떡","웰빙 호떡","누텔라 호떡","카라멜 호떡","씨앗 호떡","치즈 호떡","떡 호떡","아메리카노","카페라떼","카푸치노","우유","오렌지주스","호떡호떡","미니호떡 치즈볼","굿모닝 세트","밤샘 세트","앨비스 세트","프레슬리 세트","재수 좋은 날 세트"]
    var menu_price = [0,1500,1500,2000,2000,1700,2000,2000,2500,1500,1500,1500,1500,1500,2000,1500,2000,2700,3600,4000,3500]
    var price = document.getElementById("price")
    var tbody = document.getElementById("tbody")

    var number = document.getElementById("number").value

    var new_tr = tbody.insertRow(7)
    var new_td = new_tr.insertCell(0)
    new_td.setAttribute( 'colspan', '2' )
    var new_text = document.createTextNode(menu_name[menu.options[menu.selectedIndex].value]+" X "+number+"개")
    new_td.appendChild(new_text)

    price.innerHTML = parseInt(price.innerHTML) + menu_price[menu.options[menu.selectedIndex].value]*number

}

function order_f() {
    confirm("총 " +document.getElementById("price").innerHTML+ "원, 주문 하시겠습니까?")
}