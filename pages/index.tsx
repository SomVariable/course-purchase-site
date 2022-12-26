import Button from "../components/Button/Button";
import Header, { hTags } from "../components/Headers/Header";
import { arrowDir } from "../components/Arrow/ArrowIcon";
import Text, { textT } from "../components/Text/Text";

export default function Home(): JSX.Element {
	return (
		<div>
			<Header tag = {hTags.h1}>sfsfsf</Header>
			<div style = {{backgroundColor: 'white', padding: "20px"}}>
			<Text textType={textT.small}>
			Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
			</Text>	
			</div>
			<div style = {{backgroundColor: 'white', padding: "20px"}}>
			<Text textType={textT.medium}>
			Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!
			</Text>
			</div>
			<div style = {{backgroundColor: 'white', padding: "20px"}}>
			<Text textType={textT.big}>
			Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
			</Text>
			
			</div>
			
			
			
			<Button appearance="primary" arrowDirection = {arrowDir.right}>Primary</Button>
			<Button appearance="secondary" arrowDirection = {arrowDir.down}>Primary</Button>
			<Button appearance="primary" arrowDirection = {arrowDir.left}>Primary</Button>
			<Button appearance="secondary" arrowDirection = {arrowDir.up}>Primary</Button>

		</div>
	);
}
