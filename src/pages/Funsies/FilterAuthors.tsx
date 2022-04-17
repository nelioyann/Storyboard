/**
 * https://dribbble.com/shots/18024312-Filter-UI-Design
 */

import { IonItem, IonSearchbar } from '@ionic/react'
import React from 'react'
import styled from 'styled-components'
import BoringAvatar from '../../components/Avatars/BoringAvatar'
import Heading from '../../components/Headings/Heading'
import { Box, Center, Stack } from '../../layouts'
import { ColorVariablesEnum, Label, SpacingEnum } from '../../theme/globalStyles'


const users = ["Evelyn Krahn", "Sheryl Beer", "Grace J.Brown", "Gloria Ring", "Jacqueline L. Roberson"]
const colors = ["#222", "#eee", "#333", "#666", "#999"]
const StyledItem = styled(IonItem)`
    --padding-top: 1em;
    --padding-bottom: 1em;
    --padding-start: 0.3em;
    --background: transparent;
    border-radius: ${SpacingEnum.subtleCurve};
    --transition: all 0.3s ease-in-out;
    &:hover{
        --background: rgba(var(--ion-color-dark-rgb), 0.4);
    }
    ${Label} {
        margin-left: 0.5em ;
    }
`

const StyledSearchbar = styled(IonSearchbar)`
    --background: rgba(var(--ion-color-dark-rgb), 0.05);
    --placeholder-opacity: 0.8;
    padding: 0;
    & .searchbar-input-container {
        border: ${SpacingEnum.borderThicc} solid ${ColorVariablesEnum.DARK};
        border-radius: ${SpacingEnum.subtleCurve};
        & .searchbar-input {
        padding-top: 1em;
        padding-bottom: 1em;
        }
        & .searchbar-search-icon {
            top: 50%;
            transform: translateY(-50%);
        }
}
    `

const FilterAuthors = () => {
    const [search, setSearch] = React.useState("");
    const [filteredUsers, setFilteredUsers] = React.useState(users);

    React.useEffect(() => {
        setFilteredUsers(users.filter(user => user.toLowerCase().includes(search.toLowerCase())))
    }, [search])
    return (
        // <Center intrinsic={false}>
        <Box  style={{ borderRadius: SpacingEnum.subtleCurve, background: "white" }}>
            <Stack>
                <Heading level="5">Filter by authors</Heading>
                {/* <Box> */}
                <StyledSearchbar mode="md" value={search} onIonChange={(e) => setSearch(e.detail.value!)} placeholder="Find users" />
                {/* </Box> */}
                <Stack space='0'>
                    {filteredUsers.map((user, index) => {
                        return (
                            <StyledItem detail={false} lines="none" mode="ios" button={true} key={index}>
                                <BoringAvatar colors={colors} name={user} />
                                <Label weight='bold'>{user}</Label>
                            </StyledItem>
                        )
                    }
                    )}
                </Stack>
            </Stack>
        </Box>
        // </Center>
    )
}

export default FilterAuthors