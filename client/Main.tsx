import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Error404 from './Error404';
import { useAsyncActionOnce } from './useAsyncAction';
import { EpycApi } from './Apis';
import GameList from './GameList';
import Draw from './Draw';
import Play from './Play';
import PlayDone from './PlayDone';
import Game from './Game';
import About from './About';

export default function () {
    return (
        <div>
            {/* Navbar */}
            <Navbar variant="dark" bg="dark" className="my-3">
                <Navbar.Brand as={Link} to="/">
                    EPYC
                </Navbar.Brand>

                <Nav variant="pills">
                    <LinkContainer to="/" exact={true}>
                        <Nav.Link active={false}>Games</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/about" exact={true}>
                        <Nav.Link active={false}>About EPYC</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>

            {/* Routes */}
            <Switch>
                <Route path="/about" exact={true}>
                    <About />
                </Route>

                <Route path="/play/:gameName/:frameId/done">
                    <PlayDone />
                </Route>

                <Route
                    path="/play/:gameName/:frameId"
                    render={(props) => {
                        return <Play gameName={props.match.params.gameName} frameId={props.match.params.frameId} />;
                    }}
                />

                <Route
                    path="/game/:gameName"
                    render={(props) => {
                        return <Game gameName={props.match.params.gameName} />;
                    }}
                />

                <Route path="/" exact={true}>
                    <GameList />
                </Route>

                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </div>
    );
}
