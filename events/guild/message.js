module.exports = (Discord, client, message) =>{
    const prefix = '.';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const Canvas = require("canvas");
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    const Dziadek = message.author.id === "480806462054989845";

    if(command) {
        const objects = {
        message,
        args,
        client,
        Canvas,
        prefix,
        Discord,
        cmd,
        Dziadek,
    }

    function getArgsRequested(func) {
        var comments = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
        var argsName = /([^\s,]+)/g;

        var fnStr = func.toString().replace(comments, '');
        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(argsName);
        if (result === null)
            result = [];

        return result;
    }

        const execParms = getArgsRequested(command.execute);
        return command.execute(objects[execParms[0]], objects[execParms[1]], objects[execParms[2]], objects[execParms[3]], objects[execParms[4]], objects[execParms[5]]);
    }
}