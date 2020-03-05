import * as React from "react";
import axios from "axios";
import TypeAhead from "./index";
import { SelectCTA, SelectWrapper } from "../select";
import Dropdown, { Option, SelectedOption } from "../select/dropdown";
import Input from "../input";
import { ChangeHandler } from "../__utils/type";

export default {
	title: "Typeahead",
	component: TypeAhead,
	parameters: {
		componentSubtitle: "basic"
	}
};

export const basic = () => {
	const mockData = [
		{
			value: 1,
			text: "Item 1"
		},
		{
			value: 2,
			text: "Item 2"
		}
	];
	return (
		<div style={{ height: "150px" }}>
			<TypeAhead
				name="default-typeahead"
				value={{ text: "Select user", value: "" }}
				loading={false}
				fetchFunc={() => {}}
				onChange={() => {}}
				open={false}
				placeholder="Select user..."
			>
				{mockData.map((d: any) => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</TypeAhead>
		</div>
	);
};

export const loading = () => {
	const mockData = [
		{
			value: 1,
			text: "Item 1"
		},
		{
			value: 2,
			text: "Item 2"
		}
	];

	return (
		<div style={{ height: "150px" }}>
			<TypeAhead
				name="loading-typeahead"
				loading={true}
				fetchFunc={() => {}}
				onChange={() => {}}
				open={false}
				placeholder="Select user..."
			>
				{mockData.map((d: any) => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</TypeAhead>
		</div>
	);
};
export const loaded = () => {
	const mockData = [
		{
			value: 1,
			text: "Item 1"
		},
		{
			value: 2,
			text: "Item 2"
		}
	];
	return (
		<div style={{ height: "150px" }}>
			<TypeAhead
				name="loaded-typeahead"
				loading={false}
				fetchFunc={() => {}}
				onChange={() => {}}
				open={true}
				placeholder="Select user..."
			>
				{mockData.map((d: any) => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</TypeAhead>
		</div>
	);
};

export const SelectedValueLabel = () => (
	<div style={{ height: "150px" }}>
		<SelectWrapper block={false}>
			<SelectCTA value={{ text: "Item 1", value: "item1" }} />
		</SelectWrapper>
	</div>
);

export const clickedLabel = () => {
	const mockData = [
		{
			value: 1,
			text: "Item 1"
		},
		{
			value: 2,
			text: "Item 2"
		}
	];
	return (
		<div style={{ height: "150px" }}>
			<SelectWrapper block={false}>
				<Input block={true} value="" placeholder="Item 1" />
				<Dropdown data-testid="typeahead-dropdown">
					{mockData.map((d: any) => (
						<Option key={d.value} value={d.value}>
							{d.text}
						</Option>
					))}
				</Dropdown>
			</SelectWrapper>
		</div>
	);
};

export const Demo = () => {
	const [data, setData] = React.useState([
		{ text: "Search user", value: "" }
	]);
	const [open, setOpen] = React.useState(false);
	const [fetching, setFetching] = React.useState(false);

	const fetchUser = async () => {
		setFetching(true);
		setOpen(false);
		const response = await axios.get(
			"https://randomuser.me/api/?results=15"
		);
		const data = response.data.results.map((user: any) => ({
			text: `${user.name.first} ${user.name.last}`,
			value: user.login.username
		}));
		setData(data);
		setOpen(true);
		setFetching(false);
	};

	const handleSelect: ChangeHandler<SelectedOption> = (option, name) => {
		console.log(name, option);
		setOpen(false);
	};

	return (
		<div style={{ height: "150px" }}>
			<TypeAhead
				name="some-typeahead"
				value={data[0]}
				loading={fetching}
				fetchFunc={fetchUser}
				onChange={handleSelect}
				open={open}
				placeholder="Search user..."
			>
				{data.map((d: any) => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</TypeAhead>
		</div>
	);
};

export const disabled = () => {
	const mockData = [
		{
			value: 1,
			text: "Item 1"
		},
		{
			value: 2,
			text: "Item 2"
		}
	];
	return (
		<TypeAhead
			name="default-typeahead"
			value={{ text: "Select user", value: "" }}
			loading={false}
			fetchFunc={() => {}}
			onChange={() => {}}
			open={false}
			disabled={true}
			placeholder="Select user..."
		>
			{mockData.map((d: any) => (
				<Option key={d.value} value={d.value}>
					{d.text}
				</Option>
			))}
		</TypeAhead>
	);
};
