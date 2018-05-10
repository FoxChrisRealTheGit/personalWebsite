import React from 'react'

import {
    Wrapper,
    Holder,
    H,
    HR,
    A,
    Image,
    List,
} from 'react-stylux'

import nightmaresposter from "../../images/portfolio/graphicdesign/nightmaresPoster.jpg"
import finalRestarauntProject from "../../images/portfolio/graphicdesign/FinalRestarauntProject.jpg";
import LanzaroteCalenderDesign from "../../images/portfolio/graphicdesign/LanzaroteCalenderDesign.jpg";
import MagazineCoverClones from "../../images/portfolio/graphicdesign/MagazineCoverClones.jpg"
//

export default function GraphicDesign() {
    return (
        <Wrapper>
            <HR height="300px" />
            <H>
                Graphic Design
                    </H>
            <Holder
                direction="column">
                <Holder
                    direction="column">

                    <Holder>
                        <A width="85%" to="/portfolio/graphicdesign/nightmaresposter">
                            <Image
                            box="2"
                                size='lg'>
                                {nightmaresposter}
                                {"Play poster"}
                            </Image>
                        </A>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                Play poster | Illustrator CC | Photoshop CC
                                </H>
                            <List>
                                {"Project for a friend's play"}
                                {"Play was housed April 14th 2018"}
                            </List>
                        </Holder>
                    </Holder>

                    <HR />
                </Holder>
                <Holder
                    direction="column"
                >
                    <A width="85%" to="/portfolio/graphicdesign/restarauntproject">
                        <Holder>
                            <Image
                            box="2"
                                size='lg'>
                                {finalRestarauntProject}
                            </Image>
                            <Holder
                                direction="column">
                                <H margin="0 0 50px 0">
                                    Final Restaraunt project | InDesign CC | Illustrator CC
                                </H>
                                <List>
                                    {'Menu'}
                                    {'Brochure'}
                                    {'Table Tent'}
                                </List>
                            </Holder>
                        </Holder>
                    </A>
                    <HR />
                </Holder>

                <Holder
                    direction="column"
                >
                    <A width="85%" to="/portfolio/graphicdesign/magazineclonecovers">
                        <Holder>
                            <Image
                            box="2"
                                size='lg'>
                                {MagazineCoverClones}
                            </Image>
                            <Holder
                                direction="column">
                                <H margin="0 0 50px 0">
                                    Magazine Cover Clones | Indesign CC | Illustrator CC
                                </H>
                                <List>
                                    {'List'}
                                </List>
                            </Holder>
                        </Holder>
                    </A>
                    <HR />
                </Holder>
                <Holder
                    direction="column"
                >
                    <A width="85%" to="/portfolio/graphicdesign/lanzorettecalender">
                        <Holder>
                            <Image
                            box="2"
                                size='lg'>
                                {LanzaroteCalenderDesign}
                            </Image>
                            <Holder
                                direction="column">
                                <H margin="0 0 50px 0">
                                    Lanzorette Calender Design | Illustrator CC
                                </H>
                                <List>
                                    {"Calender Challenge design from John McWade"}
                                    {"Sketched to finished project in around 30min"}
                                </List>
                            </Holder>
                        </Holder>
                    </A>

                </Holder>

            </Holder>
            <HR height="300px" />
        </Wrapper>
    )
}
