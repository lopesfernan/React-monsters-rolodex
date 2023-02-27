import './card-list.style.css';
import Card from "../card/card.component";

const CardList = (props) => {
	const { filteredMonsters } = props;
	return (
		<div className="card-list">
			{filteredMonsters.map((monster) => {
				return <Card monster={monster} key={monster.id} />;
			})}
		</div>
	);
};


export default CardList