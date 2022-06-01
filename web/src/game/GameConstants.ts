import { easeOutQuint, easeOutElastic } from "./EaseFunctions";

export const kBoardSize: [number, number, number] = [11, 11, 11];
export const kBoxScale = 0.36;

export const kAnimationFrameTime = 1 / 60;
export const kAnimationSpeed     = 0.3;

export const kHoverDetectionRadius          = 0.3;
export const kHoverIndicatorColor           = 0xE3F2FD;
export const kHoverIndicatorAxisThickness   = 0.003;
export const kHoverIndicatorBallRadius      = 0.05;
export const kHoverIndicatorBallHoverRadius = 0.5;

export const kEaseFunction          = (t: number) => easeOutElastic(t, 0.5);
export const kEaseFunctionSecondary = (t: number) => easeOutQuint  (t);
