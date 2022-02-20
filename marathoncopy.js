module.exports = function(RED) {
    function MarathonCopyNode(config) {
        RED.nodes.createNode(this,config);
        this.field = config.field || "payload";
        this.template = config.template;
        this.fieldType = config.fieldType || "msg";
        var node = this;
        node.on("input", function(msg) {
            try {
                msg.payload = msg.payload;
                node.send(msg);
            }
            catch(e) {
                node.error(e.message);
            }
        });
    }
    RED.nodes.registerType("marathoncopy",MarathonCopyNode);
    RED.library.register("marathoncopy");
}
