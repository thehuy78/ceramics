$(document).ready(function () {
    var content = [];
    $.getJSON("footer.json", function (items) {
        content = items;
        var footerHTML = content[0].footer; // Lấy giá trị của thuộc tính footer trong tệp JSON
        var headerHTML = content[0].header;
        document.querySelector(".footer").innerHTML = footerHTML; // Chèn dữ liệu vào phần footer trong mã HTML
        document.querySelector(".header").innerHTML = headerHTML;
    });
});
