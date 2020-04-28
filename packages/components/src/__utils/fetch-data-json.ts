import queryString from "query-string";

export interface SelectDataProps {
	url: string;
	params: any;
	dataKey: string;
	valueKey: string;
	displayKey: string;
}
export interface TypeAheadDataProps extends SelectDataProps {
	searchKey?: string;
}
const fetchDataFromJson = (data: TypeAheadDataProps) => {
	const { url, params, valueKey, displayKey, dataKey } = data;
	// Make an API call and set data for Dropdown
	return fetch(`${url}?${queryString.stringify(params)}`)
		.then(response => response.json())
		.then(jsonR => {
			const finalList = jsonR[dataKey].reduce(
				(acc: Array<any>, item: any) => {
					acc.push({
						value: item[valueKey],
						text: item[displayKey]
					});
					return acc;
				},
				[]
			);
			return finalList;
		});
};

export default fetchDataFromJson;
