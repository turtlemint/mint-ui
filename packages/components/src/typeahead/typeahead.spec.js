import * as React from "react";
import { render } from "@testing-library/react";
// import axiosMock from "axios";
import TypeAhead from "./index";
import { Option } from "../select/dropdown";

export const data = [
	{
		value: 1,
		text: "Item 1"
	},
	{
		value: 2,
		text: "Item 2"
	}
];

// export const TestTypeAhead = () => {
//     const [data, setData] = React.useState([]);
//     const [open, setOpen] = React.useState(false);
//     const [fetching, setFetching] = React.useState(false);

//     const fetchUser = async () => {
//         setFetching(true);
//         setOpen(false);
//         const response = await axios.get('https://randomuser.me/api/?results=15');
//         const data = response.data.results.map((user: any) => ({
//             text: `${user.name.first} ${user.name.last}`,
//             value: user.login.username,
//         }));
//         setData(data);
//         setOpen(true);
//         setFetching(false);
//     }

//     const handleSelect = (value: unknown) => {
//         console.log(value);
//         setOpen(false);
//     }

//     return (
//         <Row style={{
//             padding: "0 30px"
//         }}>
//             <Col>
//                 <TypeAhead
//                     value="some value"
//                     loading={fetching}
//                     fetchFunc={fetchUser}
//                     onSelect={handleSelect}
//                     open={open}
//                     placeholder="Select user..."
//                 >
//                     {data.map((d: any) => (
//                         <Option key={d.value} value={d.value}>{d.text}</Option>
//                     ))}
//                 </TypeAhead>
//             </Col>
//         </Row>
//     )
// }
describe("Typeahead tests", () => {
	test("renders correctly", () => {
		const { asFragment } = render(
			<TypeAhead
				value="some value"
				loading={false}
				open={true}
				placeholder="Select user..."
			>
				{data.map(d => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</TypeAhead>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
