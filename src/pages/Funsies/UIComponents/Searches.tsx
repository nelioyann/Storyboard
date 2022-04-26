import React from 'react'
import Heading from '../../../components/Headings/Heading'
import Tag from '../../../components/Tag/Tag'
import { Cluster, Stack, Box } from '../../../layouts'
import { ColorLabelsEnum, SpacingEnum } from '../../../theme/globalStyles'
// https://dribbble.com/shots/13490213-UI-Components-Design/attachments/5094025?mode=media

const labels = ["Portrait", "Landscape", "Square", "Panorama", "Other", "Office", "Architecture", "Nature", "Fashion", "Food", "Travel", "Animals", "Sports", "People", "Tech", "Art"]

const Searches = () => {
    return (
        <Box style={{ borderRadius: SpacingEnum.subtleCurve }}>

            <Stack>
                <Heading level="5">Searches</Heading>
                <Cluster>
                    {labels.map((label, index) => (
                        <Tag color={ColorLabelsEnum.DARK} withCloseIcon label={label} key={`searchTag${index}`} />
                    ))}
                </Cluster>
            </Stack>
        </Box>
    )
}

export default Searches