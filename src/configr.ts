import * as vscode from 'vscode';

//*//
class Configr {
    
    context: vscode.ExtensionContext;
    
    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }
    
    GetWordsLimit(): number {
        return this.context.globalState.get("WordsLimit");
    }
    
    GetSign(lang: string): string { 
        let sign:string = this.context.globalState.get("Sign-" + lang);
        if (!sign) {
            sign = this.context.globalState.get("Sign-default");
        }
        return sign;
    }
    
    GetDisplayPlace(): number {
        return this.context.globalState.get("DisplayPlace", 0);
    }
    
    GetPosition(): number {
        return this.context.globalState.get("position");
    }
    
    GetConfigVersionTag(): number {
        return this.context.globalState.get("ConfigVersionTag", 0);
    }
    
    GetTotalLine(): number {
        return this.context.globalState.get("totalLine");
    }
    
    // 获取保存时替换文本
    GetSaveReplaceText(): string {
        return this.context.globalState.get("SaveReplaceText", ""); // 默认为空字符串 或者来个 The code here will be written next time?
    }

    // 获取自动隐藏超时
    GetAutoHideTimeout(): number {
        return this.context.globalState.get("AutoHideTimeout", 10); // 默认为10秒
    }
    
    SetWordsLimit(limit: number): void {
        this.context.globalState.update("WordsLimit", limit).then();
    }
    
    SetSign(lang: string, sign: string): void {
        this.context.globalState.update("Sign-" + lang, sign).then();
    }
    
    SetDisplayPlace(dp: number): void {
        this.context.globalState.update("DisplayPlace", dp).then();
    }
    
    SetPosition(position: number): void {
        this.context.globalState.update("position", position).then();
    }
    
    SetConfigVersionTag(tag: number): void {
        this.context.globalState.update("ConfigVersionTag", tag).then();
    }
    
    SetTotalLine(totalLine: number): void {
        this.context.globalState.update("totalLine", totalLine).then();
    }

    // 设置保存时替换文本
    SetSaveReplaceText(text: string): void {
        this.context.globalState.update("SaveReplaceText", text).then();
    }

    // 设置自动隐藏超时
    SetAutoHideTimeout(seconds: number): void {
        this.context.globalState.update("AutoHideTimeout", seconds).then();
    }
};
//*//   

export {
    Configr
}