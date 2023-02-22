var gdjs;
(function(g) {
    const h = GlobalPIXIModule.PIXI;
    let s;
    (function(i) {
        i[i.NOT_STARTED = 0] = "NOT_STARTED", i[i.STARTED = 1] = "STARTED", i[i.FINISHED = 2] = "FINISHED"
    })(s || (s = {}));
    const p = (a, e, r) => {
            !a || (e > 0 ? (a.alpha += 1 / e * r / 1e3, a.alpha > 1 && (a.alpha = 1)) : a.alpha = 1)
        },
        c = a => !a || a.alpha >= 1;
    class u {
        constructor(e, r, i) {
            this._backgroundSprite = null;
            this._gdevelopLogoSprite = null;
            this._progressBarGraphics = null;
            this._state = 0;
            this._startTimeInMs = 0;
            this._backgroundReadyTimeInMs = 0;
            this._lastFrameTimeInMs = 0;
            this._progressPercent = 0;
            if (this._loadingScreenData = i, this._loadingScreenContainer = new h.Container, this._pixiRenderer = e.getPIXIRenderer(), !this._pixiRenderer) return;
            this._pixiRenderer.backgroundColor = this._loadingScreenData.backgroundColor;
            const t = r.getPIXITexture(i.backgroundImageResourceName);
            t !== r.getInvalidPIXITexture() && (this._backgroundSprite = h.Sprite.from(t), this._backgroundSprite.alpha = 0, this._backgroundSprite.anchor.x = .5, this._backgroundSprite.anchor.y = .5, this._loadingScreenContainer.addChild(this._backgroundSprite)), i.showGDevelopSplash && (this._gdevelopLogoSprite = h.Sprite.from(g.gdevelopLogo), this._gdevelopLogoSprite.alpha = 0, this._gdevelopLogoSprite.anchor.x = .5, this._gdevelopLogoSprite.anchor.y = .5, this._loadingScreenContainer.addChild(this._gdevelopLogoSprite)), i.showProgressBar && (this._progressBarGraphics = new h.Graphics, this._progressBarGraphics.alpha = 0, this._loadingScreenContainer.addChild(this._progressBarGraphics)), this._render(performance.now())
        }
        setPercent(e) {
            this._progressPercent = e
        }
        _startLoadingScreen() {
            !this._pixiRenderer || (this._state = 1, this._startTimeInMs = performance.now())
        }
        _updatePositions() {
            if (!!this._pixiRenderer) {
                if (this._backgroundSprite && this._backgroundSprite.texture.valid) {
                    this._backgroundSprite.position.x = this._pixiRenderer.width / 2, this._backgroundSprite.position.y = this._pixiRenderer.height / 2;
                    const e = Math.max(this._pixiRenderer.width / this._backgroundSprite.texture.width, this._pixiRenderer.height / this._backgroundSprite.texture.height);
                    this._backgroundSprite.scale.x = e, this._backgroundSprite.scale.y = e
                }
                if (this._gdevelopLogoSprite) {
                    this._gdevelopLogoSprite.position.x = this._pixiRenderer.width / 2, this._gdevelopLogoSprite.position.y = this._pixiRenderer.height / 2;
                    const e = 680,
                        r = this._pixiRenderer.width > this._pixiRenderer.height && this._pixiRenderer.width > 500 ? 150 : 35,
                        t = Math.min(e, Math.max(1, this._pixiRenderer.width - r * 2)) / e;
                    this._gdevelopLogoSprite.scale.x = t, this._gdevelopLogoSprite.scale.y = t, this._gdevelopLogoSprite.visible = this._pixiRenderer.width > 200 && this._pixiRenderer.height > 200
                }
            }
        }
        _render(e) {
            if (!this._pixiRenderer) return;
            this._state !== 2 && requestAnimationFrame(() => this._render(performance.now()));
            const r = this._lastFrameTimeInMs ? e - this._lastFrameTimeInMs : 0;
            if (this._lastFrameTimeInMs = e, this._updatePositions(), this._state == 0)(!this._backgroundSprite || this._backgroundSprite.texture.valid) && this._startLoadingScreen();
            else if (this._state == 1) {
                const i = this._loadingScreenData.backgroundFadeInDuration;
                if (p(this._backgroundSprite, i, r), c(this._backgroundSprite)) {
                    this._backgroundReadyTimeInMs || (this._backgroundReadyTimeInMs = e);
                    const t = this._loadingScreenData.logoAndProgressFadeInDuration,
                        o = this._loadingScreenData.logoAndProgressLogoFadeInDelay;
                    e - this._backgroundReadyTimeInMs > o * 1e3 && (p(this._gdevelopLogoSprite, t, r), p(this._progressBarGraphics, t, r))
                }
                if (this._progressBarGraphics) {
                    const t = this._loadingScreenData.progressBarColor;
                    let o = this._loadingScreenData.progressBarWidthPercent / 100 * this._pixiRenderer.width;
                    this._loadingScreenData.progressBarMaxWidth > 0 && o > this._loadingScreenData.progressBarMaxWidth && (o = this._loadingScreenData.progressBarMaxWidth), this._loadingScreenData.progressBarMinWidth > 0 && o < this._loadingScreenData.progressBarMinWidth && (o = this._loadingScreenData.progressBarMinWidth);
                    const d = this._loadingScreenData.progressBarHeight,
                        l = Math.floor(this._pixiRenderer.width / 2 - o / 2),
                        _ = this._pixiRenderer.height < 350 ? Math.floor(this._pixiRenderer.height - 10 - d) : Math.floor(this._pixiRenderer.height - 90 - d),
                        n = 1,
                        S = Math.min(1, (this._progressPercent + 1) / 100);
                    this._progressBarGraphics.clear(), this._progressBarGraphics.lineStyle(n, t, 1, 0), this._progressBarGraphics.drawRect(l, _, o, d), this._progressBarGraphics.beginFill(t, 1), this._progressBarGraphics.lineStyle(0, t, 1), this._progressBarGraphics.drawRect(l + n, _ + n, o * S - n * 2, d - n * 2), this._progressBarGraphics.endFill()
                }
            }
            // this._pixiRenderer.render(this._loadingScreenContainer)
        }
        unload() {
            const e = (performance.now() - this._startTimeInMs) / 1e3,
                r = this._loadingScreenData.minDuration - e;
            return this.setPercent(100), r <= 0 ? (this._state = 2, Promise.resolve()) : new Promise(i => setTimeout(() => {
                this._state = 2, i()
            }, r * 1e3))
        }
    }
    g.LoadingScreenRenderer = u
})(gdjs || (gdjs = {}));
//# sourceMappingURL=loadingscreen-pixi-renderer.js.map