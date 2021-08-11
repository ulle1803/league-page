<script context="module">
	export const prerender = true;
</script>

<script>
    import { dues } from '$lib/utils/helper';
    	let one, oneOne, oneTwo, oneThree, oneFour, oneFive, oneSix;
    	let two, twoOne, twoTwo, twoThree, twoFour, twoFive, twoSix;
    	let three, threeOne, threeTwo, threeThree, threeFour, threeFive;
    	let four, fourOne, fourTwo;
    	let five, fiveOne, fiveTwo, fiveThree;
    	let six, sixOne, sixTwo;
    	let seven;
	let eight, eightOne, eightTwo;
	let nine;
    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }
    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }
    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }
    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }
    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }
    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }
    .subBlock {
        margin-left: 2.4em;
    }
    .sectionHeading {
        margin: 4em 0 1.5em;
    }
    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }
    .underscore {
        text-decoration: underline;
    }
    .right {
        text-align: right;
    }
    .positionMaximums td {
        min-width: 3em;
    }
    .noUnderscore {
        text-decoration: none;
    }
    .clickable {
        cursor: pointer;
    }
    .clickable:hover {
        color: #00316b;
    }
    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">NPI DYNASTY CONSTITUTION</h1>
    
    <h2 class="noUnderscore">INHALTSVERZEICHNIS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Kapitel 1: Allgemeines</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Ligaführung</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Ligamodus</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Ligagröße</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(oneFour)}>1.4 Divisionen und Spielplan</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(oneFive)}>1.5 Playoffse</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(oneSix)}>1.6 Ownershipwechsel und Coownership</h4>
            
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Kapitel 2: Drafts</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Draftzeitpunkte</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Draftmouds</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.3 Draftreihenfolge</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(twoFour)}>2.4 Trades von Draftpicks</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(twoFive)}>2.5 Startupdraft</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(twoSix)}>2.6 Rookie und FreeAgent Draft</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Kapitel 3: Roster</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Rosterlimitationen</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(threeTwo)}>3.2 Lineup</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(threeThree)}>3.3 Bench</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(threeFour)}>3.4 Taxi Squad</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(threeFive)}>3.5 Injured Reserve</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Kapitel 4: Waiversystem</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 FAAB System</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Zeitpunkte der Waiverruns</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Kapitel 5: Trades</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 Allgemeines</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>5.2 Trade Deadline</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>5.3 Fairness</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Kapitel 6: Scoring</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Grundprinzipien</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Abweichungen vom Standard</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Kapitel 7: Einsatz und Payout</h3>
	
	<h3 class="noUnderscore clickable" on:click={() => goToSection(Eight)}>Kapitel 8: Fairplayregeln</h3>
	
	<h4 class="noUnderscore clickable" on:click={() => goToSection(eightOne)}>8.1 Trades</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(eightTwo)}>8.2 Tanking und Inaktivitaet</h4>
	
	<h3 class="noUnderscore clickable" on:click={() => goToSection(Nine)}>Kapitel 9: Ligamanagement und Ligabeirat</h3>
    
       
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Kapitel 1 Allgemeines</h2>
	
	<p>Bei der NPI Dynasty-Liga handelt es sich um eine Dynasty-Liga mit 16 Teams, die auf der Plattform
	Sleeper gespielt wird.</p>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Ligaführung</h3>
    
    <p>Die Ligaführung besteht aus den drei ständigen Commissionern Ulf Nürnberg, Holger Nürnberg & Nils
	Nürnberg. Eine personelle Veränderung in der Ligaführung muss beantragt werden und von den
	Managern der Liga mit einer Dreiviertelmehrheit bestätigt werden.
	</p>
    
    

    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Ligamodus</h3>
    
    <p>Die Liga basiert auf dem Dynasty-Modus, d.h. die Kaderzusammenstellung basiert auf einem Start-Up
	Draft, der die Ausgangslage für jedes Team darstellt. Nach jeder Saison verbleibt der Großteil der
	Spieler im jeweiligen Kader und nach der 1. Saison erfolgt in jeder Off-Season eine Ergänzung der Kader
	durch einen Rookie / Free Agent Draft (im Folgenden ausschließlich Rookie Draft genannt).
	</p>
      
    <h3 bind:this={oneThree}>1.3 Ligagröße</h3>
    
    <p>Die Liga umfasst 16 Teams.</p>
	
	<h3 bind:this={oneFour}>1.4 Divisionen und Spielplan</h3>
    
    <p>Die 16 Teams teilt sich auf vier Divisionen auf, die durch die Ligaführung (Ulf N., Holger N., Nils N.)
	festgelegt wurden. Darüber hinaus werden je zwei Divisionen zu einer Conference zusammengefasst.
	Die Conferences & Divisionen lauten:
	</p>
	
	<p>Die Zuordnung der verschiedenen Teams kann der Sleeper-App entnommen werden. Eine Anpassung
	der Divisionen kann bei der Ligaführung beantragt wird, unterliegt jedoch der Zustimmung der
	anderen betroffenen Teams.
	</p>
	
	<p>Die Regular Season umfasst für jedes Team 14 Spieltage. Der Spielplan für jedes Team setzt sich wie
		folgt zusammen:</p>
	<p>6 Spiele innerhalb der eigenen Division (Hin- und Rückspiel gegen Divisionsrivalen)</p>
	<p>4 Spiele gegen die andere Division der eigenen Conference (je 1 Spiel gegen jedes Team)</p>
	<p>4 Spiele gegen Teams aus der anderen Conference nach Rotationsprinzip</p>
	
	<p>Der Spielplan wird jeweils vor dem Start-Up Draft bzw. Rookie-Drafts festgelegt. Es gilt der Spielplan,
		der in der Sleeper-App hinterlegt ist.</p>
	
	<h3 bind:this={oneFive}>1.5 Playoffs</h3>
    
    <p>Die Playoffs werden mit 8 Teams gespielt. Die Plätze werden wie folgt vergeben</p>
	
	<p>Die Zuordnung der verschiedenen Teams kann der Sleeper-App entnommen werden. Eine Anpassung
	der Divisionen kann bei der Ligaführung beantragt wird, unterliegt jedoch der Zustimmung der
	anderen betroffenen Teams.
	</p>
	
	<p>Es qualifizieren sich folglich jeweils die Sieger der vier Divisionen. Darüber hinaus qualifizieren sich die
	insgesamt 4 besten verbliebenden Teams für die Wild-Card-Plätze, wobei dies unabhängig von der
	Conference oder Division erfolgt. Das Ranking der Teams innerhalb der Division sowie für die
	divisionsübergreifende Bestimmung der Wild-Card-Plätze basiert auf den folgenden Kriterien in der
	angegebenen Reihenfolge:</p>
	
	<p>Die Playoff-Paarungen werden nach dem Re-Seeding-Prinzip festgelegt, d.h. das Team mit dem
	höchsten Seed spielt in jeder Runde gegen das Team mit dem niedrigsten Seed.</p>
	
	<p>Ein Unentschieden in den Playoffs ist ausgeschlossen. Sollten zwei Teams die exakt gleiche Punktzahl
	in ihrem Match-Up erzielen, so entscheiden die folgenden Kriterien in der angegebenen Reihenfolge:</p>
	<p>4 Spiele gegen Teams aus der anderen Conference nach Rotationsprinzip</p>
	
	<h3 bind:this={oneSix}>1.6 Ownership</h3>
    
    	<p>Sollte ein Manager sein Team für die Folgesaison abgeben wollen, so ist dies der Ligaführung so zeitnah
	wie möglich mitzuteilen, spätestens jedoch bis spätestens zwei Wochen vor der Tradeline der
	Vorsaison (siehe Stichtag für Einsatzzahlung). Nur in diesem Fall ist die Einzahlung des Einsatzes nicht
	erforderlich. Bei einem späteren Rückzug aus der Liga wird der Einsatz einbehalten.</p>
	
	<p>Wenn ein Manager die Liga verlässt, so wird er durch einen adäquaten anderen Manager ersetzt, der
	durch die Ligaführung unter Mithilfe der anderen Manager zu akquirieren ist. Um die Attraktivität der
	Teamübernahme zu steigern, muss der Neu-Manager den Einsatz für die erste Saison nicht entrichten
	und ist gleichzeitig für mögliche Gewinne berechtigt. Gelingt es nicht einen Ersatz zu akquirieren, so
	hat die Liga über eine Anpassung des Ligamodus zu beraten.</p>
	
	<p>Darüber hinaus ist es den Manager des Teams möglich einen Co-Owner zu bestimmen und diesen in
	Sleeper zu hinterlegen. Die Aufgabenverteilung obliegt dem Owner & Co-Owner. Es ist jedoch
	festzuhalten, dass bei Stimmabgabe jedes Team gemeinsam eine Stimme hat, nicht jeder einzelne
	Manager. Das bedeutet, dass Owner & Co-Owner gemeinsam nur eine Stimme abzugeben haben.</p>
		
      
    <h2 class="sectionHeading" bind:this={two}>Kapitel 2 Drafts</h2>
	
	<p>Die Drafts erfolgen grundsätzlich online über die Sleeper-App. Vor der 1. Saison der NPI Dynasty-Liga
	erfolgt ein Start-Up Draft, der sowohl Veteranen als auch Rookies / Free Agents umfasst und die
	Ausgangslage für jedes Team darstellt. In jeder Off-Season nach der 1. Saison erfolgt ein Rookie-Draft
	als jährliche Ergänzung der Kader eines jedes Teams, der Rookies sowie NFL Free Agents umfasst.</p>
    
    <h3 bind:this={twoOne}>2.1 Draftzeitpunkte</h3>
    	<p>Sowohl der Start-Up Draft als auch der Rookie Draft finden im Anschluss an den NFL Draft des
	jeweiligen Jahres statt (folglich voraussichtlich Anfang Mai eines jeden Jahres). Der genaue Zeitpunkt
	eines jedes Drafts wird im Vorfeld durch eine Abstimmung zwischen allen Managern der Liga festgelegt
	und entsprechend kommuniziert.</p>

    <h3 bind:this={twoTwo}>2.2 Draftmodous</h3>
    	<p>Der Start-Up Draft erfolgt in Form eines Slow-Drafts, d.h. der Draft findet nicht an einem einzigen Tag
	statt, sondern streckt sich über einen längeren Zeitraum. Dies basiert darauf, dass jeder Manager für
	jeden Pick jeweils maximal 8 Stunden zur Verfügung hat. Hierbei wird der Draft in jeder Nacht
	voraussichtlich von 22 Uhr bis 8 Uhr unterbrochen, wobei die genaue Uhrzeit hier der Ligaführung
	obliegt. Es wird erbeten, dass ein Pick möglichst zeitnah erfolgt und die maximale Dauer für den Draft
	Pick möglichst nicht ausgereizt wird.</p>
    	<p>Erfolgt keine Auswahl eines Spielers in der zur Verfügung stehenden Zeit und ist kein Spieler in der
	Queue für einen Auto-Pick hinterlegt, ordnet die Ligaführung der Mannschaft des Managers einen
	beliebigen Spieler als Platzhalter zu („Tony-Romo-Regel“) und der Manager mit dem nächsten Pick
	kann entsprechend fortfahren. Der Manager, dem der Platzhalter zugeordnet wurde, hat im Anschluss
	an die Zuordnung des Platzhalters die Möglichkeit diesen Spieler durch einen zu diesem Zeitpunkt noch
	verfügbaren Spieler zu ersetzen, indem er diese Wahl einem Mitglied der Ligaführung kommuniziert.
	Die Ligaführung ersetzt den Platzhalter-Spieler anschließend durch den gewünschten Spieler.</p>
	<p>Im Falle von Unregelmäßigkeiten im Verlauf des Drafts (bspw. Internet-Ausfälle, persönliche Gründe,
	etc.) mit negativem Effekt auf einen oder mehrere Manager, behält sich die Ligaführung vor, den Draft
	zu pausieren bzw. anzupassen um die genannten negativen Effekte abzuwenden und die Fairness des
	Drafts zu gewährleisten.</p>
    
    <h3 bind:this={twoThree}>2.3 Draftreihenfolge</h3>
	
   	 <p>Die Draftreihenfolge für den Start-Up Draft wird mindestens eine Woche vor Start des Drafts im
	Zufallsprinzip festgelegt. Das genaue Format (bspw. virtueller 40 Yard-Dash) wird jeweils im Vorfeld
	des jeweiligen Drafts festgelegt. Basierend auf der Reihenfolge für die erste Runde erfolgt der
	verbleibende Start-Up Draft entsprechend des Snake-Prinzips, d.h. der Spieler mit dem ersten Pick in
	der 1. Runde verfügt über den letzten Pick der 2. Runde sowie erneut dem ersten Pick in der 3. Runde
	usw. (Dies entspricht dem üblichen Vorgehen in Re-Draft-Ligen).</p>
	<p>Abweichend vom Start-Up-Draft folgt die Reihenfolge in den späteren Runden nicht dem SnakePrinzip, sondern nach dem Linear-Prinzip. Dies bedeutet, dass das Team mit dem ersten Pick in der 1.
	Runde jeweils auch den ersten Pick in der 2., 3. und jeder weiteren Runde hat. Dies gilt entsprechend für alle Manager (dies entspricht folglich dem Vorgehen im NFL-Draft). Die Reihenfolge des RookieDrafts bestimmt sich wie folgt:</p>
	<p>Für Teams, die sich nicht für die Playoffs qualifiziert haben (Plätz 9-16), richtet sich die Draftreihenfolge
	nach den insgesamt möglichen erzielten Punkten („max PF“, unabhängig von
	Aufstellungsentscheidungen während der Saison) einschließlich Woche 13. Das Team mit den
	wenigsten erzielten Punkten erhält hierbei den 1. Draft Pick, das Team mit den zweitmeisten erzielten
	Punkten den 2. Draft Pick usw.</p>
	<p>Für Teams, die sich für die Playoffs qualifiziert haben (Plätze 1-8), richtet sich die Reihenfolge nach der
	finalen Platzierung nach den Playoffs, inkl. des Championship-Games und der Platzierungsspiele.
	Hierbei folgt die Vergabe der Draft Picks erneut in der umgekehrten Reihenfolge, d.h. der Sieger des
	Championship-Games erhält den letzten Pick der 1. Runde, der Zweitplatzierte den Vorletzten und
	bspw. der Fünftplatzierte den Fünftletzten usw.</p>
	
	<h3 bind:this={twoFour}>2.4 Trades von Draftpicks</h3>
	
    	<p>Die Schilderungen zu der Draftreihenfolge betreffen lediglich die Ausgangslage für den Draft, da die
	Draft Picks durch die jeweiligen Manager gegen andere Draft Picks und / oder Spieler getauscht werden
	können. Eine solche Anpassung der Draftreihenfolge muss über die Sleeper-Plattform erfolgen und
	wird hier entsprechend hinterlegt und transparent dargestellt. Trades von Draft Picks können sowohl
	in der Off-Season, während der Drafts sowie während der Saison erfolgen, solange dies nicht im
	Widerspruch zur Trade-Deadline steht.</p>
	
	<p>Hierbei ist zu beachten, dass jeweils nur Picks der bevorstehenden bzw. laufenden Saison sowie der
	Folgesaison in Trades eingebunden werden dürfen. Für den Start-Up Draft für die Saison 2021 dürfen
	folglich nur 2021er Draft Picks (bevorstehende Saison) sowie 2022er Draft Picks (Folgesaison) in Trades
	eingebunden werden. Eine weitere Voraussetzung für den Trade von Draft Picks ist, dass der Einsatz
	für die entsprechende Saison bereits bezahlt wurde. Das bedeutet, wenn im Start-Up Draft 2021 ein
	Pick aus 2022 in den Trade einbezogen wurde, so muss der entsprechende Manager sowohl den
	monetären Einsatz für 2021 als auch 2022 entrichten.</p>
	
	<h3 bind:this={twoFive}>2.5 Startup Draft</h3>
	
    	<p>Der Start-Up Draft erfolgt in Form eines Slow-Drafts und startet wenige Tage nach dem realen NFL
	Draft Ende April 2021. Der genaue Startzeitpunkt wird auf Basis einer Abstimmung im Vorfeld
	festgelegt. Der Start-Up Draft umfasst sowohl Veteranen, die bereits 2020 in der Liga aktiv waren, als
	auch Rookies, die durch den 2021er NFL Draft neu in die NFL beitreten. Dieser Draft dient dem
	Zusammenstellen des anfänglichen Kaders eines jedes Managers und stellt somit die Grundlage für die
	Dynasty-Liga dar. </p>
	
	<p>Der Start-Up Draft umfasst insgesamt 20 Runden, in denen jeder Manager mindestens zwei Rookies /
	Sophomores für den Taxi Squad auswählen muss. Nach dem Start-Up Draft verfügt jeder Manager
	i.d.R. über 20 Spieler, die die folgenden Roster-Plätze füllen:</p>
	
	<p>Am Ende des Start-Up Drafts muss jeder Manager in der Lage sein ein vollständiges Line-Up
	aufzustellen. Basierend auf möglichen Trade-Picks ist es auch möglich, dass ein Manager am Ende des
	Start-Up Drafts über weniger als 20 Spieler verfügt. Diese Kaderplätze können dann erst zum Zeitpunkt
	des ersten Waiver Runs zu Beginn der NFL Pre-Season aufgefüllt werden. Hat ein Team nach dem Draft
	mehr Spieler als der Kader es zulässt, so muss die Kadergröße im Anschluss an den Draft reduziert
	werden, bevor anderweitige Kader-Moves getätigt werden können.</p>
	
	<h3 bind:this={twoSix}>2.6 Rookie und FreeAgent Draft</h3>
	
    	<p>Der Rookie-Draft umfasst alle Rookies, die neu über den NFL Draft in die Liga beitreten sowie alle Free
	Agents, die zum Zeitpunkt des Drafts keinem Roster der Liga zugehören. Der Rookie-Draft umfasst
	grundsätzlich vier Runden, wobei die genaue Anzahl von Draft Picks pro Team von etwaigen Draft Pick
	Trades abhängig ist.</p>
	
	<p>Im Vorfeld des Rookie-Drafts wird die Kadergröße der Teams temporär erhöht, damit alle Draft Picks
	in den Kader aufgenommen werden können. Im Anschluss an den Rookie-Draft haben die Teams
	folglich i.d.R. mehr Spieler als die Kadergröße während der Saison erlaubt. Die Kadergröße ist vor dem
	ersten Waiver Run kurz vor Beginn der NFL Pre-Season durch den Manager zu reduzieren. Die genaue
	Kadergröße und somit die Notwendigkeit von Roster Cuts hängt hierbei von der Anzahl der Draft Picks
	pro Team sowie der etwaigen Wiederaufnahme von Spielern in den aktiven Kader ab (Shifts von
	Injured Reserve am Saisonende). </p>
	
   
    <h2 class="sectionHeading" bind:this={three}>Kapitel 3 Roster</h2>
	
	<p>Der Roster eines jedes Managers umfasst i.d.R. 20 Spieler (+ Spieler auf Injured Reserve, siehe
	entsprechender Abschnitt), wobei sich diese Roster-Plätze wie folgt aufteilen:</p>
	
	<p>Ein Spieler muss hierbei immer über ein einsatzfähiges Line-Up verfügen. Bench- sowie Taxi-SquadPlätze müssen jedoch nicht zwingend besetzt sein.</p>
	
	<p>Das Roster umfasst zunächst lediglich individuelle Offensiv-Spieler und ausdrücklich keine Kicker sowie
	keine DST. Es wurde vereinbart, dass nach der 1. Saison erneut darüber beraten wird, ob das Roster
	ggf. um Individual Defensive Player (IDP) ergänzt wird.</p>
	

    <h3 bind:this={threeOne}>3.1 Rosterlimitationen</h3>
	
    <p>Ein Team darf nicht mehr als 3 Quarterbacks im aktiven Roster (Line-Up + Bench) haben (Injured
	Reserve & Taxi-Plätze sind folglich von dieser Regel ausgeschlossen).</p>
    
    <h3 bind:this={threeTwo}>3.2 Lineup</h3>
	
    <p>Jedes Team muss zu jedem Zeitpunkt der Off-Season sowie zu jedem Spieltag innerhalb der Saison
	dazu in der Lage sein ein einsatzfähiges Line-Up aufzustellen. Ausgeschlossen sind Fälle, in denen auch
	das Waiver Wire keine einsatzfähige Alternative bietet (bspw. kein starting QB auf dem Waiver Wire
	verfügbar & alle QBs im eigenen Kader nicht einsatzfähig).</p>
	
	<ol>
        <li>Points For</li>
        <li>Head 2 Head Record</li>
        <li>Division Record</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
        <li>Duel to the death</li>
    </ol>
    
    <h3 bind:this={threeThree}>3.3 Bench</h3>
	
    <p>Die Bench umfasst insgesamt 10 Plätze. Ein Manager kann darauf verzichten alle Bankplätze zu besetzen..</p>
    
    <h3 bind:this={threeFour}>3.4 Taxi Squad</h3>
	
    	<p>Das sogenannte Taxi-Squad ist für maximal 2 Rookie- sowie Sophomore-Spieler vorgesehen, die zu
	Beginn der Saison auf die Taxi-Plätze gestellt werden können. Ein Verschieben von Spielern auf einen
	der Taxi-Plätze ist hierbei jedoch lediglich bis zum Kick-Off des Season Openers möglich. Nach Anpfiff
	des ersten Saisonspiels können keine Spieler mehr auf einen der Taxi-Plätze verschoben werden.</p>
	
	<p>Die zwei Spieler, die jedes Team zu Saisonbeginn auf die Taxi-Plätze gestellt hat, können zu jedem
	Zeitpunkt der Saison „aktiviert“ werden, so dass sie im Folgenden für Line-Up sowie Bench-Plätze zur
	Verfügung stehen. Dies ist jedoch nur möglich, wenn das Team entsprechend über einen freien Bank-
	No Punt Intended The Rulebook – v1.3 – April 2021 10
	Platz verfügt. Zudem müssen Spieler zwingend aktiviert, die nicht mehr berechtigt für den Taxi-Squad
	sind, da es sich bei den Spielern nicht mehr um Rookies / Sophomores handelt. Eine Umkehr dieser
	Aktivierung ist nicht möglich. In Ausnahmefällen kann sich der Manager im Falle eines Versehens sehr
	zeitnah bei der Ligaführung melden, welche die Aktivierung manuell wieder rückgängig machen kann.</p>
    
    <h3 bind:this={threeFive}>3.5 Injured Reserve</h3>
	
    <p>Die Injured Reserve umfasst maximal 5 Plätze, die von den Managern genutzt werden können. Es
	können Spieler mit dem folgenden Status laut Sleeper-App auf die Injured Reserve verschoben werden
	und zu jedem beliebigen Zeitpunkt wieder aktiviert werden:</p>
    
    <h2 class="sectionHeading" bind:this={four}>Kapitel 4 Waiversystem</h2>
	
	<p>Das Waiver-System folgt dem FAAB-System und innerhalb der regulären Saison erfolgen Waiver Runs
	am Mittwoch, Freitag sowie Sonntag um 09:05 AM PST (i.d.R. 18:05 deutscher Zeit abgesehen von
	einer kurzen Phase rund um die Zeitverschiebung). Im Falle von Unregelmäßigkeiten im Ligabetrieb
	bestimmt die Ligaführung über mögliche abweichende Regelungen. Das Waiver-System ist in der Zeit
	Off-Season deaktiviert, so dass in dieser Zeit keine Waiver-Moves getätigt werden können. Die OffSeason beginnt in diesem Zusammenhang mit dem letzten Spiel der Woche 16 und endet wenige Tage
	vor dem ersten Pre-Season-Spiel der NFL. Trades sind von dieser Regelung teilweise ausgeschlossen,
	unterliegen jedoch der Trade Deadline (siehe entsprechender Abschnitt).</p>
	
	<p>Aufgrund des FAAB-Systems gibt es keine Unrestricted Free Agents, die zu jedem Zeitpunkt
	aufgenommen werden können, sondern Spieler können nur jeweils zu den Waiver Runs in den Kader
	aufgenommen werden.</p>

    
    <h3 bind:this={fourOne}>4.1 FAAB System</h3>
	
    	<p>Das Waiver-System der Dynasty-Liga erfolgt nach dem Prinzip FAAB (Free Agent Acquisition Budget). Zu Beginn der ersten Saison erhält jeder Manager ein Guthaben von 1000$ FAAB, welches im Folgenden für die Akquisition von Free Agents eingesetzt werden kann.</p>
    	
	<p>Manager können hierbei eine beliebige Summe auf einen Free Agent bieten. Zum Zeitpunkt des Waiver
	Runs prüft die Sleeper-App die abgegebenen Gebote und der Manager mit dem höchsten Gebot erhält
	den Free Agent gegen Zahlung des entsprechenden Betrags. Falls Gebote in gleicher Höhe vorliegen,
	greift die Waiver Priority, die in der Sleeper App hinterlegt ist.</p>
	
	<p>Es können auch Angebote über 0$ abgegeben werden und FAAB-Guthaben kann in Trades einbezogen
	werden. Am Ende der Saison werden 25% des nicht ausgegebenen FAABs auf die nächste Saison
	übertragen und Manager erhalten zusätzlich zu Beginn der neuen Saison erneut 1000$ FAAB.
	Insgesamt kann ein Manager maximal ein Guthaben von 1250$ FAAB haben.</p>
	
    <h3 bind:this={fourTwo}>4.2 Zeitpunkte der Waiverruns</h3>
	
    	<p>Während der Off-Season erfolgen keine Waiver Runs. In diesem Zusammenhang beginnt die OffSeason nach dem letzten Spiel der Woche 16 und endet wenige Tage vor dem ersten Spiel der PreSeason. Dies bedeutet, dass in dieser Phase Kaderbewegungen auf Ergänzungen durch den Draft,
	Trades & Roster-Cuts beschränkt sind.</p>
	
	<p>Während der Pre-Season der NFL und der regular season (beginnend wenige Tage vor dem ersten PreSeason-Spiel der NFL und endend mit dem letzten Spiel der Woche 16) erfolgen die Waiver Runs drei
	Mal pro Woche (Mi, Fr, So) um jeweils 09:05 AM PST (i.d.R. 18:05 deutscher Zeit abgesehen von einer
	kurzen Phase rund um die Zeitverschiebung). Teams können Spieler nur zu den Waiver Runs in ihren
	Kader aufnehmen.</p>


    <h2 class="sectionHeading" bind:this={five}>Kapitel 5 Trades</h2>
	
	<p>Trades sollten grundsätzlich fair sein und zu keiner Wettbewerbsverzerrung führen. Trades sind in der
	gesamten Off-Season und während der Regular Season bis einschließlich Spieltag 12 möglich. Es sind
	hingegen nach Spieltag 12 bis einschließlich des Championship-Games keine Trades möglich (dies
	schließt den Trade von Draft Picks mit ein).</p>
    
    <h3 bind:this={fiveOne}>5.1 Allgemeines</h3>
	
    	<p>Trades, die von beiden Seiten akzeptiert wurden, werden direkt ausgeführt und unterliegen keiner
	Warteperiode. Die folgenden Bestandteile können in einen Trade zwischen zwei Teams einbezogen
	werden:</p>
	
	<p>Es ist verboten in einen Trade andere Bestandteile (z.B. Bargeld o.ä.) einzubinden. Falls ein Verstoß
	gegen diese Regel vorliegt, behält sich die Ligaführung einen Ausschluss der betroffenen Manager vor. </p>
	
	<p>Bei den Spielern und dem FAAB gibt es keine Einschränkungen (abgesehen von
	wettbewerbsverzerrenden Trades). Bei den Draft Picks können lediglich Draft Picks der
	bevorstehenden bzw. laufenden Saison (bspw. 2021) sowie der Folgesaison (bspw. 2022) einbezogen
	werden. Falls ein Manager Draft Picks der Folgesaison weg tradet, so muss der jeweilige Manager
	zudem den monetären Liga-Einsatz für die betroffene Saison (bspw. somit auch für 2022) zeitnah
	entrichten, spätestens eine Woche nach dem Trade.</p>
	
	<h3 bind:this={fiveTwo}>5.2 Trade Deadline</h3>
	
    	<p>Spieltag 13 stellt die Trade Deadline dar, d.h. nach diesem Spieltag können bis Saisonende keine Trades
	mehr abgeschlossen werden.</p>
	
	<h3 bind:this={fiveThree}>5.3 Fairness</h3>
	
    	<p>Grundsätzlich wird an alle Manager appelliert keine wettbewerbsverzerrenden Trades durchzuführen,
	die bspw. einen Titelkandidaten ohne entsprechenden Gegenwert stärken. Falls Manager in der Liga
	Zweifel an der Fairness eines Trades haben, können sie dies einem Mitglied der Ligaführung melden.
	Geben mindestens zwei Manager an, dass sie Bedenken bei einem Trade haben, ist die Ligaführung
	verpflichtet über den Trade zu beraten. Kommt die Ligaführung in Ausnahmefällen zu der
	Entscheidung, dass ein Trade wettbewerbsverzerrend ist oder gegen Regel verstößt, kann die
	Ligaführung einen Trade rückgängig machen. Darüber hinaus kann ein solcher Verstoß durch Abzug
	von FAAB, Draft Picks oder Siegen geahndet werden.</p>
	

    <h2 class="sectionHeading" bind:this={six}>Kapitel 6 Scoring</h2>
    
	<p>Das Scoring der NPI Dynasty-Liga folgt weitestgehend den Standard Scoring Settings nach Full PPR, wie
	es in der Sleeper App hinterlegt ist. Abweichungen betreffen die Wertung von Interceptions sowie
	Fumbles.</p>
	
    <h3 bind:this={sixTwo}>6.2 Abweichungen vom Standard</h3>
	
    	<p>Die Scoring Settings weichen in zwei Punkten von den Standard-Einstellungen der Sleeper-App ab:</p>
	
    <h2 class="sectionHeading" bind:this={seven}>Kapitel 7 Einsatz und PayOut</h2>
	
	<p>Die Manager der Liga haben sich auf einen Einsatz in Höhe von 20 Euro pro Saison verständigt. Dieser
	Einsatz ist für die 1. Saison bis spätestens Ende Januar 2021 zu entrichten. Für alle Folgesaisons ist der
	Einsatz bis spätestens zwei Wochen vor Trade Deadline der Vor-Saison zu entrichten, d.h. für die Saison
	2022 ist der Einsatz bis zwei Wochen vor Trade Deadline der Saison 2021 zu entrichten. Sollte ein
	Manager den Einsatz nicht zum Stichtag bezahlen, so ist dies zeitnah nachzuholen. Manager, die den
	Einsatz bis zum Draft nicht bezahlt haben, aber Mitglieder der Liga bleiben wollen, können ein Strafe
	erhalten. Diese kann bis zu einem Ausschluss vom Draft führen bzw. es kann ein Manager aus der Liga
	entfernt werden, wenn keine langfristige Absicht der Teamführung mehr zu erkennen ist.</p>
	
	<p>Wenn ein Manager einen Draft Pick einer zukünftigen Saison in einen Trade einbezieht, so hat der
	Manager den Einsatz für die betroffene Saison zeitnah nach dem Trade (spätestens eine Woche
	danach) zu entrichten. Erfolgt dies nicht, wird der betroffene Trade durch die Ligaführung rückgängig
	gemacht.</p>
	
	<p>Der Gesamteinsatz der Liga wird pro Saison nach dem folgenden Schema ausgezahlt:</p>
	
	<p>Darüber hinaus werden die verbleibenden 42 Euro im Laufe der Regular Season ausbezahlt. Für die 14
	Spieltage gibt es verschiedene Awards, die jeweils mit 3 Euro belohnt werden. Die wöchentlichen
	Awards richten sich nach den Ergebnissen des jeweiligen Spieltags und umfassen die Folgenden:</p>

   
	<h2 class="sectionHeading" bind:this={eight}>Kapitel 8 Fairplayregeln</h2>
	
	<p>Grundsätzlich wird an alle Manager appelliert im besten Interesse des eigenen Teams zu agieren und
	gleichzeitig mit dem eigenen Verhalten einen fairen Wettbewerb zu fördern. Im Fall von
	Regelverstößen oder unfairen Verhalten behält sich die Ligaführung eine Bestrafung vor, bspw. durch
	den Abzug von Draft Picks, Siegen oder FAAB.</p>
	
    <h3 bind:this={eightOne}>8.1 League Dues</h3>
    <p>Grob unfaire Trades – auch zu Gunsten des eigenen Teams – sind zu unterlassen. Sollten mindestens
	zwei Manager Bedenken in Bezug auf einen Trade äußern, so ist die Ligaführung verpflichtet über den
	Trade zu beraten. Darüber hinaus kann auch die Ligaführung entscheiden sich bzgl. eines Trades
	abzustimmen. Sollte die Ligaführung zu dem Entschluss kommen, dass ein Trade unfair bzw.
	wettbewerbsverzerrend ist oder gegen Regeln verstößt, kann der Trade rückgängig gemacht werden.
	Darüber hinaus ist es möglich, dass die entsprechenden Manager eine Bestrafung erhalten, bspw.
	durch den Abzug von Draft Picks, Siegen oder FAAB.</p>
    
    <h3 bind:this={eightTwo}>8.2 Tanking und Inaktivitaet</h3>
	
    	<p>Alle Manager sind verpflichtet zu jedem Spieltag ein vollständiges, einsatzfähiges Line-Up aufzustellen,
	mit dem sich der Manager die besten Chancen auf einen Sieg ausrechnet. Es ist ausdrücklich verboten,
	ein absichtlich schlechteres Line-Up ins Rennen zu schicken, um die Chancen auf einen besseren Draft
	Pick zu erhöhen. Sollten mindestens zwei Manager Bedenken äußern, dass ein Manager absichtlich ein
	schlechteres Line-Up aufgestellt hat, ist die Ligaführung verpflichtet diesen Fall zu überprüfen. Darüber
	hinaus kann auch die Ligaführung entscheiden, einen solchen Sachverhalt zu überprüfen. Sollte die
	Ligaführung zu dem Ergebnis kommen, dass ein Manager absichtlich ein zu schlechtes Line-Up
	aufgestellt hat, so kann die Ligaführung den entsprechenden Manager bestrafen.</p>

    	<p>Darüber hinaus kann die Ligaführung im Falle von unvollständigen Line-Ups mit verletzten oder
	anderweitig nicht einsatzfähigen Spielern ebenfalls eine Strafe aussprechen. Dies umfasst auch solche
	Fälle, in denen bspw. der einzige QB oder TE eines Teams ausfällt, solange der Manger noch
	ausreichend Zeit hatte einen entsprechenden Ersatz vom Waiver Wire zu claimen. Diese Regelung gilt
	auch dann, wenn der Manager unter anderen Umständen keinen Spieler seiner Bank droppen wollen
	würde. Ausgeschlossen sind jedoch solche Fälle, in denen der Manager glaubhaft versichern kann, dass
	er auf eine Entwicklung (bspw. Verletzung oder Aktivität eines Spielers) nicht mehr rechtzeitig
	reagieren konnte oder in Fällen, wo kein Ersatz auf dem Waiver Wire verfügbar war.</p>
	
	<p>Eine Strafe kann bspw. die Anpassung des Line-Ups, der Abzug von Draft Picks, eine Veränderung der
	Draft-Reihenfolge und/oder der Abzug von FAAB sein. Bei wiederholten Verstößen behält sich die
	Ligaführung vor, Manager auch aus der Liga auszuschließen und den Einsatz einzubehalten.</p>
    
    <h2 class="sectionHeading" bind:this={nine}>Kapitel 9 Ligamanagement und Ligabeirat</h2>
	
	<p>Die Commissioner Ulf Nürnberg, Holger Nürnberg und Nils Nürnberg agieren als Commissioner und
	stellen somit die Ligaführung da. Entscheidungen zur Dynasty-Liga werden grundsätzlich durch die
	Ligaführung nach dem Mehrheitsprinzip getroffen. Die Ligaführung ist bemüht das Meinungsbild der
	Manager so stark wie möglich in die Entscheidungsfindung einzubinden und daher dieses
	Meinungsbild regelmäßig abzufragen. Die Abstimmung der Manager ist hierbei nicht bindend und es
	obliegt der Ligaführung die notwendigen Bedingungen (wie bspw. notwendige Mehrheit) festzulegen
	sowie entsprechend zu kommunizieren. Sollten Sachverhalte nicht ausreichend in diesen League
	Bylaws definiert sein, so behält sich die Ligaführung vor dann darüber zu beraten, sobald diese
	Sachverhalte Relevanz haben.</p>

    	<p>Falls ein oder mehrere Mitglieder der Ligaführung in eine Untersuchung rund um mögliche FairplayVerstöße oder Wettbewerbsverzerrung involviert sind, wird ein Ligabeirat in die Überprüfung mit
	einbezogen, der im Vorfeld jeder Saison durch die Manager der Liga gewählt und zwei Mitglieder
	umfasst. Kandidaten für den Ligabeirat können durch den Kandidaten selbst oder durch andere
	Manager der Liga nominiert werden. Eine Wiederwahl der Mitglieder des Ligabeirats ist möglich und
	in ihrer Häufigkeit nicht limitiert.</p>

</div>
