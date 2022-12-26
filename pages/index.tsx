import Button from "../components/Button/Button";
import Header, { hTags } from "../components/Headers/Header";
import { arrowDir } from "../components/Arrow/ArrowIcon";

export default function Home(): JSX.Element {
	return (
		<div>
			<Header tag = {hTags.h1}>sfsfsf</Header>
			<Button appearance="primary" arrowDirection = {arrowDir.right}>Primary</Button>
			<Button appearance="secondary" arrowDirection = {arrowDir.down}>Primary</Button>
			<Button appearance="primary" arrowDirection = {arrowDir.left}>Primary</Button>
			<Button appearance="secondary" arrowDirection = {arrowDir.up}>Primary</Button>
		</div>
	);
}
