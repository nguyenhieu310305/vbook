// Nội dung của chap
function execute(url) {
    var doc = fetch(url).html();
    var el = doc.select(".content-inner > p > a > img");   // lấy tất cả thẻ img
    var aTags = content.select("a")
    var data = [];
    for (var i = 0; i < el.size() /** el.size(): giống count() */; i++) {
        var e = el.get(i);
        data.push(e.attr("src"));     
    }
    return Response.success(data);
}