import { IonLabel,  IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, useIonRouter } from '@ionic/react';

import React from 'react';
import { Route, Redirect } from 'react-router';
import styled from 'styled-components';
import "./Tabs.css";

import { BreakpointsEnum } from '../../SplitPane/MainRoutes';
import TabsAnimatedIcon from './TabsAnimatedIcon';

const StyledLabel = styled(IonLabel)`
/* visually hidden */
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;

`
export interface ITab {
    id: string;
    path: string;
    isHome?: boolean;
    label: string;
    icon: string | object;
    activeicon?: string; //TODO:
    Component: React.FC<{}>;
    isTab: boolean;
    exact?: boolean;
}

interface ITabs {
    tabs: ITab[];
    contentId?: string;
    when?: BreakpointsEnum;
    noBorder?: boolean;
}

const Tabs: React.FC<ITabs> = ({ tabs, contentId = "tabs", when = BreakpointsEnum.md, noBorder }) => {
    const { pathname } = useIonRouter().routeInfo;
    let pathnames = pathname.split("/");
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/accueil" />
                {/* Using the render method prop cuts down the number of renders your components will have due to route changes.
                Use the component prop when your component depends on the RouterComponentProps passed in automatically. */}
                {tabs.map(({ path, Component, id, isTab }) => {
                    if (isTab) {
                        return (<Route key={`route-${id}`} path={path} exact={true} render={() => <Component />} />)
                    }
                    else {
                        return (<Route key={`route-${id}`} path={path} exact={true} component={Component} />)
                    }
                })}
                <Route exact path="/">
                    <Redirect to="/tabs/accueil" />
                </Route>
            </IonRouterOutlet>
            <IonTabBar color="primary" slot="bottom" style={{ "--border": noBorder ? "none" : "" }}>
                {tabs.map(tab => {
                    if (tab.isTab) {
                        return (
                            <IonTabButton key={`tabButton_${tab.id}`}  tab={tab.id} href={tab.path}>
                                <TabsAnimatedIcon lottie={tab.icon} title={tab.label} isActive={pathnames?.includes(tab.id)} />
                                {/* <IonPopover alignment="center" mode="ios" side="top" showBackdrop={false} trigger={tab.id} triggerAction="click"  > */}
                                <StyledLabel>
                                    {tab.label}
                                </StyledLabel>
                                {/* </IonPopover> */}
                            </IonTabButton>
                        )
                    }
                })}
            </IonTabBar>
        </IonTabs>
    )
};

export default Tabs;
