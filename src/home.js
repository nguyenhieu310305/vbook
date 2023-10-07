function execute() {
    return Response.success([
        {title: "Mới Nhất", input: BASE_URL + "/latest-post/", script: "gen.js"}
    ]);
}