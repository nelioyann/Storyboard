import { chevronDown } from 'ionicons/icons'
import React from 'react'
import Button from '../../../components/Buttons/Button'
import RadioGroup from '../../../components/Forms/Input/RadioGroup'
import Popover from '../../../components/Popover/Popover'
import { Box, Stack } from '../../../layouts'
import { ColorLabelsEnum, SpacingEnum } from '../../../theme/globalStyles'

const PopOverContent = () => {
    return (
        <Box borderWidth='0' padding={SpacingEnum['s-3']}>
            <Stack space={SpacingEnum['s-2']}>
                <RadioGroup name="trends" radios={[{ label: "New", value: "New" }, { label: "Trending", value: "Trending" }]} />
            </Stack>
        </Box>
    )
}

const Trending = () => {
    return (
        <Box style={{ borderRadius: SpacingEnum.subtleCurve }}>
            <Button shape='round' icon={chevronDown} iconSlot="end" fill='outline' color={ColorLabelsEnum.DARK} id="trends-trigger" label="Trending" />
            <Popover
                defaultOpen={false}
                onDidDismissHandler={() => { }}
                id="trends-trigger"
                Component={PopOverContent}
            />
        </Box>
    )
}

export default Trending