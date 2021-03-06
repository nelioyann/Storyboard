import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Button from '../components/Buttons/Button';
import Heading from '../components/Headings/Heading';
import Input from '../components/Forms/Input/Input';
import Textarea from '../components/Forms/Input/Textarea';
import { Switcher, Box, Cover, Sidebar, Stack, Cluster } from '../layouts';
import { ColorLabelsEnum, Label, SpacingEnum } from '../theme/globalStyles';
// import { SpacingEnum } from '../theme/globalStyles';
import Header from '../components/Headers/Header';
import Content from '../ui/Content/Content';
import { ModalExample } from '../components/Modals/ModalExample';
import { useDarkMode } from '../hooks/use-dark-mode.hook';
import { contrastOutline } from 'ionicons/icons';
import {FilterAuthors, Searches, Trending} from './Funsies';

const Home: React.FC = () => {
  const { darkTheme, setDarkTheme } = useDarkMode();
  // console.log(darkTheme)
  return (
    <IonPage>
      <Header label="Home" mode="ios" icon={contrastOutline} iconOnclickHandler={() => setDarkTheme(!darkTheme)} />
      <Content>
        <Box padding="0" borderWidth="0">
          {/* <Cover noPad space="2em" minHeight="85vh">
            <Box padding="0" borderWidth="0">
              <Heading level="3">Form</Heading>
              <Label size="large">This form is entirely built using bricks of layout.</Label>
            </Box>
            <Stack data-centered>
              <Sidebar sideWidth="15em" >
                <Input label='Todo' name="todo" type="text" placeholder="Enter your new todo..." />
                <Input label='Deadline' name="deadline" type="date" placeholder="Deadline" />
              </Sidebar>
              <Textarea label="Home" name="Home" rows={3}></Textarea>
            </Stack>
            <Switcher>
              <Button fill="outline" label="Save"/>
              <Button label="Send"/>
              </Switcher>
            </Cover> */}
          {/* <Button label="Change theme" color={ColorLabelsEnum.DARK} onClick={() => setDarkTheme(!darkTheme)}/> */}

          {/* <ModalExample/> */}
          <Cluster space={SpacingEnum.s0}>
            <FilterAuthors />
            <Searches />
            <Trending/>
          </Cluster>
        </Box>
      </Content>
    </IonPage>
  );
};

export default Home;
