export const DEFAULT_WORDS = ['React Anagram Animation', 'Magenta Raincoat Airman'];

/**
 * @typedef AnimationOptions Timing options for when to start, how fast to animate forwards, backwards, and when to loop.
 * @property {number} randomStartMin The minimum amount of time to randomly wait before starting to animate each letter
 * @property {number} randomStartMax The maximum amount of time to randomly wait before starting to animate each letter
 * @property {number} randomReverseMin The minimum amount of time to randomly wait before starting to animate each letter in reverse
 * @property {number} randomReverseMax The maximum amount of time to randomly wait before starting to animate each letter in reverse
 * @property {number} loopAnimation The amount of time for each full loop of the animation
 * @property {number} waitToStart The amount of time to wait before beginning the animation on start up
 */

/** @type AnimationOptions */
export const DEFAULT_ANIMATION_OPTIONS = {
    randomStartMin: 0,
    randomStartMax: 3000,
    randomReverseMin: 6000,
    randomReverseMax: 9000,
    loopAnimation: 12000,
    waitToStart: 0,
};
