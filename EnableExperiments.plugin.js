/**
 * @name EnableExperiments
 * @description Enable Discord experiments, pretty neat-o.
 * @author PatheticMustan
 * @authorLink https://github.com/PatheticMustan
 * @authorId 192615247448768512
 * @version 1.0.0
 * @updateUrl https://raw.githubusercontent.com/PatheticMustan/BetterDiscordPlugins/hackerooni/EnableExperiments.plugin.js
 * @source https://github.com/PatheticMustan/BetterDiscordPlugins/tree/hackerooni
 */

// wow plugin making is pretty fun actually

module.exports = class EnableExperiments {
    start() {
        let developerModuleThing = BdApi.findModuleByProps(["isDeveloper"]);
        Object.defineProperty(developerModuleThing, "isDeveloper", {get: _ => 1});
    }

    stop() {
        let developerModuleThing = BdApi.findModuleByProps(["isDeveloper"]);
        Object.defineProperty(developerModuleThing, "isDeveloper", {get: _ => 0});
    }
}
