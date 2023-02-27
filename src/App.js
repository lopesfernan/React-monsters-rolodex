import "./App.css";
import {useEffect, useState } from "react";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/search-box.component";

const App =  () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	console.log('render')

	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(user => setMonsters(user));
	}, [])

	useEffect(() => {
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name
				.toLocaleLowerCase()
				.includes(searchField.toLocaleLowerCase());
		});
		setFilteredMonsters(filteredMonsters)
	},[monsters, searchField])

	const onSearchChange = (event) => {
		setSearchField(() => event.target.value);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monsters rolodex</h1>
			<SearchBox
				className="monster-search-box"
				onSearchChange={onSearchChange}
				placeholder="search monster"
			/>
			<CardList filteredMonsters={filteredMonsters} />
		</div>
	);
}


export default App