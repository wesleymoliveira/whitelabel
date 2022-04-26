export const usDollarMask = (value: string | number) => {
	let innerValue = 0;

	if (typeof value === 'string') {
		value = value.replace('.', '').replace(',', '').replace(/\D/g, '');
		innerValue = parseFloat(value) || 0;
	} else {
		innerValue = value;
	}

	const result = new Intl.NumberFormat('en-US').format(innerValue);
	return '$ ' + result;
};

export const formatMoney = (value: string) => {
	const parsed = parseInt(value.replace(/[$,.]/g, '')) / 100;
	const formatted = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(parsed);

	return formatted.replace(/[,]/g, '.');
};

export const getPercentValue = (value: string, percent: number) => {
	const parsed = parseInt(value.replace(/[$,.]/g, '')) / 100;
	const percentOf = Math.round((percent / 100) * parsed);
	const result = percentOf + parsed;
	const formatted = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(result);

	return { formatted: formatted.replace(/[,]/g, '.'), result: result.toFixed(0).toString() };
};
