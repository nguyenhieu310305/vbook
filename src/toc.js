// Show Chap
load('config.js');
function execute(url) {
    let id = /xiuren.biz\/([a-z0-9-]+)\/?/.exec(url);

    if (id) id = id[2];
    let response = fetch(BASE_URL + "/" + id + "/");
    let data = [];
    data.push({
        name: response.html().select("h1.jeg_post_title").text(),
        url: "xiuren.biz/" + id + "/"
    })
    return Response.success(data);
}