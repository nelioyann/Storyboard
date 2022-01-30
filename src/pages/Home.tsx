import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Button from '../components/Buttons/Button';
import Heading from '../components/Headings/Heading';
import Input from '../components/Forms/Input/Input';
import Textarea from '../components/Forms/Input/Textarea';
import { Switcher, Box, Cover, Sidebar, Stack } from '../layouts';
import { Label } from '../theme/globalStyles';
// import { SpacingEnum } from '../theme/globalStyles';
import './Home.css';
import Header from '../components/Headers/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header label="Home" mode="ios"/>
      <IonContent fullscreen>
        
        <Box padding="0" borderWidth="0">
          <Cover space="2em" minHeight="85vh">
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
          </Cover>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Home;
