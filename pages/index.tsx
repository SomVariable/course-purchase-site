import Button from "../components/Button/Button";
import Header, { hTags } from "../components/Headers/Header";

export default function Home(): JSX.Element {
	return (
		<div>
			<Header tag = {hTags.h1}>sfsfsf</Header>
			<Button appearance="primary" >Primary</Button>
			<Button appearance="secondary" >Primary</Button>
		</div>
	);
}
