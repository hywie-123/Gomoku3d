export class ValueAnimator {
    public speed: number = 1;
    public easeFunction: (t: number) => number = (t: number) => t;
    public setValueCallback: (value: number) => void = () => {};
    public getValueCallback: () => number = () => 0;
    public setZeroValueCallback: () => void = () => {};
    public setNonZeroValueCallback: () => void = () => {};

    private _src     : number = 0;
    private _dest    : number = 0;
    private _progress: number = 1;

    public animateTo(value: number) {
        if (this._dest === value)
            return;
        this._src      = this.getValueCallback();
        this._dest     = value;
        this._progress = 0;
    }

    public jumpTo(value: number) {
        this._src      = this._dest = value;
        this._progress = 1;
        this.setValue(value);
    }

    public update(deltaTime: number) {
        if (this._src === this._dest)
            this._progress = 1;
        if (this._progress === 1)
            return;
        this._progress = Math.min(this._progress + this.speed * deltaTime, 1);
        this.setValue(this.easeFunction(Math.max(this._progress, 0)) * (this._dest - this._src) + this._src);
    }

    private setValue(value: number) {
        this.setValueCallback(value);
        if (value !== 0) this.setNonZeroValueCallback();
        else             this.setZeroValueCallback();
    }
}
