load('config.js')
function execute(url) {
    let id = /xiuren.biz\/([a-z0-9-]+)\/?/u.exec(url); // sẽ trả về 1 mảng với id thật sự là id[2]
    if (id) id = id[2];
    var newUrl = BASE_URL + '/' + id;
    const doc = fetch(newUrl).html()
    return Response.success({
        name: doc.select("h1.jeg_post_title").text(),
        cover: doc.select(".content-inner > p > a > img").last().attr("src"),
        author: doc.select("div.jeg_post_tags > a").last().text(),
        description: null,
        detail: null,
        category: null,
        host: BASE_URL
    });
}