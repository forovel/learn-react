import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import HelloWorld from './components/HelloWorld/HelloWorld';
import IntroducingJsx from './components/IntroducingJsx/IntroducingJsx';
import RenderingElements from './components/RenderingElements/RenderingElements';
import ComponentsAndProps from './components/ComponentsAndProps/ComponentsAndProps';
import StateAndLifecycle from "./components/StateAndLifecycle/StateAndLifecycle";
import HandlingEvents from "./components/HandlingEvents/HandlingEvents";
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
import ListsAndKeys from "./components/ListsAndKeys/ListsAndKeys";
import Forms from "./components/Forms/Forms";
import LiftingStateUp from "./components/LiftingStateUp/LiftingStateUp";
import CompositionVsInheritance from "./components/CompositionVsInheritance/CompositionVsInheritance";

function App() {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <a href="/1">1. Hello World</a>
            </li>
            <li>
              <a href="/2">2. Introducing Jsx</a>
            </li>
            <li>
              <a href="/3">3. Rendering Elements</a>
            </li>
            <li>
              <a href="/4">4. Components and Props</a>
            </li>
            <li>
              <a href="/5">5. State and Lifecycle</a>
            </li>
            <li>
              <a href="/6">6. Handling Events</a>
            </li>
            <li>
              <a href="/7">7. Handling Events</a>
            </li>
            <li>
              <a href="/8">8. Lists and Keys</a>
            </li>
            <li>
              <a href="/9">9. Forms</a>
            </li>
            <li>
              <a href="/10">10. Lifting State Up</a>
            </li>
            <li>
              <a href="/11">11. Composition vs Inheritance</a>
            </li>
          </ul>
        </nav>
        <BrowserRouter>
          <Switch>
            <Route path="/1">
              <HelloWorld />
            </Route>
            <Route path="/2">
              <IntroducingJsx />
            </Route>
            <Route path="/3">
              <RenderingElements />
            </Route>
            <Route path="/4">
              <ComponentsAndProps name="Jim" messagesCount={2} />
            </Route>
            <Route path="/5">
              <StateAndLifecycle counter={1} />
            </Route>
            <Route path="/6">
              <HandlingEvents enabled={true} />
            </Route>
            <Route path="/7">
              <ConditionalRendering />
            </Route>
            <Route path="/8">
              <ListsAndKeys />
            </Route>
            <Route path="/9">
              <Forms />
            </Route>
            <Route path="/10">
              <LiftingStateUp />
            </Route>
            <Route path="/11">
              <CompositionVsInheritance />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
