declare class DrapoDrag {
    private _code;
    private _action;
    private _contextItem;
    private _tags;
    private _notify;
    private _onBefore;
    private _onAfter;
    private _dataKey;
    private _sector;
    private _custom;
    get Code(): string;
    set Code(value: string);
    get Action(): string;
    set Action(value: string);
    get Item(): DrapoContextItem;
    set Item(value: DrapoContextItem);
    get Tags(): string[];
    set Tags(value: string[]);
    get Notify(): boolean;
    set Notify(value: boolean);
    get OnBefore(): string;
    set OnBefore(value: string);
    get OnAfter(): string;
    set OnAfter(value: string);
    get DataKey(): string;
    set DataKey(value: string);
    get Sector(): string;
    set Sector(value: string);
    get Custom(): string;
    set Custom(value: string);
    constructor();
    IsMatch(tags: string[]): boolean;
}
