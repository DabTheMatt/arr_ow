let treeToJson = () => {

var idcount = 0;
var treeJSON = [];
var idmap = {};
function add(dirs) {
    if (!dirs.length) return "#";
    var name = dirs.join("/");
    if (name in idmap)
        return idmap[name];
    var dir = dirs.pop();
    var parent = add(dirs);
    var id = "ajson" + ++idcount;
    treeJSON.push({id: id, parent: parent, text: dir});
    return idmap[name] = id;
}

var files = e.target.files; // FileList
for (var i=0; i<files.length; ++i) {
    var name = files[i].webkitRelativePath;
    add(name.split("/"));
}
return treeJSON;

}