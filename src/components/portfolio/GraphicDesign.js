import React from 'react'

import {
    Container,
    Holder,
    H31,
    HR,
    A,
    Image,
    BulletList1,
    H42,
} from 'react-stylux'

import nightmaresposter from "../../images/portfolio/graphicdesign/nightmaresPoster.jpg"
import finalRestarauntProject from "../../images/portfolio/graphicdesign/FinalRestarauntProject.jpg";
import LanzaroteCalenderDesign from "../../images/portfolio/graphicdesign/LanzaroteCalenderDesign.jpg";
import MagazineCoverClones from "../../images/portfolio/graphicdesign/MagazineCoverClones.jpg"
//

export default function GraphicDesign() {
    return (
        <Container>
            <HR height="300px" />
            <H31>
                Graphic Design
                    </H31>
            <Holder
                direction="column">
                <Holder
                    direction="column">

                    <Holder>
                        <A width="85%" to="/portfolio/graphicdesign/nightmaresposter">
                            <Image
                                type="square"
                                size='lg'>
                                {nightmaresposter}
                                {"Play poster"}
                            </Image>
                        </A>
                        <Holder
                            direction="column">
                            <H42 margin="0 0 50px 0">
                                Play poster | Illustrator CC | Photoshop CC
                                </H42>
                            <BulletList1>
                                {"Project for a friend's play"}
                                {"Play was housed April 14th 2018"}
                            </BulletList1>
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
                                type="square"
                                size='lg'>
                                {finalRestarauntProject}
                            </Image>
                            <Holder
                                direction="column">
                                <H42 margin="0 0 50px 0">
                                    Final Restaraunt project | InDesign CC | Illustrator CC
                                </H42>
                                <BulletList1>
                                    {'Menu'}
                                    {'Brochure'}
                                    {'Table Tent'}
                                </BulletList1>
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
                                type="square"
                                size='lg'>
                                {MagazineCoverClones}
                            </Image>
                            <Holder
                                direction="column">
                                <H42 margin="0 0 50px 0">
                                    Magazine Cover Clones | Indesign CC | Illustrator CC
                                </H42>
                                <BulletList1>
                                    {'List'}
                                </BulletList1>
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
                                type="square"
                                size='lg'>
                                {LanzaroteCalenderDesign}
                            </Image>
                            <Holder
                                direction="column">
                                <H42 margin="0 0 50px 0">
                                    Lanzorette Calender Design | Illustrator CC
                                </H42>
                                <BulletList1>
                                    {"Calender Challenge design from John McWade"}
                                    {"Sketched to finished project in around 30min"}
                                </BulletList1>
                            </Holder>
                        </Holder>
                    </A>

                </Holder>

            </Holder>
            <HR height="300px" />
        </Container>
    )
}
