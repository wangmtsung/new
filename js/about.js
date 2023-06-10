//下拉式選單
var locationSelect = document.getElementById("location-select");
var links = document.querySelectorAll(".store-info a");

locationSelect.addEventListener("change", function () {
    var selectedValue = this.value;

    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var classList = link.classList;

        if (selectedValue === "") {
            link.classList.remove("fade-link"); // 如果未选择任何选项，恢复所有链接的颜色
        } else {
            if (classList.contains(selectedValue)) {
                link.classList.remove("fade-link"); // 选中的选项与链接的类名相匹配，恢复该链接的颜色
            } else {
                link.classList.add("fade-link"); // 不匹配的链接设置为淡色
            }
        }
    }
});