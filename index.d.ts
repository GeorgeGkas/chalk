// Type definitions for Chalk
// Project: Chalk
// Definitions by: Thomas Sauer <https://github.com/t-sauer>
// Updated definitions by: George Gkasdrogkas <https://github.com/georgegkas>

export const enum Level {
	/**
	 * All colors disabled.
	 */
	None = 0,

	/**
	 * Basic 16 colors support.
	 */
	Basic = 1,

	/**
	 * ANSI 256 colors support.
	 */
	Ansi256 = 2,

	/**
	 * Truecolor 16 million colors support.
	 */
	TrueColor = 3
}

export interface Options {
	/**
	 * Enable or disable Chalk.
	 *
	 * @default true
	 */
	enabled?: boolean;

	/**
	 * Specify the color support for Chalk. By default,
	 * color support is automatically detected based on
	 * the environment.
	 */
	level?: Level;
}

export interface Constructor {
	/**
	 * Return a new Chalk instance.
	 */
	new (options?: Options): Chalk;

	/**
	 * Return a new Chalk instance.
	 */
	(options?: Options): Chalk;
}

/**
 * Detect whether the terminal supports color.
 */
export interface ColorSupport {
	/**
	 * The color level used by Chalk.
	 */
	level: Level;

	/**
	 * Return whether Chalk supports basic 16 colors.
	 */
	hasBasic: boolean;

	/**
	 * Return whether Chalk supports ANSI 256 colors.
	 */
	has256: boolean;

	/**
	 * Return whether Chalk supports Truecolor 16 million colors.
	 */
	has16m: boolean;
}

export interface Chalk {
	(...text: string[]): string;

	(text: TemplateStringsArray, ...placeholders: string[]): string;

	/**
	 * Return a new Chalk instance.
	 */
	constructor: Constructor;

	/**
	 * Enable or disable Chalk.
	 *
	 * @default true
	 */
	enabled: boolean;

	/**
	 * The color support for Chalk. By default, color
	 * support is automatically detected based on the
	 * environment.
	 */
	level: Level;

	/**
	 * Use HEX value to set text color.
	 *
	 * @param color - Hexadecimal value representing the desired color.
	 *
	 * @example
	 *
	 * import chalk from 'chalk';
	 *
	 * chalk.hex('#DEADED');
	 */
	hex(color: string): this;

	/**
	 * Use keyword color value to set text color.
	 *
	 * @param color - Keyword value representing the desired color.
	 *
	 * @example
	 *
	 * import chalk from 'chalk';
	 *
	 * chalk.keyword('orange');
	 */
	keyword(color: string): this;

	/**
	 * Use RGB values to set text color.
	 *
	 * @param r - red
	 * @param g - green
	 * @param b - blue
	 */
	rgb(r: number, g: number, b: number): this;

	/**
	 * Use HSL values to set text color.
	 *
	 * @param h - hue
	 * @param s - saturation
	 * @param l - lightness
	 */
	hsl(h: number, s: number, l: number): this;

	/**
	 * Use HSV values to set text color.
	 *
	 * @param h - hue
	 * @param s - saturation
	 * @param v - value
	 */
	hsv(h: number, s: number, v: number): this;

	/**
	 * Use HWB values to set text color.
	 *
	 * @param h - hue
	 * @param w - whiteness
	 * @param b - blackness
	 */
	hwb(h: number, w: number, b: number): this;

	/**
	 * Use HEX value to set background color.
	 *
	 * @param color - Hexadecimal value representing the desired color.
	 *
	 * @example
	 *
	 * import chalk from 'chalk';
	 *
	 * chalk.bgHex('#DEADED');
	 */
	bgHex(color: string): this;

	/**
	 * Use keyword color value to set background color.
	 *
	 * @param color - Keyword value representing the desired color.
	 *
	 * @example
	 *
	 * import chalk from 'chalk';
	 *
	 * chalk.bgKeyword('orange');
	 */
	bgKeyword(color: string): this;

	/**
	 * Use RGB values to set background color.
	 *
	 * @param r - red
	 * @param g - green
	 * @param b - blue
	 */
	bgRgb(r: number, g: number, b: number): this;

	/**
	 * Use HSL values to set background color.
	 *
	 * @param h - hue
	 * @param s - saturation
	 * @param l - lightness
	 */
	bgHsl(h: number, s: number, l: number): this;

	/**
	 * Use HSV values to set background color.
	 *
	 * @param h - hue
	 * @param s - saturation
	 * @param v - value
	 */
	bgHsv(h: number, s: number, v: number): this;

	/**
	 * Use HWB values to set background color.
	 *
	 * @param h - hue
	 * @param w - whiteness
	 * @param b - blackness
	 */
	bgHwb(h: number, w: number, b: number): this;

	/**
	 * Modifier: Resets the current color chain.
	 */
	readonly reset: this;

	/**
	 * Modifier: Make text bold.
	 */
	readonly bold: this;

	/**
	 * Modifier: Emitting only a small amount of light.
	 */
	readonly dim: this;

	/**
	 * Modifier: Make text italic. (Not widely supported)
	 */
	readonly italic: this;

	/**
	 * Modifier: Make text underline. (Not widely supported)
	 */
	readonly underline: this;

	/**
	 * Modifier: Inverse background and foreground colors.
	 */
	readonly inverse: this;

	/**
	 * Modifier
	 */
	readonly hidden: this;

	/**
	 * Modifier
	 */
	readonly strikethrough: this;

	/**
	 * Modifier
	 */
	readonly visible: this;

	readonly black: this;
	readonly red: this;
	readonly green: this;
	readonly yellow: this;
	readonly blue: this;
	readonly magenta: this;
	readonly cyan: this;
	readonly white: this;
	readonly gray: this;
	readonly grey: this;
	readonly blackBright: this;
	readonly redBright: this;
	readonly greenBright: this;
	readonly yellowBright: this;
	readonly blueBright: this;
	readonly magentaBright: this;
	readonly cyanBright: this;
	readonly whiteBright: this;

	readonly bgBlack: this;
	readonly bgRed: this;
	readonly bgGreen: this;
	readonly bgYellow: this;
	readonly bgBlue: this;
	readonly bgMagenta: this;
	readonly bgCyan: this;
	readonly bgWhite: this;
	readonly bgBlackBright: this;
	readonly bgRedBright: this;
	readonly bgGreenBright: this;
	readonly bgYellowBright: this;
	readonly bgBlueBright: this;
	readonly bgMagentaBright: this;
	readonly bgCyanBright: this;
	readonly bgWhiteBright: this;
}

/**
 * Main Chalk object that allows to chain styles together.
 * Call the last one as a method with a string argument.
 * Order doesn't matter, and later styles take precedent in case of a conflict.
 * This simply means that `chalk.red.yellow.green` is equivalent to `chalk.green`.
 */
declare const chalk: Chalk & { supportsColor: ColorSupport };

/**
 * Alias Options and Constructor to preserve backwards compatibility.
 */
export type ChalkOptions = Options;
export type ChalkConstructor = Constructor;

export default chalk
