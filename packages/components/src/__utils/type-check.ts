export const _isObject = (value: any) => {
	return (
		typeof value === "object" &&
		value instanceof Object &&
		!(value instanceof Array)
	);
};
export const _isArray = (value: any) => {
	return (
		typeof value === "object" &&
		value instanceof Object &&
		value instanceof Array
	);
};
